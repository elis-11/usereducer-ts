// individual actions
export type ActionSetAddCar={
  type: "SET_ADD_CAR";
  payload: string;
}
export type ActionSetUpdateCar={
  type: "UPDATE_CAR";
  payload: string;
}
export type ActionDeleteCar = {
  type: "DELETE_CAR";
  payload: string;
};
export type ActionSetFilterYear = {
  type: "SET_FILTER_YEAR";
  payload: number;
};

// union actions
export type ActionsAll = ActionDeleteCar | ActionSetFilterYear | ActionSetUpdateCar | ActionSetAddCar;
