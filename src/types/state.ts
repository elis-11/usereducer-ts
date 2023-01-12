import { Car } from "./car";

export type State ={
    cars: Car[],
    selectedYear: number | undefined,
    filterYears: number[],
}