import React from 'react';
import { Routes,Route} from 'react-router-dom';

import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About} />
            <Route path='*' Component={NotFound} />
        </Routes>
    );
};

export default AppRouter;