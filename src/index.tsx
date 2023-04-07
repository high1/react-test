import 'uno.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Parent } from 'Parent';

const root = document.querySelector('#root');
if (!root) throw new Error('#root element not found!');
createRoot(root).render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
