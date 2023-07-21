import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';

function App({ children }) {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/home' Component={Home} />
                <Route path='/profile' Component={Profile} />
                <Route path='*' Component={PageNotFound} />
            </Routes>
        </Router>
    );
}

export default App;
