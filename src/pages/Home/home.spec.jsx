import { render } from "@testing-library/react";
import Home from "./home";
import React from "react"; 

describe("home", () => {
  it("Deve reenderizar corretamente", () => {
    render(<Home/>)
  });
});
