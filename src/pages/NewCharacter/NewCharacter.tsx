
import './style.scss'
import wandIcon from '../../assets/wand.gif';
import bowIcon from '../../assets/bow.gif';
import rodIcon from '../../assets/rod.gif';
import swordIcon from '../../assets/sword.gif';

import { FormEvent, useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import toast, { resolveValue, Toaster } from 'react-hot-toast';
import { database } from '../../services/firebase';

import { useFormCharacter, CharmType, ImbuementsType} from '../../hooks/useFormCharacter';
import { IndexedAccessType, IndexType } from 'typescript';

type iconsVocationType = string;


export function NewCharacter(){

    const iconsVocation: any  = {
        'sorcerer': wandIcon,
        'paladin': bowIcon,
        'druid': rodIcon,
        'knight': swordIcon,
    }
    
    const [vocation, setVocation] = useState<iconsVocationType>('druid');
    const {character, handleSubmit, handleTitle, handleSkill} = useFormCharacter();
    const [charmExpansion, setCharmexpansion ] = useState(true);
    const [ charm, setCharm ] = useState<CharmType>({...character.charms});
    const [ imbuement, setImbuement ] = useState({...character.imbuements});
    const [ urlImgur, setUrlImgur ] = useState("");
    const [ price, setPrice ] = useState(0);
    function handleCharm(event: any){
        const newCharm = {...charm, [event.target.name]: event.target.checked}
        setCharm(newCharm)


    }

    function handleImbue(event: any){
        const newImbue = {...imbuement, [event.target.name]: event.target.checked}
        setImbuement(newImbue)
    }


    function handleUrlImgur(event: any){

        if (event.target.value && event.target.value.startsWith("https://imgur.com/gallery/")){
            setUrlImgur(event.target.value)
        }else{
            toast.error("URL precisa ser do site Imgur ");
        }
    }

    function handlePrice(event:any){
        if (0 <= event.target.value && event.target.value >= 10000){
            setPrice(event.target.value)
        }else {
            toast.error("O preço precisa ser entre 0 e 10k");
        }
    }

    return(
        <div className="create-character-container">
            <div><Toaster position="top-right" reverseOrder={false}/></div>
            <Navbar />
            
            <main>
                <form onSubmit={handleSubmit}>
                    <div className="form-create-character">
                        <div className="charms-imbuements">
                        <div>Teste: {urlImgur}</div>
                        <div className="title">
                            <label htmlFor="title" className="legend-title">Title
                            <input type="text" name="title" id="title" onChange={handleTitle} value={character.title}/>
                            </label>
                        </div>

                        <div className="vocation">
                            <div className="vocation-item">
                                <img src={iconsVocation[vocation.toString()]} alt="item da sua vocação" />
                            </div>
                            <label htmlFor="vocation" className="legend-title">Vocation</label>
                            <select name="vocation" id="vocation" onChange={(event)=> setVocation(event.target.value)}>
                                <option value="druid">Druid</option>
                                <option value="knight">Knight</option>
                                <option value="paladin">Paladin</option>
                                <option value="sorcerer">Sorcerer</option>
                            </select>


                        </div>
                            <fieldset className="skills">
                                <legend className="legend-title">Skills</legend>

                                <div className="magic-level">
                                    <label htmlFor="magiclevel">Magic Level</label>
                                    <input type="number" name="magiclevel" id="magiclevel" onChange={handleSkill} value={character.skills?.magiclevel} min="1" max="200"/>
                                </div>

                                <div className="axe">
                                    <label htmlFor="axe">Axe</label>
                                    <input type="number" name="axe" id="axe" onChange={handleSkill} value={character.skills.axe} min="1" max="200"/>
                                </div>

                                <div className="club">
                                    <label htmlFor="club">Club</label>
                                    <input type="number" name="club" id="club" onChange={handleSkill} value={character.skills.club} min="1" max="200"/>
                                </div>

                                <div className="distance">
                                    <label htmlFor="distance">Distance</label>
                                    <input type="number" name="distance" id="distance" onChange={handleSkill} value={character.skills.distance} min="1" max="200"/>
                                </div>

                                <div className="fishing">
                                    <label htmlFor="fishing">Fishing</label>
                                    <input type="number" name="fishing" id="fishing" onChange={handleSkill} value={character.skills.fishing} min="1" max="200"/>
                                </div>

                                <div className="shielding">
                                    <label htmlFor="shielding">Shielding</label>
                                    <input type="number" name="shielding" id="shielding" onChange={handleSkill} value={character.skills.shielding} min="1" max="200"/>
                                </div>  

                                <div className="sword">
                                    <label htmlFor="sword">Sword</label>
                                    <input type="number" name="sword" id="sword" onChange={handleSkill} value={character.skills.sword} min="1" max="200"/>
                                </div>

                            </fieldset>

                            <div className="charms">
                                <div className="charm-expansion">
                                    <label htmlFor="charm-expansion">Charm Expansion?</label>
                                    <input type="checkbox" name="charmexpansion" id="charm-expansion" checked={charmExpansion} onChange={() => setCharmexpansion(!charmExpansion)}/>
                                </div>

                                <fieldset>
                                    <legend className="legend-title">Charms</legend>

                                    <label htmlFor="adrenalineburst">Adrenaline Burst
                                    <input type="checkbox" name="adrenalineburst" id="adrenalineburst" onChange={(event) => handleCharm(event)}/>
                                    </label>
                                    
                                    
                                    <label htmlFor="bless">Bless
                                    <input type="checkbox" name="bless" id="bless" onChange={(event) => handleCharm(event)}/>
                                    </label>
                                    
                                    
                                    <label htmlFor="cleanse">Cleanse
                                    <input type="checkbox" name="cleanse" id="cleanse" onChange={(event) => handleCharm(event)}/>
                                    </label>
                                    

                                    <label htmlFor="cripple">Cripple
                                    <input type="checkbox" name="cripple" id="cripple" onChange={(event) => handleCharm(event)}/>
                                    </label>
                                    

                                    <label htmlFor="curse">Curse
                                    <input type="checkbox" name="curse" id="curse" onChange={(event) => handleCharm(event)}/>
                                    </label>

                                    <label htmlFor="dodge">Dodge
                                    <input type="checkbox" name="dodge" id="dodge" onChange={(event) => handleCharm(event)}/>
                                    </label>


                                    <label htmlFor="enflame">Enflame
                                    <input type="checkbox" name="enflame" id="enflame" onChange={(event) => handleCharm(event)}/>
                                    </label>

                                    <label htmlFor="freeze">Freeze
                                    <input type="checkbox" name="freeze" id="freeze" onChange={(event) => handleCharm(event)}/>
                                    </label>

                                    <label htmlFor="gut">Gut
                                    <input type="checkbox" name="gut" id="gut" onChange={(event) => handleCharm(event)}/>
                                    </label>

                                    <label htmlFor="lowblow">Low Blow
                                    <input type="checkbox" name="lowblow" id="lowblow" onChange={(event) => handleCharm(event)}/>
                                    </label>


                                    <label htmlFor="numb">Numb
                                    <input type="checkbox" name="numb" id="numb" onChange={(event) => handleCharm(event)}/>
                                    </label>

                                    <label htmlFor="parry">Parry
                                    <input type="checkbox" name="parry" id="parry" onChange={(event) => handleCharm(event)}/>
                                    </label>


                                    <label htmlFor="poison">Poison
                                    <input type="checkbox" name="poison" id="poison" onChange={(event) => handleCharm(event)}/>
                                    </label>


                                    <label htmlFor="scavenge">Scavenge
                                    <input type="checkbox" name="scavenge" id="scavenge" onChange={(event) => handleCharm(event)} />
                                    </label>


                                    <label htmlFor="wound">Wound
                                    <input type="checkbox" name="wound" id="wound" onChange={(event) => handleCharm(event)}/>
                                    </label>


                                    <label htmlFor="zap">Zap
                                    <input type="checkbox" name="zap" id="zap" onChange={(event) => handleCharm(event)}/>
                                    </label>

                                </fieldset>
                            </div>


                            <div className="imbuements">
                                <fieldset>
                                    <legend className="legend-title">Imbuements</legend>
                                        <label htmlFor="death">Death
                                        <input type="checkbox" name="death" id="death" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="Energy">Energy
                                        <input type="checkbox" name="Energy" id="Energy" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="Earth">Earth
                                        <input type="checkbox" name="Earth" id="Earth" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="Fire">Fire
                                        <input type="checkbox" name="Fire" id="Fire" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="ice">Ice
                                        <input type="checkbox" name="ice" id="ice" onChange={(event) => handleImbue(event)} />
                                        </label>

                                        <label htmlFor="holy">Holy
                                        <input type="checkbox" name="holy" id="holy" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="strike">Strike
                                        <input type="checkbox" name="strike" id="strike" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="vampirism">Vampirism
                                        <input type="checkbox" name="vampirism" id="vampirism" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="void">Void
                                        <input type="checkbox" name="void" id="void" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="bash">Bash
                                        <input type="checkbox" name="bash" id="bash" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="chop">Chop
                                        <input type="checkbox" name="chop" id="chop" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="slash">Slash
                                        <input type="checkbox" name="slash" id="slash" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="blockade">Blockade
                                        <input type="checkbox" name="blockade" id="blockade" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="epiphany">Epiphany
                                        <input type="checkbox" name="epiphany" id="epiphany" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="precision">Precision
                                        <input type="checkbox" name="precision" id="precision" onChange={(event) => handleImbue(event)} />
                                        </label>
                                        
                                        <label htmlFor="featherweight">Featherweight
                                        <input type="checkbox" name="featherweight" id="featherweight" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="swiftness">Swiftness
                                        <input type="checkbox" name="swiftness" id="swiftness" onChange={(event) => handleImbue(event)}/>
                                        </label>

                                        <label htmlFor="vibrancy">Vibrancy
                                        <input type="checkbox" name="vibrancy" id="vibrancy" onChange={(event) => handleImbue(event)}/>
                                        </label>
                                </fieldset>
                            </div>
                        </div>



                        <div className="screenshot">
                            <label htmlFor="screenshot" className="legend-title">Screenshot (Mounts, Outfits, Quests)</label>
                            <span>Upload on <a href="https://imgur.com/" target="_blank" rel="noreferrer">imgur.com</a></span>
                            <input type="text" name="screenshot" id="screenshot" placeholder="link photo imgur" onInput={(event) => handleUrlImgur(event)}/>
                        </div>

                        <div className="price">
                            <label htmlFor="price" className="legend-title">Price $</label>
                            <input type="number" name="price" id="price" onChange={(event) => handlePrice(event)}/>
                        </div>

                    </div>
                    <div className="submit-create">
                        <button type="submit" className="btn-create" >Criar anúncio</button>
                    </div>
                </form>
            </main>
        </div>
    )

}