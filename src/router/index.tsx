import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/about" Component={About} />
                <Route path='*' Component={NotFound} />
            </Routes>
            
        </Router>
    );
};

export default AppRouter;