import { useReducer, useState } from "react";
import "./App.scss";
import carsJson from "./assets/cars.json";
import { initialState, reducer } from "./reducer";
import { Car } from "./types/car";

function App() {
  // const [cars, setCars] = useState(carsJson as [Car]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const cars = state.cars;
  const filterYears = state.filterYears;
  const selectedYear = state.selectedYear;

  const handleSelectedYear = (year: number) => {
    dispatch({ type: "SET_FILTER_YEAR", payload: year });
  };
  console.log(selectedYear);
  let filteredCars = cars;

  if (selectedYear) {
    filteredCars = cars.filter((car) => car.year === selectedYear);
  }

  return (
    <div className="Cars">
      <div className="selcted">
        {filterYears.map((filterYear) => (
          <div key={filterYear} onClick={() => handleSelectedYear(filterYear)}>
            {filterYear}
          </div>
        ))}
      </div>

      <div className="cars">
        {filteredCars.map((car) => (
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
