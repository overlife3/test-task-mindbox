import { createSlice } from "@reduxjs/toolkit";
import { getTaskById } from "../../helpers/getTaskById";
import { TypeTasksType, TaskType, IdType } from "../../types/types";

type State = {
  typeTasks: TypeTasksType;
  tasks: TaskType[];
  visibleList: boolean;
};
const initialState: State = {
  typeTasks: "all",
  tasks: [],
  visibleList: false,
};

type ActionType<T> = { type: string; payload: T };

const todosReducer = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTask(state, action: ActionType<TaskType>) {
      state.tasks.push(action.payload);
    },
    toggleCompletedTask(state, action: ActionType<IdType>) {
      const task = getTaskById(state.tasks, action.payload);
      if (task) {
        task.completed = !task.completed; ///
      }
    },
    setVisibleList(state, action: ActionType<boolean>) {
      state.visibleList = action.payload;
    },
    toggleStateTask(state, action: ActionType<IdType>) {
      const task = getTaskById(state.tasks, action.payload);
      if (task) {
        if (task.state === "changes") {
          task.state = "none";
        } else {
          task.state = "changes";
        }
      }
    },
    removeTask(state, action: ActionType<IdType>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTextTask(state, action: ActionType<Pick<TaskType, "id" | "text">>) {
      const task = getTaskById(state.tasks, action.payload.id);

      if (task) task.text = action.payload.text;
    },
    clearCompleted(state) {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
    setTypeTasks(state, action: ActionType<TypeTasksType>) {
      state.typeTasks = action.payload;
    },
  },
});

export default todosReducer.reducer;
export const actions = todosReducer.actions;
