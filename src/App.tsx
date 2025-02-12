import React from 'react';
import { faker } from '@faker-js/faker';
import './App.css';
import RegistroMedicoContainer from './views/RegistroMedicoContainer.tsx'
import { GridForms, MainForm, SueroForm } from './components/Prescripcion/index.ts';


const generateRandomPerson = (): object => {    
  return {        
    name: faker.person.firstName() ,        
    email: faker.internet.email(),        
    phone: faker.phone.number(),    
  }
;};

const App:React.FC = () =>{
  return (
    <div className="App">
      <RegistroMedicoContainer> 
        <MainForm>
           <GridForms/>
        </MainForm>
        </RegistroMedicoContainer>
        {JSON.stringify(generateRandomPerson(), null, 2)} 
    </div>
  );
}

export default App;
