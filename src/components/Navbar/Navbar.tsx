import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button/Button';

import './style.scss';
import logoGoogleImg from '../../assets/google-icon.svg';
import logoRuneImg from '../../assets/rune.svg';


export function Navbar(){
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    function loginWithgoogle(){
        if(!user){
            signInWithGoogle();
        }

        history.push('/')
    }

    return (

        <div className="navbar">
            <Link to='/'>
            <div className="logo">
                <img src={ logoRuneImg } alt="Acesse tibianovojogo.com" />
                <span>
                    tibianovojogo.com
                </span>
            </div>
            </Link>

            
            <div className="login-signup">
                {user && 
                    <span className="user-profile"><img src={user?.avatar} alt="sua foto do login google"/>{user?.name}</span>
                }

                {!user &&
                    <Button onClick={loginWithgoogle}>
                        <img src={logoGoogleImg} alt="Entre com o Google"/>
                        <span>Login com Google</span>
                    </Button>
                }

            </div>

        </div>
    );
}