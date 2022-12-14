import { tasksArray } from "../interfaces/tasks";
import { TasksState } from "./";

type TasksActions =
  | { type: "Task - Get Tasks", payload: tasksArray }
  | { type: "Task - Get Tasks - Empty", payload: string }
  | { type: "Task - Delete Tasks" };

export const tasksReducer = (state: TasksState, action: TasksActions): TasksState => {
  switch (action.type) {
    case "Task - Get Tasks":
      return {
        ...state,
        tasks: [...[action.payload]],
      };
    case 'Task - Get Tasks - Empty':
      return {
        ...state,
        msg: action.payload
      }
    default:
      return state
  }
};
