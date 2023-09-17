import { createContext } from "react";
import { IdType } from "../types/types";
type State = {
  id: IdType;
};
export const TaskContext = createContext<State>({} as State);
