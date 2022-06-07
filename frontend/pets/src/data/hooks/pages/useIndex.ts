import { useState } from "react";
import { Pet } from '../../@types/Pets';

export function useIndex(){
    const [listPets, setListPets] = useState(
        [
            {
              id: 1,
              name: 'Yang',
              history: 'lorem',
              photo: 'https://images7.alphacoders.com/889/889709.jpg',
            },
            {
              id: 2,
              name: 'Choco',
              history: 'lorem',
              photo: 'https://img2.goodfon.com/wallpaper/nbig/5/9d/german-shepherd-puppy-dog-pet-1663.jpg',
            }
        ]
    ),

        [petSelected, setPetSelected] = useState<Pet | null>(null);

    return{
        listPets,
        petSelected,
        setPetSelected,
    };
}