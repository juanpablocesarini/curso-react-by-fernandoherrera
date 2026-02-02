import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { CustomJumbotron } from "@/components/custom/CustomJumbotron";


import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";



export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");


  const {data:heroesResponse} = useQuery({
    queryKey:['heroes'],
    queryFn: ()=> getHeroesByPageAction(),
    staleTime: 1000*60*5, //5 minutos
  })
  console.log({heroesResponse});
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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              onClick={() => setActiveTab("favorites")}
              className="flex items-center gap-2"
            >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value={"all"}>
            <h1>Todos los personajes</h1>
            {/* Character Grid */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value={"favorites"}>
            <h1>Favoritos</h1>
            {/* Character Grid */}
            <HeroGrid heroes={[]}/>
          </TabsContent>
          <TabsContent value={"heroes"}>
            <h1>Herores</h1>
            {/* Character Grid */}
            <HeroGrid heroes={[]}/>
          </TabsContent>
          <TabsContent value={"villains"}>
            <h1>Villanos</h1>
            {/* Character Grid */}
            <HeroGrid heroes={[]}/>
          </TabsContent>
        </Tabs>

        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
