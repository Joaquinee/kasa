import React from 'react';
import { Routes,Route, BrowserRouter} from 'react-router-dom';

import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import View from '../pages/View/View';

const AppRouter: React.FC = () => {


    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About} />
            <Route path='*' Component={NotFound} />
            <Route path="/view/:id" element={<View />} /> 
        </Routes>
    );
};

export default AppRouter;