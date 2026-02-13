import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { HomePage } from "./HomePage";
import { MemoryRouter } from "react-router";
import { useHeroPaginate } from "@/heroes/hooks/useHeroPaginate";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { heroApi } from "@/heroes/api/hero.api";
import { FavoriteHeroProvider } from "@/heroes/context/FavoriteHeroContext";

beforeAll(() => {
  heroApi.defaults.adapter = "http";
});

vi.mock("@/heroes/hooks/useHeroPaginate");

const mockUsePaginateHero = vi.mocked(useHeroPaginate);

mockUsePaginateHero.mockReturnValue({
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
} as unknown as ReturnType<typeof mockUsePaginateHero>);

const queryClient = new QueryClient();
const renderHomePage = (initialEntries: string[] = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <FavoriteHeroProvider>
        <QueryClientProvider client={queryClient}>
          <HomePage />
        </QueryClientProvider>
      </FavoriteHeroProvider>
    </MemoryRouter>,
  );
};
describe("HomePage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  test("should render HomePage with default values", () => {
    const { container } = renderHomePage();
    // screen.debug()
    expect(container).toMatchSnapshot();
  });

  test("should call useHeroPaginate with default values", () => {
    renderHomePage();

    expect(mockUsePaginateHero).toHaveBeenCalledWith(1, 6, "all");
  });

  test("should call useHeroPaginate with custom query params", () => {
    renderHomePage(["/?page=2&limit=10&category=villains"]);

    expect(mockUsePaginateHero).toHaveBeenCalledWith(2, 10, "villains");
  });

  test('should call useHeroPaginate with default page and same limit on tab clicked',()=>{
    renderHomePage(['/?tab=favorites&page=2&limit=10']);

    const [, , , villainsTab] = screen.getAllByRole('tab');
    
    fireEvent.click(villainsTab);
    expect(mockUsePaginateHero).toHaveBeenCalledWith(1,10,'villain');
  })
});
