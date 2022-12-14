import { createContext } from "react";
import { tasksArray } from "../interfaces/tasks";

interface ContextProps {
  tasks?: tasksArray[];
  msg?: string;
  getTasks: (token: string) => void;
}

export const TasksContext = createContext({} as ContextProps);
