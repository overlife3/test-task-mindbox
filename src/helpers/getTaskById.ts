import { IdType, TaskType } from "../types/types";

export const getTaskById = (
  tasks: TaskType[],
  id: IdType
): TaskType | undefined => {
  return tasks.find((task) => task.id === id);
};
