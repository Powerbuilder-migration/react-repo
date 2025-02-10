import React from 'react';
import './App.css';
import MainAppBar  from './components/menu.tsx';
import MainLayout from './views/Container.tsx';


const App:React.FC = () =>{
  return (
    <div className="App">
      <MainAppBar />
      <MainLayout> esto es una prueba </MainLayout>
    </div>
  );
}

export default App;
