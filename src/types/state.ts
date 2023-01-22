import { Car } from "./car";

export type State ={
    // cars: Array<Car>,
    cars: Car[],
    selectedYear: number | undefined,
    filteredYears: number[],
}