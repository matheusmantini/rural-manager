import { render, screen } from "@testing-library/react";
import Footer from ".";

beforeAll(() => {
  global.Date.now = jest.fn(() => 1640995200000);
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("Footer", () => {
  it("Footer deve renderizar o texto com o ano correto", () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);

    expect(screen.getByText(/©/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${currentYear}`, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Rural Manager\. Todos os direitos reservados\./i)
    ).toBeInTheDocument();
  });
});
