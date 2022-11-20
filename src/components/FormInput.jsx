import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import LandingPage from '../pages/Landing/LandingPage';
import Login from "./Login";

function FormInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://634f638adf22c2af7b502de8.mockapi.io/users", {
        name,
        email,
        password,
      })
      .then(() => {
        setName("");
        setEmail("");
        setPassword("");
        alert("Selamat, Anda Berhasil Registrasi");
        navigate("/")
      })
      .catch((err) => {
        alert("Form Harus Diisi dengan Benar!");
      });
  };

  return (
    <main>
      <form className="container" style={{width: "450px"}} onSubmit={handleSubmit}>
        <div className="close" style={{ textDecoration: "none" }}>
          <Link to={"/"}>X</Link>
        </div>
        <div className="head">
          <h1 style={{color : "#1B97CC", fontWeight : "bolder"}}>
            <i>SapaSikolog.com</i>
          </h1>
        </div>
        <h2 style={{ marginBottom: "5px" }}>Daftarkan Diri Kamu</h2>

        <div classNameName="inputan">
          <div className="form-input">
            <input
              type="text"
              placeholder="Masukkan Nama Kamu "
              id="nama"
              className="input nama"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Masukkan Email Kamu"
              id="email"
              className="input email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Masukkan Password Kamu"
              id="password"
              className="input password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Ulangi Password Kamu"
              id="kofirmasi"
              className="input confirm"
              required
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <div className="cek">
            <input type="checkbox" name="setuju" id="setuju" />
            <label for="" style={{ fontSize: "13px", marginLeft:'5px' }}>
              Setuju dengan S&K
            </label>
          </div>
        </div>

        <button
          id="register"
          className="button"
          style={{
            color: "aliceblue",
            borderColor: "blue",
            backgroundColor: "blue",
          }}
          type="submit"
        >
          DAFTAR
        </button>
        <p>atau</p>
        <button
          className="button"
          style={{
            color: "blue",
            backgroundColor: "white",
            border: "none",
            borderStyle: "groove",
          }}
        >
          <a>Masuk dengan Google</a>
        </button>
        <p style={{ fontSize: "13px" }}>
          Kamu Sudah Punya Akun?
          <span>{<Login />}</span>
          </p>
      </form>
    </main>
  );
}

export default FormInput;
