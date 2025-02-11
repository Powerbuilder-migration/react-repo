import React from 'react';
import './App.css';
import MainAppBar  from './components/menu.tsx';
import MainLayout from './views/Container.tsx';
import Program from './components/program.tsx';

import { faker } from '@faker-js/faker';


/* const generateRandomPerson = (): object => {    
  return {        
    name: faker.person.firstName ,        
    email: faker.internet.email,        
    phone: faker.phone.number,    
  }
;}; */

const App:React.FC = () =>{
  return (
    <div className="App">
      <MainAppBar />
      <MainLayout> {/* {JSON.stringify(generateRandomPerson(), null, 2)}  */}
        <Program />
      </MainLayout>
    </div>
  );
}

export default App;
