import { Navbar } from '../../components/Navbar/Navbar';
import skullIcon from '../../assets/skull-icon.svg';
import skillIcon from '../../assets/skill-icon.svg';
import correctIcon from '../../assets/correct-icon.svg';
import charmIcon from '../../assets/charm-icon.svg';
import imbuementsIcon from '../../assets/imbuementsIcon.svg';
import externalLinkIcon from '../../assets/external-link.svg';
import whatsappIcon from '../../assets/whatsapp-icon.svg';
import arrowRight from '../../assets/arrow-right.svg';
import diamondIcon from '../../assets/diamond-icon.svg';


import './style.scss';

export function Characters(){
    return (
        <div className="character-container">
            <Navbar />
                <div className="character-list-container">
                    
                    <div className="card-character">
                        <div className="title">
                            <span>VENDO RP FULL ITENS</span>
                            <div>
                                <img src={skullIcon} alt="clique para curtir"></img>
                            </div>
                            
                        </div>

                        <div className="rectangle-outline">Druid Lv.313</div>

                        <div className="character-details">
                            <div className="left-details">
                                <span className="server">Taleon</span>

                                <span className="categ-title"><img src={skillIcon} alt="skills" />Skills</span>

                                <div className="skills">
                                    <span>Magic level</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar"></div>
                                    </div>

                                    <span>Axe</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar"></div>
                                    </div>

                                    <span>Club 10</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar"></div>
                                    </div>

                                    <span>Distance</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar"></div>
                                    </div>

                                    <span>Fishing</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar"></div>
                                    </div>

                                    <span>Shielding</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar"></div>
                                    </div>

                                    <span>Sword</span>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar"></div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="right-details">
                                <span className="categ-title"><img src={correctIcon} alt=""/>Charm extension</span>
                                
                                
                                <span className="categ-title"><img src={charmIcon} alt=""/>Charms</span>

                                <div className="charm-list">
                                    <ul>
                                        <li>Parry</li>
                                        <li>Freeze</li>
                                        <li>Zap</li>
                                        <li>Wound</li>
                                    </ul>
                                </div>

                                <span className="categ-title imbuements">
                                    
                                    <div className="imbuements-list">
                                        <ul>
                                            <li>Strike</li>
                                            <li>Life</li>
                                            <li>Distance</li>
                                            <li>Sword</li>
                                            <li>Strike</li>
                                            <li>Life</li>
                                            <li>Distance</li>
                                            <li>Sword</li>
                                        </ul>
                                    </div>

                                    <img src={imbuementsIcon} alt=""/>Imbuements
                                </span>
                                
                                <a href="https://imgur.com/gallery/a8BrqlQ" target="_blank" rel="noreferrer">
                                    <div className="rectangle-outline">
                                        Screenshot <img src={externalLinkIcon} alt="Clique para abrir a imagem do personagem"/>
                                    </div>
                                </a>

                                <div className="price">
                                    <span><strong>R$</strong> 49,90 <img src={diamondIcon} alt="imagem diamente" /></span>
                                </div>


                                <div className="seller-user">
                                    
                                    <span>
                                        <img src={whatsappIcon} alt="whatsapp icone"/>
                                        K4UserX860
                                        <img src={arrowRight} alt="clique para abrir e conversar com o usuario"/>
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>


                </div>
        </div>
    )
}