import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { supabase } from './supabaseClient';
import './App.css';

function formatTime(value) {
  if (!value || !value.includes(':')) return value;

  const [hours, minutes] = value.split(':').map(Number);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  const hour = hours % 12 || 12;

  return `${hour}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

const ATTENDANCE_TARGET = 75;

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function Dashboard({ user, onLogout }) {
  const storageKey = (name) => `lockdin-${name}-${user.id}`;
  const defaultName =
    (user.user_metadata && user.user_metadata.name) || 'student';

  const [subjects, setSubjects] = useState(() => {
    try {
      const savedSubjects = localStorage.getItem(storageKey('subjects'));

      if (savedSubjects) {
        const parsedSubjects = JSON.parse(savedSubjects);

        if (Array.isArray(parsedSubjects)) {
          return parsedSubjects.map((subject) => ({
            ...subject,
            attendance: Array.isArray(subject.attendance)
              ? subject.attendance
              : [],
          }));
        }
      }
    } catch (error) {
      console.error('Could not load saved subjects:', error);
    }

    return [
      { id: 1, name: 'Mathematics', attendance: [] },
      { id: 2, name: 'AI & ML', attendance: [] },
      { id: 3, name: 'Web Technologies', attendance: [] },
      { id: 4, name: 'Data Structures', attendance: [] },
    ];
  });

  const [assignments, setAssignments] = useState(() => {
    try {
      const savedAssignments = localStorage.getItem(storageKey('assignments'));

      if (savedAssignments) {
        return JSON.parse(savedAssignments);
      }
    } catch (error) {
      console.error('Could not load assignments:', error);
    }

    return [
      {
        id: 1,
        title: 'Web Assignment',
        due: '2026-10-20',
        priority: 'High',
        completed: false,
      },
      {
        id: 2,
        title: 'DSA Project',
        due: '2026-10-24',
        priority: 'Medium',
        completed: false,
      },
      {
        id: 3,
        title: 'Maths Quiz',
        due: '2026-10-28',
        priority: 'Low',
        completed: false,
      },
    ];
  });

  const [classes, setClasses] = useState(() => {
    try {
      const savedClasses = localStorage.getItem(storageKey('classes'));

      if (savedClasses) {
        const parsedClasses = JSON.parse(savedClasses);

        if (Array.isArray(parsedClasses)) {
          return parsedClasses;
        }
      }
    } catch (error) {
      console.error('Could not load classes:', error);
    }

    return [
      { id: 1, time: '09:00', subject: 'Mathematics', room: 'Room 204' },
      { id: 2, time: '11:00', subject: 'AI & ML', room: 'Lab 3' },
      { id: 3, time: '14:00', subject: 'Web Technologies', room: 'Room 110' },
    ];
  });

  const [newSubject, setNewSubject] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState(1);
  const [newTitle, setNewTitle] = useState('');
  const [newDue, setNewDue] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');
  const [newClassSubject, setNewClassSubject] = useState('');
  const [newClassTime, setNewClassTime] = useState('');
  const [newClassRoom, setNewClassRoom] = useState('');
  const [userName, setUserName] = useState(() => {
    try {
      return localStorage.getItem(storageKey('name')) || defaultName;
    } catch (error) {
      return defaultName;
    }
  });

  const selectedSubject = subjects.find(
    (subject) => subject.id === selectedSubjectId
  );

  useEffect(() => {
    try {
      localStorage.setItem(storageKey('subjects'), JSON.stringify(subjects));
    } catch (error) {
      console.error('Could not save subjects:', error);
    }
  }, [subjects]);

  useEffect(() => {
    try {
      localStorage.setItem(
        storageKey('assignments'),
        JSON.stringify(assignments)
      );
    } catch (error) {
      console.error('Could not save assignments:', error);
    }
  }, [assignments]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey('classes'), JSON.stringify(classes));
    } catch (error) {
      console.error('Could not save classes:', error);
    }
  }, [classes]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey('name'), userName);
    } catch (error) {
      console.error('Could not save name:', error);
    }
  }, [userName]);

  function changeName() {
    const entered = window.prompt('What should I call you?', userName);

    if (entered && entered.trim()) {
      setUserName(entered.trim());
    }
  }

  function exportData() {
    const data = {
      app: 'LockdIn',
      version: 1,
      exportedAt: new Date().toISOString(),
      subjects,
      assignments,
      classes,
      userName,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = `lockdin-backup-${new Date().toLocaleDateString('en-CA')}.json`;
    link.click();

    URL.revokeObjectURL(url);
  }

  function importData(event) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);

        if (
          !Array.isArray(data.subjects) ||
          !Array.isArray(data.assignments) ||
          !Array.isArray(data.classes)
        ) {
          throw new Error('Invalid backup file');
        }

        if (
          !window.confirm(
            'This will replace your current data with the backup. Continue?'
          )
        ) {
          return;
        }

        setSubjects(
          data.subjects.map((subject) => ({
            ...subject,
            attendance: Array.isArray(subject.attendance)
              ? subject.attendance
              : [],
          }))
        );
        setAssignments(data.assignments);
        setClasses(data.classes);

        if (typeof data.userName === 'string' && data.userName.trim()) {
          setUserName(data.userName.trim());
        }

        setSelectedSubjectId(
          data.subjects.length > 0 ? data.subjects[0].id : 1
        );
      } catch (error) {
        alert('That file is not a valid LockdIn backup.');
      }
    };

    reader.readAsText(file);
    event.target.value = '';
  }

  function addClass() {
    if (!newClassSubject || !newClassTime) return;

    setClasses((current) => [
      ...current,
      {
        id: Date.now(),
        time: newClassTime,
        subject: newClassSubject,
        room: newClassRoom.trim() || 'No room set',
      },
    ]);

    setNewClassSubject('');
    setNewClassTime('');
    setNewClassRoom('');
  }

  function deleteClass(id) {
    setClasses((current) => current.filter((item) => item.id !== id));
  }

  function addAssignment() {
    const title = newTitle.trim();

    if (!title || !newDue) return;

    setAssignments((current) => [
      ...current,
      {
        id: Date.now(),
        title,
        due: newDue,
        priority: newPriority,
        completed: false,
      },
    ]);

    setNewTitle('');
    setNewDue('');
    setNewPriority('Medium');
  }

  function toggleAssignment(id) {
    setAssignments((current) =>
      current.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function deleteAssignment(id) {
    setAssignments((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  function addSubject() {
    const name = newSubject.trim();

    if (!name) return;

    const alreadyExists = subjects.some(
      (subject) => subject.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyExists) {
      alert('This subject already exists!');
      return;
    }

    const newId = Date.now();

    setSubjects((currentSubjects) => [
      ...currentSubjects,
      {
        id: newId,
        name,
        attendance: [],
      },
    ]);

    setSelectedSubjectId(newId);
    setNewSubject('');
  }

  function recordAttendance(status) {
    if (!selectedSubject) return;

    const record = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      status,
    };

    setSubjects((currentSubjects) =>
      currentSubjects.map((subject) =>
        subject.id === selectedSubjectId
          ? {
              ...subject,
              attendance: [...subject.attendance, record],
            }
          : subject
      )
    );
  }

  function getAttendancePercentage(subject) {
    const countedClasses = subject.attendance.filter(
      (record) => record.status !== 'No class held'
    );

    if (countedClasses.length === 0) return 0;

    const presentClasses = countedClasses.filter(
      (record) => record.status === 'Present'
    ).length;

    return Math.round((presentClasses / countedClasses.length) * 100);
  }

  const sortedClasses = [...classes].sort((a, b) =>
    a.time.localeCompare(b.time)
  );

  const today = new Date().toLocaleDateString('en-CA');

  const sortedAssignments = [...assignments].sort((a, b) => {
    if (a.completed !== b.completed) return a.completed ? 1 : -1;
    return a.due.localeCompare(b.due);
  });

  const totalClasses = subjects.reduce(
    (total, subject) =>
      total +
      subject.attendance.filter(
        (record) => record.status !== 'No class held'
      ).length,
    0
  );

  const totalPresent = subjects.reduce(
    (total, subject) =>
      total +
      subject.attendance.filter((record) => record.status === 'Present')
        .length,
    0
  );

  const overallAttendance =
    totalClasses === 0
      ? null
      : Math.round((totalPresent / totalClasses) * 100);

  const pendingAssignments = assignments.filter(
    (item) => !item.completed
  ).length;

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#dashboard">
          <span className="brand-lock">L</span>
          <span>
            Lockd<span className="lime">In</span>
          </span>
        </a>

        <nav className="navigation">
          <a className="nav-link active" href="#dashboard">
            Dashboard
          </a>
          <a className="nav-link" href="#timetable">
            Timetable
          </a>
          <a className="nav-link" href="#attendance">
            Attendance
          </a>
          <a className="nav-link" href="#assignments">
            Assignments
          </a>
          <a className="nav-link" href="#analytics">
            Analytics
          </a>
        </nav>

        <p className="sidebar-note">
          Small steps
          <br />
          every day.
          <span className="lime"> Big results.</span>
        </p>
        <div className="account-box">
          <p className="muted account-email">{user.email}</p>
          <button type="button" onClick={onLogout}>
            Log out
          </button>
        </div>
      </aside>

      <section className="main-content" id="dashboard">
        <header className="topbar">
          <div>
            <p className="eyebrow">YOUR STUDENT DASHBOARD</p>
            <h1>
              {getGreeting()}, <span className="lime">{userName}.</span>
            </h1>
            <p className="muted">Stay consistent. You've got this.</p>
          </div>
          <div
            className="profile-mark"
            role="button"
            tabIndex={0}
            title="Click to change your name"
            style={{ cursor: 'pointer' }}
            onClick={changeName}
            onKeyDown={(event) => {
              if (event.key === 'Enter') changeName();
            }}
          >
            {userName.charAt(0).toUpperCase()}
          </div>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <p>Attendance</p>
            <strong>
              {overallAttendance === null ? '—%' : `${overallAttendance}%`}
            </strong>
            <span className="muted">
              {totalClasses === 0
                ? 'Add your records'
                : `${totalPresent} of ${totalClasses} classes attended`}
            </span>
          </article>

          <article className="stat-card">
            <p>Today's classes</p>
            <strong>{classes.length}</strong>
            <span className="muted">On your timetable</span>
          </article>

          <article className="stat-card">
            <p>Pending assignments</p>
            <strong>{pendingAssignments}</strong>
            <span className="muted">Not completed yet</span>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel" id="timetable">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">YOUR SCHEDULE</p>
                <h2>Today's timetable</h2>
              </div>
            </div>

            <form
              className="subject-form"
              onSubmit={(event) => {
                event.preventDefault();
                addClass();
              }}
            >
              <select
                value={newClassSubject}
                onChange={(event) => setNewClassSubject(event.target.value)}
                aria-label="Class subject"
              >
                <option value="">Choose subject</option>
                {subjects.map((subject) => (
                  <option key={subject.id} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </select>
              <input
                type="time"
                value={newClassTime}
                onChange={(event) => setNewClassTime(event.target.value)}
                aria-label="Class time"
              />
              <input
                type="text"
                value={newClassRoom}
                onChange={(event) => setNewClassRoom(event.target.value)}
                placeholder="Room (optional)"
                aria-label="Room"
              />
              <button type="submit">+ Add class</button>
            </form>

            <div className="class-list">
              {sortedClasses.length === 0 && (
                <p className="muted">No classes yet.</p>
              )}

              {sortedClasses.map((item) => (
                <div className="class-row" key={item.id}>
                  <span className="status-dot" />
                  <div className="class-info">
                    <strong>{item.subject}</strong>
                    <span className="muted">{formatTime(item.time)}</span>
                  </div>
                  <span className="room muted">{item.room}</span>
                  <button
                    type="button"
                    className="class-delete"
                    onClick={() => deleteClass(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </article>

          <article className="panel" id="assignments">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">STAY AHEAD</p>
                <h2>Upcoming deadlines</h2>
              </div>
            </div>

            <form
              className="subject-form"
              onSubmit={(event) => {
                event.preventDefault();
                addAssignment();
              }}
            >
              <input
                type="text"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                placeholder="Assignment title"
                aria-label="Assignment title"
              />
              <input
                type="date"
                value={newDue}
                onChange={(event) => setNewDue(event.target.value)}
                aria-label="Due date"
              />
              <select
                value={newPriority}
                onChange={(event) => setNewPriority(event.target.value)}
                aria-label="Priority"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <button type="submit">+ Add</button>
            </form>

            <div className="assignment-list">
              {assignments.length === 0 && (
                <p className="muted">No assignments yet.</p>
              )}

              {sortedAssignments.map((item) => {
                const isOverdue = !item.completed && item.due < today;

                return (
                <div
                  className={`assignment-row${isOverdue ? ' overdue' : ''}`}
                  key={item.id}
                >
                  <div>
                    <strong
                      style={{
                        textDecoration: item.completed
                          ? 'line-through'
                          : 'none',
                        opacity: item.completed ? 0.5 : 1,
                      }}
                    >
                      {item.title}
                    </strong>
                    <p className="muted">
                      {item.due}
                      {isOverdue && (
                        <span className="overdue-label"> · Overdue</span>
                      )}
                    </p>
                  </div>

                  <span
                    className={`priority ${item.priority.toLowerCase()}`}
                  >
                    {item.priority}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleAssignment(item.id)}
                  >
                    {item.completed ? 'Undo' : 'Done'}
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteAssignment(item.id)}
                  >
                    Delete
                  </button>
                </div>
                );
              })}
            </div>
          </article>
        </section>

        <section className="panel analytics-panel" id="analytics">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">YOUR PROGRESS</p>
              <h2>Subject-wise attendance</h2>
            </div>
          </div>

          <form
            className="subject-form"
            onSubmit={(event) => {
              event.preventDefault();
              addSubject();
            }}
          >
            <input
              type="text"
              value={newSubject}
              onChange={(event) => setNewSubject(event.target.value)}
              placeholder="Enter a subject name"
              aria-label="New subject name"
            />
            <button type="submit">+ Add subject</button>
          </form>

          <div className="subject-selector">
            <label htmlFor="subject-select">Choose a subject</label>

            <select
              id="subject-select"
              value={selectedSubjectId}
              onChange={(event) =>
                setSelectedSubjectId(Number(event.target.value))
              }
            >
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          {selectedSubject && (
            <div className="attendance-manager">
              <h3>{selectedSubject.name} attendance</h3>

              <p className="muted">
                Record the status of each scheduled class.
              </p>

              <div className="attendance-actions">
                <button
                  type="button"
                  onClick={() => recordAttendance('Present')}
                >
                  Present
                </button>

                <button
                  type="button"
                  onClick={() => recordAttendance('Absent')}
                >
                  Absent
                </button>

                <button
                  type="button"
                  onClick={() => recordAttendance('No class held')}
                >
                  No class held
                </button>
              </div>

              <h4>Attendance history</h4>

              {selectedSubject.attendance.length === 0 ? (
                <p className="muted">No records yet.</p>
              ) : (
                [...selectedSubject.attendance]
                  .reverse()
                  .map((record) => (
                    <div className="attendance-record" key={record.id}>
                      <span>{record.date}</span>
                      <strong>{record.status}</strong>
                    </div>
                  ))
              )}
            </div>
          )}

          <h3 className="subject-grid-heading">All subjects</h3>

          <div className="subject-grid" id="attendance">
            {subjects.map((subject) => {
              const percentage = getAttendancePercentage(subject);
              const recorded = subject.attendance.filter(
                (record) => record.status !== 'No class held'
              ).length;
              const isLow =
                recorded > 0 && percentage < ATTENDANCE_TARGET;

              return (
                <div
                  className={`subject-card${isLow ? ' low' : ''}`}
                  key={subject.id}
                >
                  <div
                    className="progress-ring"
                    style={{
                      '--progress': `${percentage}%`,
                    }}
                  >
                    <span>{percentage}%</span>
                  </div>
                  <strong>{subject.name}</strong>
                  <p className="muted">
                    {
                      subject.attendance.filter(
                        (record) => record.status !== 'No class held'
                      ).length
                    }{' '}
                    classes recorded
                  </p>
                  {isLow && (
                    <span className="low-warning">
                      Below {ATTENDANCE_TARGET}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <h3 className="subject-grid-heading">Backup your data</h3>

          <p className="muted">
            Download your data as a file, or restore it on another device
            or browser.
          </p>

          <div className="backup-actions">
            <button type="button" onClick={exportData}>
              Export data
            </button>

            <label className="file-button">
              Import data
              <input
                type="file"
                accept="application/json,.json"
                hidden
                onChange={importData}
              />
            </label>
          </div>

          <p className="muted sample-note">
            Attendance percentages are calculated from the records you
            enter.
          </p>
        </section>
      </section>
    </main>
  );
}

function AuthScreen() {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    if (mode === 'signup' && !name.trim()) {
      setMessage('Please enter your name.');
      return;
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      return;
    }

    setBusy(true);

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { data: { name: name.trim() } },
        });

        if (error) throw error;

        if (!data.session) {
          setMessage(
            'Account created! Check your email to confirm, then log in.'
          );
          setMode('login');
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) throw error;
      }
    } catch (error) {
      setMessage(error.message || 'Something went wrong. Try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-shell">
      <form className="auth-card" onSubmit={handleSubmit}>
        <a className="brand" href="#top">
          <span className="brand-lock">L</span>
          <span>
            Lockd<span className="lime">In</span>
          </span>
        </a>

        <h1>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h1>
        <p className="muted">
          {mode === 'login'
            ? 'Log in to see your dashboard.'
            : 'Track attendance and deadlines in one place.'}
        </p>

        {mode === 'signup' && (
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            aria-label="Your name"
          />
        )}

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          aria-label="Email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password (6+ characters)"
          aria-label="Password"
          required
        />

        {message && <p className="auth-message">{message}</p>}

        <button type="submit" disabled={busy}>
          {busy
            ? 'Please wait...'
            : mode === 'login'
              ? 'Log in'
              : 'Sign up'}
        </button>

        <p className="muted auth-switch">
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            className="link-button"
            onClick={() => {
              setMode(mode === 'login' ? 'signup' : 'login');
              setMessage('');
            }}
          >
            {mode === 'login' ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </form>
    </main>
  );
}

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  if (loading) {
    return (
      <main className="auth-shell">
        <p className="muted">Loading...</p>
      </main>
    );
  }

  return (
    <>
      <Analytics />
      {session ? (
        <Dashboard
          key={session.user.id}
          user={session.user}
          onLogout={handleLogout}
        />
      ) : (
        <AuthScreen />
      )}
    </>
  );
}

export default App;