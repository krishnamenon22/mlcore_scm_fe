import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tiger Analytics/i);
  expect(linkElement).toBeInTheDocument();
});
