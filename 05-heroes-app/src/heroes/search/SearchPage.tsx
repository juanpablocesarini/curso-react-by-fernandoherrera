import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../components/HeroStats";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de superhéroes"
        description="Descubre. explora y administra superhéroes y villanos"
      />
      {/* Stats Dashboard */}
      <HeroStats />
    </>
  );
};
export default SearchPage;
