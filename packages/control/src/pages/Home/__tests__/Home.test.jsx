import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "../Home.js";

describe("Landing Page", () => {
  it("should have a heading", () => {
    const regexText = /a fully integrated way to connect and interact/i;
    render(
      <Router>
        <LandingPage />
      </Router>
    );
    const landingPageHeading = screen.getByRole("heading", {
      name: regexText
    });
    expect(landingPageHeading).toBeInTheDocument();
  });
});
