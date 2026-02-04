import { CustomJumbotron } from "@/components/custom/CustomJumbotron";

import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
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
    </>
  );
};
export default SearchPage;
