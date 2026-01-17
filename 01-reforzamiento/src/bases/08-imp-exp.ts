import {heroes, type Hero, Owner} from'./data/heroes.data';

const getHeroById = (id:number):Hero | undefined =>{

    const hero = heroes.find((hero)=>{
        return hero.id === id
    });
   /*  if (!hero){
        throw new Error(`No existe heroe con el id: ${id}`)
    } */
    return hero;
};

console.log(getHeroById(4));

export const getHeroByOwner = (owner:Owner)=>{
    
    const heroArr = heroes.filter(
        hero=> hero.owner=== owner
    );
    return heroArr;
}