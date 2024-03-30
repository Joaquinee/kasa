import React from 'react';
import './styles/App.scss';
import AppRouter from './router/index';
import Navbar from './components/Navbar/navbar';


const App: React.FC = () => {
  return (
      <div>
          <Navbar />
          <AppRouter />
      </div>
  );
}
export default App;