import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { TasksProvider } from "../context/TasksProvider";
import CreateAccount from "./pages/CreateAccount";
import UserProvider from "../context/user/UserProvider";

function App() {
  return (
    <UserProvider>
      <TasksProvider>
        <CssVarsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Login />} />
              </Route>
              <Route path="/dashboard" element={<Layout />}>
                <Route index element={<Dashboard />} />
              </Route>
              <Route path="/create-account">
                <Route index element={<CreateAccount />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CssVarsProvider>
      </TasksProvider>
    </UserProvider>
  );
}

export default App;
