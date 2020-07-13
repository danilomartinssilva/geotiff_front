import React, { Component } from "react";
import axios from "axios";
import ApiService from "./../../../services/ApiService";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  doRegister = async () => {
    const { email, password, name } = this.state;
    const { history } = this.props;
    const registerService = await ApiService.post("/user/add", {
      email: email,
      password: password,
      name: name,
    });

    console.log(registerService);
    const registred = registerService.data;
    if (!registred.result.status) {
      history.push("/login");
    } else {
      alert("Não foi possível realizar o cadastro");
    }
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
            <input
              type="email"
              onChange={(name) => this.setState({ name: name.target.value })}
              placeholder="Nome"
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
              onClick={() => this.doRegister()}
              style={{
                backgroundColor: "#000",
                width: "375px",
                height: "40px",
                color: "#FFF",
                textTransform: "uppercase",
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
