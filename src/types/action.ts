// individual actions
export type ActionDeleteCar = {
  type: "DELETE_CAR";
  payload: string;
};
export type ActionSetFilterYear = {
  type: "SET_FILTER_YEAR";
  payload: number;
};

// union actions
export type ActionsAll = ActionDeleteCar | ActionSetFilterYear;
