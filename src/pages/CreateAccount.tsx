import { useState, FC } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import axiosClient from "../../config/axiosClient";
import { Link, useNavigate } from "react-router-dom";

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

const CreateAccount: FC<Props> = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigate();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "" && password === "") {
      setError("Todos los campos son obligatorios");
      return;
    }
    try {
      const { data } = await axiosClient.post("/auth/create", {
        name: userName,
        email,
        password,
      });
      setMessage(data.msg);
      setError("");
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
        Create Account
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
          {message}
        </Typography>
        <Form onSubmit={onSubmit}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Username"
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Divider sx={{ margin: "5px", height: "0", width: "0" }} />
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
            Register
          </Button>
        </Form>
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              marginTop: "5px",
              color: "#000",
            }}
          >
            <LinkStyled to="/">
              ¿Ya tienes una cuenta? Inicia sesión aquí
            </LinkStyled>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateAccount;
