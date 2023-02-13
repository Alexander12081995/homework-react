import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import {BrowserRouter as Route} from 'react-router-dom';

ReactDOM
    .createRoot(document.getElementById('root') as HTMLElement)
    .render(
            <Route>
                <App/>
            </Route>
    );
