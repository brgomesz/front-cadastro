import { render } from "@testing-library/react";
import Home from "../pages/Home/home";

describe("home", () => {
  it("Deve reenderizar corretamente", () => {
    render(<Home/>)
  });
});
