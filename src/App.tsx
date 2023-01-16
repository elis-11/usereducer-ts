import { useReducer, useState } from "react";
import "./App.scss";
import carsJson from "./assets/cars.json";
import { reducer } from "./reducer";
import { Car } from "./types/car";

function App() {
  const [cars, setCars] = useState<[Car]>(carsJson as [Car]);
  const [state, dispatch] = useReducer(reducer, dispatch);
  // const {cars} = state

  return (
    <div className="Cars">
      <div className="cars">
        {state.cars.map((car) => (
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
