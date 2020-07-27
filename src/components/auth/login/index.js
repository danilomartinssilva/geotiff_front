import React, { Component } from "react";
import ApiService from "./../../../services/ApiService";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { TOKEN_KEY, USER } from "../../../services/auth";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  doLogin = () => {
    ApiService.post("/login", {
      email: this.state.email,
      password: this.state.password,
    })
      .then((retorno) => retorno.data)

      .then((result) => {
        if (!result.status) {
          alert(result.message);
          return;
        }
        const { history } = this.props;
        localStorage.setItem(TOKEN_KEY, result.token);

        localStorage.setItem(USER, JSON.stringify(result.user));

        console.log("Logado", result);
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { history } = this.props;
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#ededed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <h1>Bem vindo, novamente!</h1>
        <h3>Faça o login para continuar!</h3> */}

        <div
          style={{
            width: "400px",
            fontSize: "16px",
            margin: "16px auto",
            flexDirection: "column",
          }}
        >
          <div style={{ marginTop: "10px" }}>
            <div style={{ fontSize: `18px`, color: "black" }}>
              Bem vindo novamente!
            </div>
            <div
              style={{
                marginTop: 10,
                fontSize: `18px`,
                marginBottom: 30,
                color: "black",
              }}
            >
              Para continuar, faça o login!
            </div>
            <input
              type="email"
              onChange={(email) => this.setState({ email: email.target.value })}
              placeholder="Email Address"
              required
              style={{
                width: "375px",
                height: "40px",
                fontSize: "14px",
                borderWidth: 0.5,
                borderColor: "#ececec",
                backgroundColor: "#e5e5e5",
                opacity: 0.7,
                padding: "10px",
              }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <input
              type="password"
              placeholder="Password"
              onChange={(password) =>
                this.setState({ password: password.target.value })
              }
              required
              style={{
                width: "375px",
                opacity: 0.7,
                backgroundColor: "#e5e5e5",
                height: "40px",
                padding: "10px",
                fontSize: "14px",
                borderWidth: 0.5,
                borderColor: "#e5e5e5",
              }}
            />
          </div>
          <div style={{ marginTop: "20px", alignItems: "center" }}>
            <button
              onClick={() => this.doLogin()}
              style={{
                backgroundColor: "#000",
                width: "375px",
                height: "40px",
                color: "#FFF",
                textTransform: "uppercase",
              }}
            >
              Login
            </button>
          </div>
          <div style={{ marginTop: "10px", alignItems: "center" }}>
            <button
              onClick={() => history.push("/register")}
              style={{
                backgroundColor: "#e5e5e5",
                width: "375px",
                height: "40px",
                color: "#000",
                textTransform: "uppercase",
                borderWidth: 0.5,
              }}
            >
              Cadastrar
            </button>
          </div>

          {/* <input type="text" placeholder="name" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="email address" />
        <button>create</button> */}
        </div>
      </div>
    );
  }
}
