import {Main} from "./Main";
import {Header} from "./Header";
import {Route, Routes} from "react-router-dom";
import css from './app.module.css';
import {Error} from "./Error/Error";
import {Tasks} from "./Tasks/Tasks";
import {Task} from "./Task/Task";
import {Footer} from "./Footer/Footer";
import {Xxx} from "./xxx/Xxx";


export const App = () => {


    return (
        <div className={css.router}>
            <Header/>
            <Routes>
                <Route path='' element={<Main/>}/>
                <Route path='/tasks' element={<Tasks/>}/>
                <Route path='/tasks/:id' element={<Task/>}/>
                <Route path='/18+' element={<Xxx/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
