import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import {
  FavoriteHeroContext,
  FavoriteHeroProvider,
} from "./FavoriteHeroContext";
import { use } from "react";
import type { Hero } from "../types/hero.interfaces";

const mockHero = {
  id: "1",
  name: "batman",
} as Hero;
const TestComponent = () => {
  const { favoriteCount, favorites, isFavorite, toogleFavorite } =
    use(FavoriteHeroContext);
  return (
    <div>
      <div data-testid="favorite-count">{favoriteCount}</div>
      <div data-testid="favorite-list">
        {favorites.map((hero) => (
          <div key={hero.id} data-testid={`hero-${hero.id}`}>
            {hero.name}
          </div>
        ))}
      </div>
      <button
        data-testid="toggle-favorite"
        onClick={() => toogleFavorite(mockHero)}
      >
        Toggle Favorite
      </button>
      <div data-testid="is-favorite">{isFavorite(mockHero).toString()}</div>
    </div>
  );
};

const renderContextTest = () => {
  return render(
    <FavoriteHeroProvider>
      <TestComponent />
    </FavoriteHeroProvider>,
  );
};
describe("FavvoriteHeroContext", () => {
    beforeEach(()=>{
        localStorage.clear()
    })
  test("should initialize with default values", () => {
    renderContextTest();

    expect(screen.getByTestId("favorite-count").textContent).toBe("0");
    expect(screen.getByTestId("favorite-count").children.length).toBe(0);
  });

  test("should add hero to favorites when toggleFavorite is called with new Hero", () => {
    renderContextTest();
    const button = screen.getByTestId("toggle-favorite");

    fireEvent.click(button);

    expect(screen.getByTestId("favorite-count").textContent).toBe("1");
    expect(screen.getByTestId("is-favorite").textContent).toBe("true");
    expect(screen.getByTestId("hero-1").textContent).toBe("batman");
    expect(localStorage.getItem("favorites")).toBe(
      '[{"id":"1","name":"batman"}]',
    );
  });

  test("should removehero to favorites when toggleFavorite is called", () => {
    
    localStorage.setItem("favorites", JSON.stringify([mockHero]));
    renderContextTest();
    expect(screen.getByTestId("favorite-count").textContent).toBe("1");
    expect(screen.getByTestId("is-favorite").textContent).toBe("true");
    expect(screen.getByTestId("hero-1").textContent).toBe("batman");
    expect(localStorage.getItem("favorites")).toBe(
      '[{"id":"1","name":"batman"}]',
    );
    const button = screen.getByTestId("toggle-favorite");

    fireEvent.click(button);
    expect(screen.getByTestId("favorite-count").textContent).toBe("0");
    expect(screen.getByTestId("is-favorite").textContent).toBe("false");
    expect(screen.queryByTestId("hero-1")).toBeNull();
    

  });
});
