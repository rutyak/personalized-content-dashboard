import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import FavoritesFeed from "../FavoritesFeed";

const mockStore = configureStore([thunk as any]);

vi.mock("swiper/react", () => ({
  Swiper: ({ children }: any) => <div data-testid="swiper-mock">{children}</div>,
  SwiperSlide: ({ children }: any) => <div data-testid="swiper-slide-mock">{children}</div>,
}));

vi.mock("swiper/modules", () => ({
  Mousewheel: vi.fn(),
  Autoplay: vi.fn(),
}));

vi.mock("../cards/ContentCard", () => ({
  default: ({ title }: any) => (
    <div data-testid="content-card">
      <h3>{title}</h3>
    </div>
  ),
}));

describe("FavoritesFeed Component", () => {
  let store: any;

  const initialState = {
    favorites: {
      items: [
        { id: "1", title: "Favorite News", category: "Tech", time: "5m ago" },
        { id: "2", title: "Favorite Movie", category: "Sci-Fi", time: "1h ago" },
      ],
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(cleanup);

  it("renders the correct count of saved items in the badge", () => {
    render(
      <Provider store={store}>
        <FavoritesFeed />
      </Provider>
    );

    expect(screen.getByText("2 Saved Items")).toBeInTheDocument();
  });

  it("renders content cards for each favorite item", () => {
    render(
      <Provider store={store}>
        <FavoritesFeed />
      </Provider>
    );

    expect(screen.getByText("Favorite News")).toBeInTheDocument();
    expect(screen.getByText("Favorite Movie")).toBeInTheDocument();
    expect(screen.getAllByTestId("content-card")).toHaveLength(2);
  });

  it("shows empty state when no favorites exist", () => {
    const emptyStore = mockStore({
      favorites: { items: [] },
    });

    render(
      <Provider store={emptyStore}>
        <FavoritesFeed />
      </Provider>
    );

    expect(screen.getByText("No favorites saved yet.")).toBeInTheDocument();
    expect(screen.queryByTestId("content-card")).not.toBeInTheDocument();
    expect(screen.getByText("0 Saved Items")).toBeInTheDocument();
  });

  it("applies correct height class based on item count", () => {
    const { container } = render(
      <Provider store={store}>
        <FavoritesFeed />
      </Provider>
    );

    const containerDiv = container.querySelector(".h-\\[980px\\]");
    expect(containerDiv).toBeInTheDocument();
  });
});