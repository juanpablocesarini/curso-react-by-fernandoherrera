import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router";
import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import SearchPage from "./SearchPage";
import { heroApi } from "@/heroes/api/hero.api";
import { serchHeroesAction } from "@/heroes/actions/search-heroes.action";
import type { Hero } from "@/heroes/types/hero.interfaces";



beforeAll(() => {
  heroApi.defaults.adapter = "http";
});
beforeEach(()=>{
    vi.clearAllMocks()
})
vi.mock("@/heroes/actions/search-heroes.action");

vi.mock("@/components/custom/CustomJumbotron", () => ({
  CustomJumbotron: () => <div data-testid="custom-jusmbotron"></div>,
}));

vi.mock("@/heroes/components/HeroGrid",()=>({
    HeroGrid: ({heroes}:{heroes: Hero[]})=>(<div data-testid='hero-grid'>
        {
            heroes.map((hero)=>(
                <div key ={hero.id}>{hero.name}</div>
            ))
        }
    </div>)
}));


const mockSearchHeroesAction = vi.mocked(serchHeroesAction);

const queryClient = new QueryClient();

const renderSearchPage = (initialEntries: string[] = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <QueryClientProvider client={queryClient}>
        <SearchPage />
      </QueryClientProvider>
    </MemoryRouter>,
  );
};
describe("searchPage", () => {
  test("should render SearchPage with default values", () => {
    const { container } = renderSearchPage();

    expect(mockSearchHeroesAction).toHaveBeenCalledWith({
      name: undefined,
      strength: undefined,
    });

    expect(container).toMatchSnapshot();
  });

  test("should call search action with name parameters", () => {
    const { container } = renderSearchPage(['/search?name=superman']);

    expect(mockSearchHeroesAction).toHaveBeenCalledWith({
      name: 'superman',
      strength: undefined,
    });

    expect(container).toMatchSnapshot();
  });
    test("should call search action with stength parameters", () => {
    const { container } = renderSearchPage(['/search?strength=6']);

    expect(mockSearchHeroesAction).toHaveBeenCalledWith({
      name: undefined,
      strength: '6',
    });

    expect(container).toMatchSnapshot();
  });
  test("should call search action with stength and name parameters", () => {
    const { container } = renderSearchPage(['/search?strength=8&name=batman']);

    expect(mockSearchHeroesAction).toHaveBeenCalledWith({
      name: 'batman',
      strength: '8',
    });

    expect(container).toMatchSnapshot();
  });

  test('should render HeroGrid with search results', async ()=>{
    const mockHeroes = [
        {id:'1', name:'Clark Kent'} as unknown as Hero,
        {id:'2', name:'Bruce Wayne'} as unknown as Hero,
    ]

    mockSearchHeroesAction.mockResolvedValue(mockHeroes);

    renderSearchPage()
    
    await waitFor(()=>{
        expect(screen.getByText('Clark Kent')).toBeDefined();
        expect(screen.getByText('Bruce Wayne')).toBeDefined();
    })

  })
});
