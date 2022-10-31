import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Auth from "./Auth";

describe("Authentication component", () => {
  test("should render a login form", () => {
    // ARRANGE
    render(<Auth />);

    // ACT

    // ASSERT
    const title = screen.getByText("Login");
    expect(title).toBeDefined();
  });
});
