import { describe, expect, test } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useGifs } from "./useGifs";

describe("useGifs", () => {
  test("should returns default values and methods", () => {
    const { result } = renderHook(() => useGifs());
    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();

  
  });

  test("should returns a list of gifs", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async()=>{

     await result.current.handleSearch('pikachu');
    })

    expect(result.current.gifs.length).toBe(10)
  });

   test("should returns a list of gifs when handleTermClicked is called", async () => {
    const { result } = renderHook(() => useGifs());

    await act(async()=>{

     await result.current.handleTermClicked('pikachu');
    })

    expect(result.current.gifs.length).toBe(10)
  });
});
