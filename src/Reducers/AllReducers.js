import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import PeopleReducer from "./PeopleReducer";

const AllReducers = combineReducers({
  PeopleReducer,
  CounterReducer,
});

export default AllReducers;
