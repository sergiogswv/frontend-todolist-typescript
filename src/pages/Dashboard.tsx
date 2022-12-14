import { useEffect, useContext } from "react";
import { Box, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { TasksContext } from "../../context/TasksContext";
import { UserContext } from "../../context/user/UserContext";

const Dashboard = () => {
  const { getTasks, tasks, msg } = useContext(TasksContext);
  const { getToken } = useContext(UserContext);
  useEffect(() => {
    const token = getToken();

    getTasks(token);
  }, []);

  return (
    <Box
      sx={{
        background: "#F2F2F2",
        minHeight: "auto",
        maxWidth: "100vw",
        display: "flex",
      }}
    >
      {msg ? (
        <h1>{msg}</h1>
      ) : (
        tasks?.map((props: any) => (
          <Box sx={{ margin: "10px auto", width: "80%" }}>
            {console.log(props)}
            <Box
              sx={{
                border: "1px solid #728C8A",
                borderRadius: "5px",
                height: "50px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ margin: "auto 10px", fontSize: "20px" }}>
                Task 1
              </Typography>
              <Box sx={{ margin: "auto 10px", display: "flex", gap: "6px" }}>
                <AddIcon />
                <EditIcon />
                <DeleteIcon />
              </Box>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default Dashboard;
