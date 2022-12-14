import { useState, FC, useContext, useEffect } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import axiosClient from "../../config/axiosClient";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/user";


const Form = styled.form({
  display: "flex",
  flexDirection: "column",
});
const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "#000",
});

interface Values {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const Login: FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const { getToken } = useContext(UserContext);

  useEffect(() => {
    const user = getToken()
    if(user !== '') {
      navigation('/dashboard')
    }
  }, [])
  

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("El email o el password son campos obligatorios");
      return;
    }
    try {
      const { data } = await axiosClient.post("/auth", { email, password });
      localStorage.setItem("token", data.token);
      setError("");
      navigation("/dashboard");
    } catch (error: any) {
      setError(error.response.data.msg);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F2F2F2",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        component={"h1"}
        variant={"h1"}
        sx={{ color: "#F291A3", margin: "50px auto" }}
      >
        Login
      </Typography>
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          minWidth: "400px",
        }}
      >
        <Typography
          component={"h6"}
          sx={{ color: "#F291A3", margin: "0 auto" }}
        >
          {error}
        </Typography>
        <Form onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Email"
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Divider sx={{ margin: "5px", height: "0", width: "0" }} />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "10px",
              background: "#C4F2EE",
              color: "#000",
              ":hover": {
                background: "#728C8A",
              },
            }}
          >
            Login
          </Button>
        </Form>
        <Box>
          <Typography
            sx={{ textDecoration: "none", fontSize: "12px", marginTop: "5px" }}
          >
            <LinkStyled to="/create-account">
              ¿No tienes una cuenta? Registrate aquí
            </LinkStyled>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
