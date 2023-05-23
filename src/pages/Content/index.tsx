import React from 'react';
import { createRoot } from 'react-dom/client';
import Content from './content';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

function main() {
  const exceptionElement = document.getElementsByClassName('exception')[0];
  console.log('exceptionElement', exceptionElement);

  // 创建一个新的 DOM 元素
  const container = document.createElement('div');
  container.id = 'sentry-chatGPT-extension-container';
  exceptionElement.appendChild(container);

  console.log('container', container);
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<Content />);
}

setTimeout(() => {
  main();
}, 3000);
