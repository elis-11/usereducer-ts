import { useReducer, useState } from "react";
import "./App.scss";
import carsJson from "./assets/cars.json";
import { initialState, reducer } from "./reducer";
import { Car } from "./types/car";

function App() {
  // const [cars, setCars] = useState(carsJson as [Car]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {cars, selectedYear, filteredYears} = state
  const [newCar, setNewCar] = useState<Car>({
    id: Date.now().toString(),
    name: "",
    year: 2020,
    url: "https://i.pravatar.cc",
  });

  const handleSelectedYear = (year: number) => {
    dispatch({ type: "SET_FILTER_YEAR", payload: year });
  };
  console.log(selectedYear);
  let filteredCars = cars;

  if (selectedYear) {
    filteredCars = cars.filter((car) => car.year === selectedYear);
    console.log("filteredCars");   
  }
  console.log("filteredCars2", filteredCars);
  
  const handleNewCarSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CAR", payload: newCar });
    setNewCar({
      id: Date.now().toString(),
      name: "",
      year: 2020,
      url: "https://i.pravatar.cc",
    });
  };

  const handleDeleteCar = (carId: string) => {
    dispatch({type: "DELETE_CAR", payload: carId})
  }

  return (
    <div className="Cars"> 
      <div className="selcted">
        {filteredYears.map((year) => (
          <div key={year} onClick={() => handleSelectedYear(year)}>
            {year}
          </div>
        ))}
      </div>

      <form onSubmit={handleNewCarSubmit}>
        <input
          type="text"
          name="name"
          value={newCar.name}
          onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
        />
        <input
          type="number"
          name="year"
          value={newCar.year}
          onChange={(e) =>
            setNewCar({ ...newCar, year: Number(e.target.value) })
          }
        />
        <button type="submit">+</button>
      </form>

      <div className="cars">
        {filteredCars.map((car) => (
          <div key={car.id} className="car">
            <div className="name">{car.name}</div>
            <div className="name">{car.year}</div>
            <img className="image" src={car.url} alt="" />
            <button onClick={()=>handleDeleteCar(car.id)}>remove</button>
            {/* <button onClick={()=>dispatch({type: "DELETE_CAR", id: car.id})}>remove</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
