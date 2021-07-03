import { FormEvent, useState } from 'react'


export type CharmType = {
    adrenalineburst?: boolean,
    bless?: boolean,
    cleanse?: boolean,
    cripple?: boolean,
    curse?: boolean,
    dodge?: boolean,
    enflame?: boolean,
    freeze?: boolean,
    gut?: boolean,
    lowblow?: boolean,
    numb?: boolean,
    parry?: boolean,
    poison?: boolean,
    scavenge?: boolean,
    wound?: boolean,
    zap?: boolean,
    }
    
export type ImbuementsType = {
    death: boolean
    Energy: boolean
    Earth: boolean
    Fire: boolean
    ice: boolean
    holy: boolean
    strike: boolean
    vampirism: boolean
    void: boolean
    bash: boolean
    chop: boolean
    slash: boolean
    blockade: boolean
    epiphany: boolean
    precision: boolean
    featherweight: boolean
    swiftness: boolean
    vibrancy: boolean
}
    
type CharacterType = {
   title?: string,
   vocation?: string,
   skills: {
       magiclevel?: string | undefined,
       axe?: string | undefined,
       club?: string | undefined,
       distance?: string | undefined,
       fishing?: string | undefined,
       shielding?: string | undefined,
       sword?: string | undefined
   },
   hasCharmExpansion?: boolean,
   charms?: CharmType,
   imbuements?: ImbuementsType,
   screenshot?: string,
   server?: string,
   price?: number,
}

export function useFormCharacter(){

    const [character, setCharacter] = useState<CharacterType>({
        title: '',
        vocation: 'druid',
        skills: {
            magiclevel: '1',
            axe: '10',
            club: '10',
            distance: '10',
            fishing: '10',
            shielding: '10',
            sword: '10'
        },
        charms: {
            adrenalineburst: false,
            bless: false,
            cleanse: false,
            cripple: false,
            curse: false,
            dodge: false,
            enflame: false,
            freeze: false,
            gut: false,
            lowblow: false,
            numb: false,
            parry: false,
            poison: false,
            scavenge: false,
            wound: false,
            zap: false
        },
        imbuements: {
            death: false,
            Energy: false,
            Earth: false,
            Fire: false,
            ice: false,
            holy: false,
            strike: false,
            vampirism: false,
            void: false,
            bash: false,
            chop: false,
            slash: false,
            blockade: false,
            epiphany: false,
            precision: false,
            featherweight: false,
            swiftness: false,
            vibrancy: false
        },
        hasCharmExpansion: false,
        price: 0,
        screenshot: '',
        server: '',
           

    });


    function handleSubmit(event: FormEvent){
        return;
    }

    function handleTitle(event: any){
        const newCharacter = {...character}
        const newTitle = event.target.value;

        if (newTitle.length >= 40){
            return;
        }
        newCharacter.title = newTitle;
        setCharacter(newCharacter);

    }

    function handleSkill(event: any){

        const {name, value}  = event.target;
        const newCharacter = {...character}

        if(!value){
            newCharacter.skills ={
                ...character.skills,
                [name]: 0
            }
            setCharacter(newCharacter)
        }

        else if(!parseInt(value)){
            return;
        }

        else if (value <= 200 && value >= 0){
            newCharacter.skills = {
                ...character.skills,
                [name]: value
            }
            setCharacter(newCharacter)
        }

    }

    return {character, handleSubmit, handleTitle, handleSkill};
}