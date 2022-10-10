
import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg'
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';


function App() {
  //const name="Joaquim";

  const [userName] = useState("Manoel")

  const cars = [
    {id: 1, brand:"Ferrari", color:"Amarela", newCar: true, km:0},
    {id: 2, brand:"KIA", color:"Azul", newCar: false, km:31323213},
    {id: 3, brand:"Hyundai", color:"Preto", newCar: false, km:1234,}
  ]
  return (
    <div className="App">
      <h1>Oba, estou avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* Props */}
      <ShowUserName name={userName}/>
      {/* Destructuring props */}
      <CarDetails brand="BMW" km={23000} color="white" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand="VW" km={0} color="white" newCar={true}/>
      <CarDetails brand="FIAT" km={3724786287} color="white" newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          brand={car.brand} 
          color={car.color}
          km={car.km} 
          newCar={car.newCar} />
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste"/>
      {/* children */}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
    </div>
  ); 
}

export default App;
