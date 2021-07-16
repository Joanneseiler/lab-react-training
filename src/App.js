import React from 'react';
import './App.css';
import IdCard from "./component/IdCard"
import Greetings from "./component/Greetings"
import Random from "./component/Random"
import BoxColor from "./component/BoxColor"

function App() {
  return (
    <div>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <Greetings lang="es">Pablo</Greetings>
        <Greetings lang="fr">Julie</Greetings>
        <Greetings lang="en">Manish</Greetings>
        <Greetings lang="de">Joanne</Greetings>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
