export type StateForTaskType = "changes" | "none";
export type IdType = string;
export type TaskType = {
  id: IdType;
  text: string;
  completed: boolean;
  state: StateForTaskType;
};

export type TypeTasksType = "all" | "completed" | "active";
