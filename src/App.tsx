import { useState } from "react";
import "./App.scss";
import carsJson from "./assets/cars.json";
import { Car } from "./types/car";

function App() {
  const [cars, setCars] = useState(carsJson as [Car]);

  return (
    <div className="Cars">
      <div className="cars">
        {cars.map((car) => (
          <div key={car.id} className="car">
            <div className="name">{car.name}</div>
            <div className="name">{car.year}</div>
            <img className="image" src={car.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
