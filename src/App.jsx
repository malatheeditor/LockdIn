import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { supabase } from './supabaseClient';
import './App.css';

function LogoFull({ height = 40 }) {
  return (
    <svg
      className="logo-full"
      height={height}
      viewBox="0 0 440.2 100"
      role="img"
      aria-label="LockdIn"
    >
      <rect width="100" height="100" rx="22" fill="#B6F23A" />
      <path d="M23.0 27.9 L35.5 27.9 L35.5 59.6 L46.6 59.6 L67.4 34.7 L77.0 42.8 L52.4 72.1 L23.0 72.1Z" fill="#090A0F" />
      <path
        d="M124.0 18.0 L133.0 18.0 L133.0 82.0 L124.0 82.0Z M124.0 73.0 L165.0 73.0 L157.3 82.0 L124.0 82.0Z M216.2 59.0 L216.2 59.6 L216.1 60.2 L216.1 60.8 L216.0 61.4 L216.0 62.0 L215.9 62.6 L215.8 63.2 L215.7 63.8 L215.5 64.3 L215.4 64.9 L215.2 65.5 L215.0 66.1 L214.8 66.7 L214.6 67.2 L214.4 67.8 L214.2 68.3 L213.9 68.9 L213.6 69.4 L213.4 70.0 L213.1 70.5 L212.8 71.0 L212.4 71.5 L212.1 72.0 L211.8 72.5 L211.4 73.0 L211.0 73.5 L210.6 73.9 L210.2 74.4 L209.8 74.8 L209.4 75.3 L209.0 75.7 L208.5 76.1 L208.1 76.5 L207.6 76.9 L207.1 77.2 L206.7 77.6 L206.2 77.9 L205.7 78.3 L205.2 78.6 L204.6 78.9 L204.1 79.2 L203.6 79.5 L203.0 79.8 L202.5 80.0 L201.9 80.2 L201.4 80.5 L200.8 80.7 L200.2 80.9 L199.7 81.1 L199.1 81.2 L198.5 81.4 L197.9 81.5 L197.3 81.6 L196.7 81.7 L196.1 81.8 L195.5 81.9 L194.9 81.9 L194.3 82.0 L193.7 82.0 L193.1 82.0 L192.5 82.0 L191.9 82.0 L191.3 81.9 L190.7 81.9 L190.1 81.8 L189.5 81.7 L188.9 81.6 L188.3 81.5 L187.7 81.4 L187.2 81.2 L186.6 81.1 L186.0 80.9 L185.4 80.7 L184.9 80.5 L184.3 80.2 L183.7 80.0 L183.2 79.8 L182.7 79.5 L182.1 79.2 L181.6 78.9 L181.1 78.6 L180.6 78.3 L180.1 77.9 L179.6 77.6 L179.1 77.2 L178.6 76.9 L178.2 76.5 L177.7 76.1 L177.3 75.7 L176.8 75.3 L176.4 74.8 L176.0 74.4 L175.6 73.9 L175.2 73.5 L174.8 73.0 L174.5 72.5 L174.1 72.0 L173.8 71.5 L173.5 71.0 L173.2 70.5 L172.9 70.0 L172.6 69.4 L172.3 68.9 L172.1 68.3 L171.8 67.8 L171.6 67.2 L171.4 66.7 L171.2 66.1 L171.0 65.5 L170.9 64.9 L170.7 64.3 L170.6 63.8 L170.5 63.2 L170.4 62.6 L170.3 62.0 L170.2 61.4 L170.2 60.8 L170.1 60.2 L170.1 59.6 L170.1 59.0 L170.1 58.4 L170.1 57.8 L170.2 57.2 L170.2 56.6 L170.3 56.0 L170.4 55.4 L170.5 54.8 L170.6 54.2 L170.7 53.6 L170.9 53.0 L171.0 52.4 L171.2 51.8 L171.4 51.3 L171.6 50.7 L171.8 50.1 L172.1 49.6 L172.3 49.0 L172.6 48.5 L172.9 48.0 L173.2 47.4 L173.5 46.9 L173.8 46.4 L174.1 45.9 L174.5 45.4 L174.8 44.9 L175.2 44.5 L175.6 44.0 L176.0 43.5 L176.4 43.1 L176.8 42.7 L177.3 42.2 L177.7 41.8 L178.2 41.4 L178.6 41.1 L179.1 40.7 L179.6 40.3 L180.1 40.0 L180.6 39.6 L181.1 39.3 L181.6 39.0 L182.1 38.7 L182.7 38.4 L183.2 38.2 L183.7 37.9 L184.3 37.7 L184.9 37.5 L185.4 37.2 L186.0 37.0 L186.6 36.9 L187.2 36.7 L187.7 36.6 L188.3 36.4 L188.9 36.3 L189.5 36.2 L190.1 36.1 L190.7 36.0 L191.3 36.0 L191.9 36.0 L192.5 35.9 L193.1 35.9 L193.7 35.9 L194.3 36.0 L194.9 36.0 L195.5 36.0 L196.1 36.1 L196.7 36.2 L197.3 36.3 L197.9 36.4 L198.5 36.6 L199.1 36.7 L199.7 36.9 L200.2 37.0 L200.8 37.2 L201.4 37.5 L201.9 37.7 L202.5 37.9 L203.0 38.2 L203.6 38.4 L204.1 38.7 L204.6 39.0 L205.2 39.3 L205.7 39.6 L206.2 40.0 L206.7 40.3 L207.1 40.7 L207.6 41.1 L208.1 41.4 L208.5 41.8 L209.0 42.2 L209.4 42.7 L209.8 43.1 L210.2 43.5 L210.6 44.0 L211.0 44.5 L211.4 44.9 L211.8 45.4 L212.1 45.9 L212.4 46.4 L212.8 46.9 L213.1 47.4 L213.4 48.0 L213.6 48.5 L213.9 49.0 L214.2 49.6 L214.4 50.1 L214.6 50.7 L214.8 51.3 L215.0 51.8 L215.2 52.4 L215.4 53.0 L215.5 53.6 L215.7 54.2 L215.8 54.8 L215.9 55.4 L216.0 56.0 L216.0 56.6 L216.1 57.2 L216.1 57.8 L216.2 58.4 L216.2 59.0Z M207.2 59.0 L207.2 59.3 L207.2 59.7 L207.2 60.1 L207.1 60.4 L207.1 60.8 L207.0 61.2 L207.0 61.5 L206.9 61.9 L206.8 62.2 L206.7 62.6 L206.6 63.0 L206.5 63.3 L206.4 63.7 L206.3 64.0 L206.1 64.3 L206.0 64.7 L205.8 65.0 L205.7 65.4 L205.5 65.7 L205.3 66.0 L205.1 66.3 L204.9 66.6 L204.7 66.9 L204.5 67.2 L204.3 67.5 L204.1 67.8 L203.8 68.1 L203.6 68.4 L203.3 68.7 L203.1 68.9 L202.8 69.2 L202.5 69.4 L202.3 69.7 L202.0 69.9 L201.7 70.1 L201.4 70.4 L201.1 70.6 L200.8 70.8 L200.5 71.0 L200.2 71.2 L199.8 71.3 L199.5 71.5 L199.2 71.7 L198.8 71.8 L198.5 72.0 L198.2 72.1 L197.8 72.2 L197.5 72.4 L197.1 72.5 L196.8 72.6 L196.4 72.7 L196.0 72.7 L195.7 72.8 L195.3 72.9 L195.0 72.9 L194.6 73.0 L194.2 73.0 L193.9 73.0 L193.5 73.0 L193.1 73.0 L192.8 73.0 L192.4 73.0 L192.0 73.0 L191.6 73.0 L191.3 72.9 L190.9 72.9 L190.6 72.8 L190.2 72.7 L189.8 72.7 L189.5 72.6 L189.1 72.5 L188.8 72.4 L188.4 72.2 L188.1 72.1 L187.7 72.0 L187.4 71.8 L187.1 71.7 L186.7 71.5 L186.4 71.3 L186.1 71.2 L185.8 71.0 L185.5 70.8 L185.1 70.6 L184.8 70.4 L184.5 70.1 L184.3 69.9 L184.0 69.7 L183.7 69.4 L183.4 69.2 L183.2 68.9 L182.9 68.7 L182.7 68.4 L182.4 68.1 L182.2 67.8 L181.9 67.5 L181.7 67.2 L181.5 66.9 L181.3 66.6 L181.1 66.3 L180.9 66.0 L180.7 65.7 L180.6 65.4 L180.4 65.0 L180.3 64.7 L180.1 64.3 L180.0 64.0 L179.8 63.7 L179.7 63.3 L179.6 63.0 L179.5 62.6 L179.4 62.2 L179.3 61.9 L179.3 61.5 L179.2 61.2 L179.2 60.8 L179.1 60.4 L179.1 60.1 L179.1 59.7 L179.0 59.3 L179.0 59.0 L179.0 58.6 L179.1 58.2 L179.1 57.9 L179.1 57.5 L179.2 57.1 L179.2 56.8 L179.3 56.4 L179.3 56.0 L179.4 55.7 L179.5 55.3 L179.6 55.0 L179.7 54.6 L179.8 54.3 L180.0 53.9 L180.1 53.6 L180.3 53.2 L180.4 52.9 L180.6 52.6 L180.7 52.2 L180.9 51.9 L181.1 51.6 L181.3 51.3 L181.5 51.0 L181.7 50.7 L181.9 50.4 L182.2 50.1 L182.4 49.8 L182.7 49.5 L182.9 49.3 L183.2 49.0 L183.4 48.7 L183.7 48.5 L184.0 48.3 L184.3 48.0 L184.5 47.8 L184.8 47.6 L185.1 47.4 L185.5 47.2 L185.8 47.0 L186.1 46.8 L186.4 46.6 L186.7 46.4 L187.1 46.3 L187.4 46.1 L187.7 46.0 L188.1 45.8 L188.4 45.7 L188.8 45.6 L189.1 45.5 L189.5 45.4 L189.8 45.3 L190.2 45.2 L190.6 45.1 L190.9 45.1 L191.3 45.0 L191.6 45.0 L192.0 44.9 L192.4 44.9 L192.8 44.9 L193.1 44.9 L193.5 44.9 L193.9 44.9 L194.2 44.9 L194.6 45.0 L195.0 45.0 L195.3 45.1 L195.7 45.1 L196.0 45.2 L196.4 45.3 L196.8 45.4 L197.1 45.5 L197.5 45.6 L197.8 45.7 L198.2 45.8 L198.5 46.0 L198.8 46.1 L199.2 46.3 L199.5 46.4 L199.8 46.6 L200.2 46.8 L200.5 47.0 L200.8 47.2 L201.1 47.4 L201.4 47.6 L201.7 47.8 L202.0 48.0 L202.3 48.3 L202.5 48.5 L202.8 48.7 L203.1 49.0 L203.3 49.3 L203.6 49.5 L203.8 49.8 L204.1 50.1 L204.3 50.4 L204.5 50.7 L204.7 51.0 L204.9 51.3 L205.1 51.6 L205.3 51.9 L205.5 52.2 L205.7 52.6 L205.8 52.9 L206.0 53.2 L206.1 53.6 L206.3 53.9 L206.4 54.3 L206.5 54.6 L206.6 55.0 L206.7 55.3 L206.8 55.7 L206.9 56.0 L207.0 56.4 L207.0 56.8 L207.1 57.1 L207.1 57.5 L207.2 57.9 L207.2 58.2 L207.2 58.6 L207.2 59.0Z M264.0 74.4 L263.6 74.8 L263.2 75.3 L262.7 75.7 L262.3 76.1 L261.8 76.5 L261.3 76.9 L260.8 77.3 L260.3 77.7 L259.8 78.0 L259.3 78.4 L258.8 78.7 L258.3 79.0 L257.7 79.3 L257.2 79.6 L256.6 79.8 L256.1 80.1 L255.5 80.3 L254.9 80.6 L254.3 80.8 L253.7 81.0 L253.2 81.1 L252.6 81.3 L252.0 81.4 L251.4 81.6 L250.7 81.7 L250.1 81.8 L249.5 81.8 L248.9 81.9 L248.3 82.0 L247.7 82.0 L247.1 82.0 L246.5 82.0 L245.8 82.0 L245.2 81.9 L244.6 81.9 L244.0 81.8 L243.4 81.7 L242.8 81.6 L242.2 81.5 L241.6 81.4 L241.0 81.2 L240.4 81.1 L239.8 80.9 L239.2 80.7 L238.6 80.5 L238.1 80.2 L237.5 80.0 L236.9 79.7 L236.4 79.5 L235.8 79.2 L235.3 78.9 L234.8 78.6 L234.2 78.2 L233.7 77.9 L233.2 77.5 L232.7 77.1 L232.3 76.8 L231.8 76.4 L231.3 76.0 L230.9 75.5 L230.4 75.1 L230.0 74.7 L229.6 74.2 L229.2 73.7 L228.8 73.3 L228.4 72.8 L228.1 72.3 L227.7 71.8 L227.4 71.2 L227.1 70.7 L226.8 70.2 L226.5 69.6 L226.2 69.1 L225.9 68.5 L225.7 68.0 L225.4 67.4 L225.2 66.8 L225.0 66.2 L224.8 65.6 L224.7 65.1 L224.5 64.5 L224.4 63.9 L224.2 63.3 L224.1 62.6 L224.0 62.0 L224.0 61.4 L223.9 60.8 L223.9 60.2 L223.8 59.6 L223.8 59.0 L223.8 58.3 L223.9 57.7 L223.9 57.1 L224.0 56.5 L224.0 55.9 L224.1 55.3 L224.2 54.7 L224.4 54.1 L224.5 53.5 L224.7 52.9 L224.8 52.3 L225.0 51.7 L225.2 51.1 L225.4 50.5 L225.7 50.0 L225.9 49.4 L226.2 48.8 L226.5 48.3 L226.8 47.7 L227.1 47.2 L227.4 46.7 L227.7 46.2 L228.1 45.7 L228.4 45.2 L228.8 44.7 L229.2 44.2 L229.6 43.7 L230.0 43.3 L230.4 42.8 L230.9 42.4 L231.3 42.0 L231.8 41.6 L232.3 41.2 L232.7 40.8 L233.2 40.4 L233.7 40.0 L234.2 39.7 L234.8 39.4 L235.3 39.0 L235.8 38.7 L236.4 38.5 L236.9 38.2 L237.5 37.9 L238.1 37.7 L238.6 37.5 L239.2 37.2 L239.8 37.0 L240.4 36.9 L241.0 36.7 L241.6 36.5 L242.2 36.4 L242.8 36.3 L243.4 36.2 L244.0 36.1 L244.6 36.0 L245.2 36.0 L245.8 35.9 L246.5 35.9 L247.1 35.9 L247.7 35.9 L248.3 36.0 L248.9 36.0 L249.5 36.1 L250.1 36.2 L250.7 36.2 L251.4 36.4 L252.0 36.5 L252.6 36.6 L253.2 36.8 L253.7 37.0 L254.3 37.2 L254.9 37.4 L255.5 37.6 L256.1 37.8 L256.6 38.1 L257.2 38.3 L257.7 38.6 L258.3 38.9 L258.8 39.2 L259.3 39.6 L259.8 39.9 L260.3 40.3 L260.8 40.6 L261.3 41.0 L261.8 41.4 L262.3 41.8 L262.7 42.2 L263.2 42.6 L263.6 43.1 L264.0 43.5 L257.3 49.5 L257.1 49.3 L256.8 49.0 L256.6 48.7 L256.3 48.5 L256.0 48.2 L255.7 48.0 L255.4 47.8 L255.1 47.5 L254.8 47.3 L254.5 47.1 L254.2 46.9 L253.8 46.7 L253.5 46.5 L253.2 46.4 L252.8 46.2 L252.5 46.0 L252.1 45.9 L251.8 45.8 L251.4 45.6 L251.1 45.5 L250.7 45.4 L250.3 45.3 L250.0 45.2 L249.6 45.1 L249.2 45.1 L248.9 45.0 L248.5 45.0 L248.1 44.9 L247.7 44.9 L247.4 44.9 L247.0 44.9 L246.6 44.9 L246.2 44.9 L245.9 44.9 L245.5 44.9 L245.1 45.0 L244.7 45.0 L244.4 45.1 L244.0 45.2 L243.6 45.3 L243.3 45.4 L242.9 45.5 L242.5 45.6 L242.2 45.7 L241.8 45.8 L241.5 46.0 L241.1 46.1 L240.8 46.3 L240.5 46.4 L240.1 46.6 L239.8 46.8 L239.5 47.0 L239.2 47.2 L238.8 47.4 L238.5 47.6 L238.2 47.8 L237.9 48.1 L237.7 48.3 L237.4 48.6 L237.1 48.8 L236.8 49.1 L236.6 49.4 L236.3 49.6 L236.1 49.9 L235.8 50.2 L235.6 50.5 L235.4 50.8 L235.2 51.1 L235.0 51.5 L234.8 51.8 L234.6 52.1 L234.4 52.4 L234.2 52.8 L234.1 53.1 L233.9 53.5 L233.8 53.8 L233.6 54.2 L233.5 54.5 L233.4 54.9 L233.3 55.2 L233.2 55.6 L233.1 56.0 L233.0 56.3 L233.0 56.7 L232.9 57.1 L232.9 57.5 L232.8 57.8 L232.8 58.2 L232.8 58.6 L232.8 59.0 L232.8 59.3 L232.8 59.7 L232.8 60.1 L232.9 60.5 L232.9 60.8 L233.0 61.2 L233.0 61.6 L233.1 62.0 L233.2 62.3 L233.3 62.7 L233.4 63.0 L233.5 63.4 L233.6 63.8 L233.8 64.1 L233.9 64.5 L234.1 64.8 L234.2 65.1 L234.4 65.5 L234.6 65.8 L234.8 66.1 L235.0 66.5 L235.2 66.8 L235.4 67.1 L235.6 67.4 L235.8 67.7 L236.1 68.0 L236.3 68.3 L236.6 68.6 L236.8 68.8 L237.1 69.1 L237.4 69.3 L237.7 69.6 L237.9 69.8 L238.2 70.1 L238.5 70.3 L238.8 70.5 L239.2 70.7 L239.5 70.9 L239.8 71.1 L240.1 71.3 L240.5 71.5 L240.8 71.7 L241.1 71.8 L241.5 72.0 L241.8 72.1 L242.2 72.2 L242.5 72.4 L242.9 72.5 L243.3 72.6 L243.6 72.7 L244.0 72.7 L244.4 72.8 L244.7 72.9 L245.1 72.9 L245.5 73.0 L245.9 73.0 L246.2 73.0 L246.6 73.0 L247.0 73.0 L247.4 73.0 L247.7 73.0 L248.1 73.0 L248.5 72.9 L248.9 72.9 L249.2 72.8 L249.6 72.8 L250.0 72.7 L250.3 72.6 L250.7 72.5 L251.1 72.4 L251.4 72.3 L251.8 72.2 L252.1 72.0 L252.5 71.9 L252.8 71.7 L253.2 71.6 L253.5 71.4 L253.8 71.2 L254.2 71.0 L254.5 70.8 L254.8 70.6 L255.1 70.4 L255.4 70.2 L255.7 69.9 L256.0 69.7 L256.3 69.4 L256.6 69.2 L256.8 68.9 L257.1 68.7 L257.3 68.4Z M277.6 18.0 L286.6 18.0 L286.6 82.0 L277.6 82.0Z M310.2 35.9 L324.3 35.9 L285.9 67.6 L285.9 56.0Z M295.4 50.0 L305.9 50.0 L325.1 82.0 L314.6 82.0Z M372.3 59.0 L372.3 59.6 L372.3 60.2 L372.2 60.8 L372.2 61.4 L372.1 62.0 L372.0 62.6 L371.9 63.2 L371.8 63.8 L371.7 64.3 L371.5 64.9 L371.4 65.5 L371.2 66.1 L371.0 66.7 L370.8 67.2 L370.6 67.8 L370.3 68.3 L370.1 68.9 L369.8 69.4 L369.5 70.0 L369.2 70.5 L368.9 71.0 L368.6 71.5 L368.3 72.0 L367.9 72.5 L367.6 73.0 L367.2 73.5 L366.8 73.9 L366.4 74.4 L366.0 74.8 L365.6 75.3 L365.1 75.7 L364.7 76.1 L364.2 76.5 L363.8 76.9 L363.3 77.2 L362.8 77.6 L362.3 77.9 L361.8 78.3 L361.3 78.6 L360.8 78.9 L360.3 79.2 L359.7 79.5 L359.2 79.8 L358.7 80.0 L358.1 80.2 L357.5 80.5 L357.0 80.7 L356.4 80.9 L355.8 81.1 L355.2 81.2 L354.7 81.4 L354.1 81.5 L353.5 81.6 L352.9 81.7 L352.3 81.8 L351.7 81.9 L351.1 81.9 L350.5 82.0 L349.9 82.0 L349.3 82.0 L348.7 82.0 L348.1 82.0 L347.5 81.9 L346.9 81.9 L346.3 81.8 L345.7 81.7 L345.1 81.6 L344.5 81.5 L343.9 81.4 L343.3 81.2 L342.7 81.1 L342.2 80.9 L341.6 80.7 L341.0 80.5 L340.5 80.2 L339.9 80.0 L339.4 79.8 L338.8 79.5 L338.3 79.2 L337.8 78.9 L337.2 78.6 L336.7 78.3 L336.2 77.9 L335.7 77.6 L335.3 77.2 L334.8 76.9 L334.3 76.5 L333.9 76.1 L333.4 75.7 L333.0 75.3 L332.6 74.8 L332.2 74.4 L331.8 73.9 L331.4 73.5 L331.0 73.0 L330.6 72.5 L330.3 72.0 L330.0 71.5 L329.6 71.0 L329.3 70.5 L329.0 70.0 L328.8 69.4 L328.5 68.9 L328.2 68.3 L328.0 67.8 L327.8 67.2 L327.6 66.7 L327.4 66.1 L327.2 65.5 L327.0 64.9 L326.9 64.3 L326.7 63.8 L326.6 63.2 L326.5 62.6 L326.4 62.0 L326.4 61.4 L326.3 60.8 L326.3 60.2 L326.2 59.6 L326.2 59.0 L326.2 58.4 L326.3 57.8 L326.3 57.2 L326.4 56.6 L326.4 56.0 L326.5 55.4 L326.6 54.8 L326.7 54.2 L326.9 53.6 L327.0 53.0 L327.2 52.4 L327.4 51.8 L327.6 51.3 L327.8 50.7 L328.0 50.1 L328.2 49.6 L328.5 49.0 L328.8 48.5 L329.0 48.0 L329.3 47.4 L329.6 46.9 L330.0 46.4 L330.3 45.9 L330.6 45.4 L331.0 44.9 L331.4 44.5 L331.8 44.0 L332.2 43.5 L332.6 43.1 L333.0 42.7 L333.4 42.2 L333.9 41.8 L334.3 41.4 L334.8 41.1 L335.3 40.7 L335.7 40.3 L336.2 40.0 L336.7 39.6 L337.2 39.3 L337.8 39.0 L338.3 38.7 L338.8 38.4 L339.4 38.2 L339.9 37.9 L340.5 37.7 L341.0 37.5 L341.6 37.2 L342.2 37.0 L342.7 36.9 L343.3 36.7 L343.9 36.6 L344.5 36.4 L345.1 36.3 L345.7 36.2 L346.3 36.1 L346.9 36.0 L347.5 36.0 L348.1 36.0 L348.7 35.9 L349.3 35.9 L349.9 35.9 L350.5 36.0 L351.1 36.0 L351.7 36.0 L352.3 36.1 L352.9 36.2 L353.5 36.3 L354.1 36.4 L354.7 36.6 L355.2 36.7 L355.8 36.9 L356.4 37.0 L357.0 37.2 L357.5 37.5 L358.1 37.7 L358.7 37.9 L359.2 38.2 L359.7 38.4 L360.3 38.7 L360.8 39.0 L361.3 39.3 L361.8 39.6 L362.3 40.0 L362.8 40.3 L363.3 40.7 L363.8 41.1 L364.2 41.4 L364.7 41.8 L365.1 42.2 L365.6 42.7 L366.0 43.1 L366.4 43.5 L366.8 44.0 L367.2 44.5 L367.6 44.9 L367.9 45.4 L368.3 45.9 L368.6 46.4 L368.9 46.9 L369.2 47.4 L369.5 48.0 L369.8 48.5 L370.1 49.0 L370.3 49.6 L370.6 50.1 L370.8 50.7 L371.0 51.3 L371.2 51.8 L371.4 52.4 L371.5 53.0 L371.7 53.6 L371.8 54.2 L371.9 54.8 L372.0 55.4 L372.1 56.0 L372.2 56.6 L372.2 57.2 L372.3 57.8 L372.3 58.4 L372.3 59.0Z M363.4 59.0 L363.4 59.3 L363.3 59.7 L363.3 60.1 L363.3 60.4 L363.2 60.8 L363.2 61.2 L363.1 61.5 L363.1 61.9 L363.0 62.2 L362.9 62.6 L362.8 63.0 L362.7 63.3 L362.6 63.7 L362.4 64.0 L362.3 64.3 L362.1 64.7 L362.0 65.0 L361.8 65.4 L361.7 65.7 L361.5 66.0 L361.3 66.3 L361.1 66.6 L360.9 66.9 L360.7 67.2 L360.5 67.5 L360.2 67.8 L360.0 68.1 L359.7 68.4 L359.5 68.7 L359.2 68.9 L359.0 69.2 L358.7 69.4 L358.4 69.7 L358.1 69.9 L357.9 70.1 L357.6 70.4 L357.3 70.6 L356.9 70.8 L356.6 71.0 L356.3 71.2 L356.0 71.3 L355.7 71.5 L355.3 71.7 L355.0 71.8 L354.7 72.0 L354.3 72.1 L354.0 72.2 L353.6 72.4 L353.3 72.5 L352.9 72.6 L352.6 72.7 L352.2 72.7 L351.8 72.8 L351.5 72.9 L351.1 72.9 L350.8 73.0 L350.4 73.0 L350.0 73.0 L349.6 73.0 L349.3 73.0 L348.9 73.0 L348.5 73.0 L348.2 73.0 L347.8 73.0 L347.4 72.9 L347.1 72.9 L346.7 72.8 L346.4 72.7 L346.0 72.7 L345.6 72.6 L345.3 72.5 L344.9 72.4 L344.6 72.2 L344.2 72.1 L343.9 72.0 L343.6 71.8 L343.2 71.7 L342.9 71.5 L342.6 71.3 L342.2 71.2 L341.9 71.0 L341.6 70.8 L341.3 70.6 L341.0 70.4 L340.7 70.1 L340.4 69.9 L340.1 69.7 L339.9 69.4 L339.6 69.2 L339.3 68.9 L339.1 68.7 L338.8 68.4 L338.6 68.1 L338.3 67.8 L338.1 67.5 L337.9 67.2 L337.7 66.9 L337.5 66.6 L337.3 66.3 L337.1 66.0 L336.9 65.7 L336.7 65.4 L336.6 65.0 L336.4 64.7 L336.3 64.3 L336.1 64.0 L336.0 63.7 L335.9 63.3 L335.8 63.0 L335.7 62.6 L335.6 62.2 L335.5 61.9 L335.4 61.5 L335.4 61.2 L335.3 60.8 L335.3 60.4 L335.2 60.1 L335.2 59.7 L335.2 59.3 L335.2 59.0 L335.2 58.6 L335.2 58.2 L335.2 57.9 L335.3 57.5 L335.3 57.1 L335.4 56.8 L335.4 56.4 L335.5 56.0 L335.6 55.7 L335.7 55.3 L335.8 55.0 L335.9 54.6 L336.0 54.3 L336.1 53.9 L336.3 53.6 L336.4 53.2 L336.6 52.9 L336.7 52.6 L336.9 52.2 L337.1 51.9 L337.3 51.6 L337.5 51.3 L337.7 51.0 L337.9 50.7 L338.1 50.4 L338.3 50.1 L338.6 49.8 L338.8 49.5 L339.1 49.3 L339.3 49.0 L339.6 48.7 L339.9 48.5 L340.1 48.3 L340.4 48.0 L340.7 47.8 L341.0 47.6 L341.3 47.4 L341.6 47.2 L341.9 47.0 L342.2 46.8 L342.6 46.6 L342.9 46.4 L343.2 46.3 L343.6 46.1 L343.9 46.0 L344.2 45.8 L344.6 45.7 L344.9 45.6 L345.3 45.5 L345.6 45.4 L346.0 45.3 L346.4 45.2 L346.7 45.1 L347.1 45.1 L347.4 45.0 L347.8 45.0 L348.2 44.9 L348.5 44.9 L348.9 44.9 L349.3 44.9 L349.6 44.9 L350.0 44.9 L350.4 44.9 L350.8 45.0 L351.1 45.0 L351.5 45.1 L351.8 45.1 L352.2 45.2 L352.6 45.3 L352.9 45.4 L353.3 45.5 L353.6 45.6 L354.0 45.7 L354.3 45.8 L354.7 46.0 L355.0 46.1 L355.3 46.3 L355.7 46.4 L356.0 46.6 L356.3 46.8 L356.6 47.0 L356.9 47.2 L357.3 47.4 L357.6 47.6 L357.9 47.8 L358.1 48.0 L358.4 48.3 L358.7 48.5 L359.0 48.7 L359.2 49.0 L359.5 49.3 L359.7 49.5 L360.0 49.8 L360.2 50.1 L360.5 50.4 L360.7 50.7 L360.9 51.0 L361.1 51.3 L361.3 51.6 L361.5 51.9 L361.7 52.2 L361.8 52.6 L362.0 52.9 L362.1 53.2 L362.3 53.6 L362.4 53.9 L362.6 54.3 L362.7 54.6 L362.8 55.0 L362.9 55.3 L363.0 55.7 L363.1 56.0 L363.1 56.4 L363.2 56.8 L363.2 57.1 L363.3 57.5 L363.3 57.9 L363.3 58.2 L363.4 58.6 L363.4 59.0Z M363.4 18.0 L372.3 18.0 L372.3 82.0 L363.4 82.0Z"
        fill="#F4F4F7"
        fillRule="evenodd"
      />
      <path
        d="M385.1 18.0 L394.1 18.0 L394.1 82.0 L385.1 82.0Z M401.8 35.9 L410.7 35.9 L410.7 82.0 L401.8 82.0Z M401.8 55.1 L401.8 54.8 L401.8 54.4 L401.8 54.1 L401.8 53.8 L401.8 53.4 L401.9 53.1 L401.9 52.8 L401.9 52.4 L402.0 52.1 L402.1 51.8 L402.1 51.5 L402.2 51.1 L402.3 50.8 L402.3 50.5 L402.4 50.2 L402.5 49.8 L402.6 49.5 L402.7 49.2 L402.8 48.9 L402.9 48.6 L403.0 48.2 L403.2 47.9 L403.3 47.6 L403.4 47.3 L403.6 47.0 L403.7 46.7 L403.9 46.4 L404.0 46.1 L404.2 45.8 L404.3 45.5 L404.5 45.2 L404.7 44.9 L404.9 44.7 L405.0 44.4 L405.2 44.1 L405.4 43.8 L405.6 43.6 L405.8 43.3 L406.0 43.0 L406.3 42.8 L406.5 42.5 L406.7 42.3 L406.9 42.0 L407.1 41.8 L407.4 41.5 L407.6 41.3 L407.9 41.1 L408.1 40.9 L408.4 40.6 L408.6 40.4 L408.9 40.2 L409.1 40.0 L409.4 39.8 L409.7 39.6 L409.9 39.4 L410.2 39.2 L410.5 39.0 L410.8 38.8 L411.1 38.7 L411.4 38.5 L411.7 38.3 L411.9 38.2 L412.2 38.0 L412.5 37.9 L412.8 37.7 L413.2 37.6 L413.5 37.4 L413.8 37.3 L414.1 37.2 L414.4 37.1 L414.7 37.0 L415.0 36.9 L415.3 36.8 L415.7 36.7 L416.0 36.6 L416.3 36.5 L416.6 36.4 L417.0 36.3 L417.3 36.3 L417.6 36.2 L418.0 36.2 L418.3 36.1 L418.6 36.1 L419.0 36.0 L419.3 36.0 L419.6 36.0 L420.0 35.9 L420.3 35.9 L420.6 35.9 L421.0 35.9 L421.3 35.9 L421.6 35.9 L422.0 35.9 L422.3 36.0 L422.6 36.0 L423.0 36.0 L423.3 36.1 L423.6 36.1 L424.0 36.2 L424.3 36.2 L424.6 36.3 L425.0 36.3 L425.3 36.4 L425.6 36.5 L425.9 36.6 L426.3 36.7 L426.6 36.8 L426.9 36.9 L427.2 37.0 L427.5 37.1 L427.8 37.2 L428.2 37.3 L428.5 37.4 L428.8 37.6 L429.1 37.7 L429.4 37.9 L429.7 38.0 L430.0 38.2 L430.3 38.3 L430.6 38.5 L430.8 38.7 L431.1 38.8 L431.4 39.0 L431.7 39.2 L432.0 39.4 L432.2 39.6 L432.5 39.8 L432.8 40.0 L433.0 40.2 L433.3 40.4 L433.6 40.6 L433.8 40.9 L434.1 41.1 L434.3 41.3 L434.5 41.5 L434.8 41.8 L435.0 42.0 L435.2 42.3 L435.5 42.5 L435.7 42.8 L435.9 43.0 L436.1 43.3 L436.3 43.6 L436.5 43.8 L436.7 44.1 L436.9 44.4 L437.1 44.7 L437.2 44.9 L437.4 45.2 L437.6 45.5 L437.8 45.8 L437.9 46.1 L438.1 46.4 L438.2 46.7 L438.4 47.0 L438.5 47.3 L438.6 47.6 L438.8 47.9 L438.9 48.2 L439.0 48.6 L439.1 48.9 L439.2 49.2 L439.3 49.5 L439.4 49.8 L439.5 50.2 L439.6 50.5 L439.7 50.8 L439.7 51.1 L439.8 51.5 L439.9 51.8 L439.9 52.1 L440.0 52.4 L440.0 52.8 L440.1 53.1 L440.1 53.4 L440.1 53.8 L440.1 54.1 L440.1 54.4 L440.2 54.8 L440.2 55.1 L431.2 55.1 L431.2 54.9 L431.2 54.8 L431.2 54.6 L431.2 54.4 L431.2 54.2 L431.1 54.0 L431.1 53.9 L431.1 53.7 L431.1 53.5 L431.0 53.3 L431.0 53.2 L431.0 53.0 L430.9 52.8 L430.9 52.6 L430.9 52.5 L430.8 52.3 L430.8 52.1 L430.7 52.0 L430.6 51.8 L430.6 51.6 L430.5 51.5 L430.5 51.3 L430.4 51.1 L430.3 51.0 L430.2 50.8 L430.2 50.6 L430.1 50.5 L430.0 50.3 L429.9 50.2 L429.8 50.0 L429.7 49.8 L429.6 49.7 L429.5 49.5 L429.4 49.4 L429.3 49.2 L429.2 49.1 L429.1 49.0 L429.0 48.8 L428.9 48.7 L428.8 48.5 L428.7 48.4 L428.6 48.3 L428.4 48.1 L428.3 48.0 L428.2 47.9 L428.1 47.8 L427.9 47.6 L427.8 47.5 L427.7 47.4 L427.5 47.3 L427.4 47.2 L427.3 47.1 L427.1 46.9 L427.0 46.8 L426.8 46.7 L426.7 46.6 L426.5 46.5 L426.4 46.4 L426.2 46.3 L426.1 46.3 L425.9 46.2 L425.8 46.1 L425.6 46.0 L425.4 45.9 L425.3 45.8 L425.1 45.8 L425.0 45.7 L424.8 45.6 L424.6 45.6 L424.5 45.5 L424.3 45.4 L424.1 45.4 L424.0 45.3 L423.8 45.3 L423.6 45.2 L423.4 45.2 L423.3 45.1 L423.1 45.1 L422.9 45.1 L422.7 45.0 L422.6 45.0 L422.4 45.0 L422.2 45.0 L422.0 44.9 L421.9 44.9 L421.7 44.9 L421.5 44.9 L421.3 44.9 L421.1 44.9 L421.0 44.9 L420.8 44.9 L420.6 44.9 L420.4 44.9 L420.2 44.9 L420.1 44.9 L419.9 44.9 L419.7 45.0 L419.5 45.0 L419.4 45.0 L419.2 45.0 L419.0 45.1 L418.8 45.1 L418.7 45.1 L418.5 45.2 L418.3 45.2 L418.1 45.3 L418.0 45.3 L417.8 45.4 L417.6 45.4 L417.5 45.5 L417.3 45.6 L417.1 45.6 L417.0 45.7 L416.8 45.8 L416.6 45.8 L416.5 45.9 L416.3 46.0 L416.2 46.1 L416.0 46.2 L415.8 46.3 L415.7 46.3 L415.5 46.4 L415.4 46.5 L415.2 46.6 L415.1 46.7 L414.9 46.8 L414.8 46.9 L414.7 47.1 L414.5 47.2 L414.4 47.3 L414.2 47.4 L414.1 47.5 L414.0 47.6 L413.8 47.8 L413.7 47.9 L413.6 48.0 L413.5 48.1 L413.4 48.3 L413.2 48.4 L413.1 48.5 L413.0 48.7 L412.9 48.8 L412.8 49.0 L412.7 49.1 L412.6 49.2 L412.5 49.4 L412.4 49.5 L412.3 49.7 L412.2 49.8 L412.1 50.0 L412.0 50.2 L411.9 50.3 L411.8 50.5 L411.8 50.6 L411.7 50.8 L411.6 51.0 L411.5 51.1 L411.5 51.3 L411.4 51.5 L411.3 51.6 L411.3 51.8 L411.2 52.0 L411.2 52.1 L411.1 52.3 L411.1 52.5 L411.0 52.6 L411.0 52.8 L410.9 53.0 L410.9 53.2 L410.9 53.3 L410.8 53.5 L410.8 53.7 L410.8 53.9 L410.8 54.0 L410.8 54.2 L410.7 54.4 L410.7 54.6 L410.7 54.8 L410.7 54.9 L410.7 55.1Z M431.2 55.1 L440.2 55.1 L440.2 82.0 L431.2 82.0Z"
        fill="#B6F23A"
        fillRule="evenodd"
      />
    </svg>
  );
}

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

  const validPages = ['dashboard', 'timetable', 'attendance', 'assignments', 'analytics'];
  const [page, setPage] = useState(() => {
    const fromHash = window.location.hash.replace('#', '');
    return validPages.includes(fromHash) ? fromHash : 'dashboard';
  });

  function goTo(key) {
    setPage(key);
    window.history.replaceState(null, '', `#${key}`);
    window.scrollTo(0, 0);
  }

  const [cloudReady, setCloudReady] = useState(false);
  const [syncStatus, setSyncStatus] = useState('Loading your data...');

  useEffect(() => {
    let cancelled = false;

    async function loadFromCloud() {
      try {
        const { data, error } = await supabase
          .from('user_data')
          .select('data')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) throw error;
        if (cancelled) return;

        if (data && data.data) {
          const cloud = data.data;

          if (Array.isArray(cloud.subjects)) {
            setSubjects(
              cloud.subjects.map((subject) => ({
                ...subject,
                attendance: Array.isArray(subject.attendance)
                  ? subject.attendance
                  : [],
              }))
            );

            if (cloud.subjects.length > 0) {
              setSelectedSubjectId(cloud.subjects[0].id);
            }
          }

          if (Array.isArray(cloud.assignments)) {
            setAssignments(cloud.assignments);
          }

          if (Array.isArray(cloud.classes)) {
            setClasses(cloud.classes);
          }

          if (typeof cloud.userName === 'string' && cloud.userName) {
            setUserName(cloud.userName);
          }
        }

        setSyncStatus('Synced');
        setCloudReady(true);
      } catch (error) {
        console.error('Could not load cloud data:', error);

        if (!cancelled) {
          setSyncStatus('Offline: saved on this device only');
        }
      }
    }

    loadFromCloud();

    return () => {
      cancelled = true;
    };
  }, [user.id]);

  useEffect(() => {
    if (!cloudReady) return;

    setSyncStatus('Saving...');

    const timer = setTimeout(async () => {
      const { error } = await supabase.from('user_data').upsert({
        user_id: user.id,
        data: { subjects, assignments, classes, userName },
        updated_at: new Date().toISOString(),
      });

      setSyncStatus(
        error ? 'Could not sync: saved on this device' : 'Synced'
      );
    }, 800);

    return () => clearTimeout(timer);
  }, [cloudReady, subjects, assignments, classes, userName, user.id]);

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
          <LogoFull />
        </a>

        <nav className="navigation">
          {[
            ['dashboard', 'Dashboard'],
            ['attendance', 'Attendance'],
            ['analytics', 'Analytics'],
            ['timetable', 'Timetable'],
            ['assignments', 'Assignments'],
          ].map(([key, label]) => (
            <a
              className={`nav-link${page === key ? ' active' : ''}`}
              href={`#${key}`}
              key={key}
              onClick={(event) => {
                event.preventDefault();
                goTo(key);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="sidebar-note">
          Small steps
          <br />
          every day.
          <span className="lime"> Big results.</span>
        </p>
        <div className="account-box">
          <p className="muted account-email">{user.email}</p>
          <p className="muted account-email">{syncStatus}</p>
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

        {page === 'dashboard' && (
          <>
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
              <article className="panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">YOUR SCHEDULE</p>
                    <h2>Today's timetable</h2>
                  </div>
                </div>

                <div className="class-list">
                  {sortedClasses.length === 0 && (
                    <p className="muted">No classes yet. Add some in Timetable.</p>
                  )}

                  {sortedClasses.slice(0, 4).map((item) => (
                    <div className="class-row" key={item.id}>
                      <span className="status-dot" />
                      <div className="class-info">
                        <strong>{item.subject}</strong>
                        <span className="muted">{formatTime(item.time)}</span>
                      </div>
                      <span className="room muted">{item.room}</span>
                    </div>
                  ))}
                </div>

                <button type="button" onClick={() => goTo('timetable')}>
                  Manage timetable
                </button>
              </article>

              <article className="panel">
                <div className="panel-heading">
                  <div>
                    <p className="eyebrow">STAY AHEAD</p>
                    <h2>Next deadlines</h2>
                  </div>
                </div>

                <div className="assignment-list">
                  {sortedAssignments.filter((item) => !item.completed).length === 0 && (
                    <p className="muted">Nothing pending. Nice work!</p>
                  )}

                  {sortedAssignments
                    .filter((item) => !item.completed)
                    .slice(0, 3)
                    .map((item) => (
                      <div className="assignment-row" key={item.id}>
                        <div>
                          <strong>{item.title}</strong>
                          <p className="muted">{item.due}</p>
                        </div>
                        <span className={`priority ${item.priority.toLowerCase()}`}>
                          {item.priority}
                        </span>
                      </div>
                    ))}
                </div>

                <button type="button" onClick={() => goTo('assignments')}>
                  Manage assignments
                </button>
              </article>
            </section>
          </>
        )}

        {page === 'timetable' && (
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
        )}

        {page === 'assignments' && (
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
        )}

        {page === 'attendance' && (
        <section className="panel analytics-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">TRACK YOUR CLASSES</p>
              <h2>Mark attendance</h2>
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
        </section>
        )}

        {page === 'analytics' && (
          <section className="panel analytics-panel" id="analytics">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">YOUR PROGRESS</p>
                <h2>Subject-wise attendance</h2>
              </div>
            </div>

            <p className="muted">
              {overallAttendance === null
                ? 'No attendance recorded yet. Mark your first class in Attendance.'
                : `Overall attendance: ${overallAttendance}% (${totalPresent} of ${totalClasses} classes attended)`}
            </p>

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
        )}
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
          options: {
            data: { name: name.trim() },
            emailRedirectTo: window.location.origin,
          },
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
          <LogoFull />
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