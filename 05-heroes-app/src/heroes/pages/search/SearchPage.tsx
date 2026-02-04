import { CustomJumbotron } from "@/components/custom/CustomJumbotron";

import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'react-router';
import { serchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {
  const [searchParams]=useSearchParams();
  const name= searchParams.get('name')??undefined;
  const {data:heroes= []} = useQuery({
    queryKey: ['search',{name}],
    queryFn: () => serchHeroesAction({name}),
    staleTime: 1000*60/5,
  })
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de superhéroes"
        description="Descubre. explora y administra superhéroes y villanos"
      />
        {/*  Breadcrumbs */}
      <CustomBreadcrumbs currentPage={"Búsqueda"}/>
  
      {/* Stats Dashboard */}
      <HeroStats />
      {/* Filter and search */}
      <SearchControls/>
      <HeroGrid heroes={heroes}/>
    </>
  );
};
export default SearchPage;
