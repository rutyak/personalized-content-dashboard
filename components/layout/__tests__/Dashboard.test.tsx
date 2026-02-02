import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Dashboard from "../Dashboard";
import { ThemeProvider } from "../../../context/Theme";
import PersonalizedFeed from "../../feeds/PersonalizedFeed";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";

vi.mock("../../feeds/PersonalizedFeed", () => ({
  default: ({ searchQuery }: { searchQuery: string }) => (
    <div data-testid="personalized-feed">Query: {searchQuery}</div>
  ),
}));

vi.mock("../Sidebar", () => ({
  default: () => <nav data-testid="sidebar">Sidebar</nav>,
}));

const renderDashboard = () => {
  return render(
    <Provider store={store}>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </Provider>,
  );
};

describe("Dashboard Layout Integration", () => {
  it("renders all core layout sections", () => {
    renderDashboard();

    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByText(/Personalized For You/i)).toBeInTheDocument();
    expect(screen.getByText(/Trending Topics/i)).toBeInTheDocument();
    expect(screen.getByText(/Saved Articles/i)).toBeInTheDocument();
  });

  it("passes search query state from Header to PersonalizedFeed", async () => {
    renderDashboard();

    const searchInput = screen.getByPlaceholderText(/Search anything.../i);
    fireEvent.change(searchInput, { target: { value: "Next.js testing" } });

    expect(screen.getByTestId("personalized-feed")).toHaveTextContent(
      "Query: Next.js testing",
    );
  });

  it("contains the favorites section with the correct ID for anchor navigation", () => {
    renderDashboard();
    const favoritesSection = screen
      .getByText(/Saved Articles/i)
      .closest("section");
    expect(favoritesSection).toHaveAttribute("id", "favorites");
  });
});
