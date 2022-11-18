import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLogin = async () => {
    // *IF API STATUS 200
    try {
      const users = await fetch(
        "https://6350b1d078563c1d82c627f2.mockapi.io/persons"
      ).then((response) => response.json());

      const user = users.find((us) => {
        return us.email === email;
      });

      if (user === undefined) {
        throw new Error("User Not Found");
      }
      if (password !== user.password) {
        throw new Error("Email or Password not Correct!");
      }
      console.log("login berhasil");
      setOpen(false);

      // *IF API STATUS 404
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>LOGIN</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography
            id="modal-modal-title"
            variant="p"
            component="h5"
            textAlign="center"
            sx={{ fontStyle: "italic", mb: 3 }}
          >
            SAPASIKOLOG
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="p"
            component="h3"
            textAlign="center"
            sx={{ margin: "5px 0" }}
          >
            Masuk ke Akun Kamu
          </Typography>
          <FormGroup>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              sx={{ margin: "10px 0" }}
              onChange={function (event) {
                setEmail(event.target.value);
              }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              type="password"
              sx={{ margin: "10px 0" }}
              onChange={function (event) {
                setPassword(event.target.value);
              }}
            />

            <FormControlLabel
              control={<Checkbox size="small" />}
              label="ingat saya"
              sx={{ mb: 2 }}
            />
          </FormGroup>
          <Button
            fullWidth
            variant="contained"
            sx={{ margin: "10px 0" }}
            size="small"
            onClick={handleLogin}
          >
            Masuk
          </Button>
          <Typography
            sx={{ textAlign: "center", fontSize: "14px", color: "#aaa" }}
          >
            atau
          </Typography>
          <Button
            fullWidth
            variant="outlined"
            sx={{ margin: "10px 0" }}
            size="small"
          >
            Masuk dengan Google
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
