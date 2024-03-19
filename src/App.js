// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import CarForm from './CarForm';

const App = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCreate = (data) => {
    setCars([...cars, data]);
  };

  const handleUpdate = (data) => {
    const updatedCars = cars.map((car) => (car.id === data.id ? data : car));
    setCars(updatedCars);
    setSelectedCar(null);
  };

  const handleDelete = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
  };

  return (
    <div>
      <h1>Car Inventory</h1>
      <CarForm onSubmit={selectedCar ? handleUpdate : handleCreate} car={selectedCar} />
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <span>{car.make}</span>
            <span>{car.model}</span>
            <button onClick={() => setSelectedCar(car)}>Edit</button>
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
