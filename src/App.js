import React from 'react';
import ManagerLogin from './components/Manager/ManagerLogin';
import ManagerHeader from './components/Manager/ManagerHeader';
import './App.scss';
const App = () => {
  return (
    <div className="main">
      <ManagerHeader />
      <ManagerLogin header="Login" />
    </div>
  );
};

export default App;
