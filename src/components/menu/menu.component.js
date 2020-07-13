/* global SITE_CONFIG */
import React from "react";
import ToolButton from "../tool-button";
import { getUser } from "../../services/auth";

const user = getUser();

const MenuComponent = ({
  toolList,
  menuFocus,
  searchTools,
  onSubmit,
  focus,
}) => (
  <div id="menu">
    <div
      style={{
        backgroundColor: "#EDEDED",
        borderRadius: 10,
        height: "40px",
        width: "350px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <span className="menu-header-icon"></span>
      Bem vindo, <strong>{user}</strong>
      <a href="/logout" style={{ marginLeft: 20 }}>
        Sair
      </a>
      <br></br>
    </div>
    <header id="menu-header">
      <span className="menu-header-icon"></span>

      <br></br>
    </header>
    <section id="search" onClick={focus}>
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          className="gt-input"
          id="search-input"
          onChange={searchTools}
          placeholder="Search Tools..."
          type="text"
        />
      </form>
    </section>
    <section className={menuFocus ? "focus" : ""} id="content">
      <div id="tool-button-container">
        {toolList.map(({ name, iconUrl, path }) => {
          return (
            <ToolButton iconUrl={iconUrl} key={name} name={name} path={path} />
          );
        })}
      </div>
    </section>
  </div>
);

export default MenuComponent;
