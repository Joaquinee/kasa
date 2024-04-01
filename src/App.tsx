import React from 'react';
import './styles/App.scss';
import AppRouter from './router/index';
import Navbar from './components/Navbar/navbar';


const App: React.FC = () => {
  return (
      <div>
        <div className="main">
          <Navbar />
          <AppRouter />

        </div>
      </div>
  );
}
export default App;