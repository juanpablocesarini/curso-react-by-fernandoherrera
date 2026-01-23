import { useState } from "react";
import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["cinco"]);
  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase();
    if (query.length === 0) return;
    if (previousTerms.includes(query)) return;
    setPreviousTerms([query,...previousTerms].splice(0,7));

   const gifs = await getGifsByQuery(query)

   console.log({gifs})
  };
  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />
      {/* Search */}
      <SearchBar placeholder="Buscar Gifs" onQuery={handleSearch} />
      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
      <GifsList gifsList={mockGifs} />
    </>
  );
};
