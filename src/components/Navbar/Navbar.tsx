import { Button } from '../Button/Button';

import './style.scss';
import logoGoogleImg from '../../assets/google-icon.svg';
import logoRuneImg from '../../assets/rune.svg';


export function Navbar(){
    return (

        <div className="navbar">
            <div className="logo">
                <img src={ logoRuneImg } alt="Acesse tibianovojogo.com" />
                <span>
                    tibianovojogo.com
                </span>
            </div>


            <div className="login-signup">
                <Button>
                    <img src={logoGoogleImg} alt="Entre com o Google"/>
                    <span>Login com Google</span>
                </Button>
            </div>

        </div>
    );
}