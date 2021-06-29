import { useContext } from 'react';
import { AuthContext } from '../components/Auth/AuthContext';


export function useAuth(){
    const value = useContext(AuthContext)
    return value;
}