import { renderHook, waitFor } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, test, vi } from "vitest";
import { useHeroPaginate } from "./useHeroPaginate";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { heroApi } from "../api/hero.api";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";


beforeAll(() => {
  heroApi.defaults.adapter = "http";
});

vi.mock("../actions/get-heroes-by-page.action", () => ({
  getHeroesByPageAction: vi.fn(),
}));

const mockGetHeoresByPageAction = vi.mocked(getHeroesByPageAction);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const tanStackCustomProvider = () => {
  return ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useHeroPaginate", () => {

    beforeEach(()=>{
        vi.clearAllMocks()
        queryClient.clear()
    })
  test("should return the initial state (isLoading)", () => {
    const { result } = renderHook(() => useHeroPaginate(1, 6), {
      wrapper: tanStackCustomProvider(),
    });
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toBe(undefined);
    expect(result.current.data).toBeUndefined();
  });
  test("should return success state with data hen API call succeds", async () => {
    const mockHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    };

    mockGetHeoresByPageAction.mockResolvedValue(mockHeroesData);

    const { result } = renderHook(() => useHeroPaginate(1, 6), {
      wrapper: tanStackCustomProvider(),
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.status).toBe("success");
    expect(mockGetHeoresByPageAction).toHaveBeenCalled();
    expect(mockGetHeoresByPageAction).toHaveBeenCalledWith(1, 6, "all");
  });

  test("should call getHeroesByPageActions with arguments", async () => {
    const mockHeroesData = {
      total: 20,
      pages: 4,
      heroes: [],
    };

    mockGetHeoresByPageAction.mockResolvedValue(mockHeroesData);

    const { result } = renderHook(() => useHeroPaginate(1, 6, 'heroes'),{
      wrapper: tanStackCustomProvider(),
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    expect(result.current.status).toBe("success");
    expect(mockGetHeoresByPageAction).toHaveBeenCalled();
    expect(mockGetHeoresByPageAction).toHaveBeenCalledWith(1, 6, "heroes");
  });
});
