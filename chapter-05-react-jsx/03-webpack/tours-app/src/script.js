import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";

const container = document.getElementById("root");
render(<Header destination={"Pamukkale"}/>, container);