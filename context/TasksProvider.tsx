import React, { useReducer } from "react";
import { TasksContext, tasksReducer } from "./";
import axiosClient from "../config/axiosClient";
import { tasksArray } from "../interfaces/tasks";

interface Props {
  children: React.ReactNode;
}

export interface TasksState {
  tasks?: tasksArray[];
  msg?: string;
}

const TASKS_INITIAL_STATE: TasksState = {
  tasks: [],
  msg: "",
};

export const TasksProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, TASKS_INITIAL_STATE);

  const getTasks = async (token: string) => {
    const { data } = await axiosClient.get<tasksArray>("/tasks", {
      headers: {
        'X-Authorization': token
      }
    });
    if (data?.msg){
      return dispatch({ type: 'Task - Get Tasks - Empty', payload: data.msg })
    }
    dispatch({ type: "Task - Get Tasks", payload: data });
  };

  return (
    <TasksContext.Provider value={{ ...state, getTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
