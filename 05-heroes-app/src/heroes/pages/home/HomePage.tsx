import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";

import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { useHeroPaginate } from "@/heroes/hooks/useHeroPaginate";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") ?? "all";

  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "herores", "villains"];
    return validTabs.includes(activeTab) ? activeTab : "all";
  }, [activeTab]);


  const { data: heroesResponse } = useHeroPaginate(+page,+limit);
  const { data: summary } = useHeroSummary();
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de superhéroes"
          description="Descubre. explora y administra superhéroes y villanos"
        />
        {/* | Breadcrumbs */}
        <CustomBreadcrumbs currentPage={"Superhéroes"} />
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}

        {/* Advanced Filters */}

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all");
                  return prev;
                })
              }
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites");
                  return prev;
                })
              }
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes");
                  return prev;
                })
              }
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains");
                  return prev;
                })
              }
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>
          <TabsContent value={"all"}>
            {/* Character Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value={"favorites"}>
            <h1>Favoritos</h1>
            {/* Character Grid */}
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value={"heroes"}>
            <h1>Herores</h1>
            {/* Character Grid */}
            <HeroGrid heroes={[]} />
          </TabsContent>
          <TabsContent value={"villains"}>
            <h1>Villanos</h1>
            {/* Character Grid */}
            <HeroGrid heroes={[]} />
          </TabsContent>
        </Tabs>

        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      </>
    </>
  );
};
