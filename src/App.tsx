import React from 'react';
import './styles/App.scss';
import AppRouter from './router/index';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
      <div>
        <div className="main">
          <Navbar />
          <AppRouter />
        </div>
        <Footer />
      </div>
  );
}
export default App; 