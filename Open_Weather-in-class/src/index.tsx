import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ErrorBoundary } from './components/common';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render( <ErrorBoundary fallback = { <span>На сайте временно ведутся технические работы</span> }>
    <App />
  </ErrorBoundary> );
