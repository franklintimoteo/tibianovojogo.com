import { createContext, ReactNode, useEffect, useState } from 'react'
import { auth, firebase } from '../../services/firebase';



type AuthContextProviderProps = {
    children: ReactNode,
}

type User = {
    id: string, 
    name: string,
    avatar: string
}

type AuthContextType = {
    user: User | undefined,
    signInWithGoogle: () => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextType)


export function AuthContextProvider(props: AuthContextProviderProps){

    const [user, setUser] = useState<User>();
    
    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => {
           if (user){
                const { displayName, photoURL, uid } = user;
                if (!displayName || !photoURL){
                    throw Error("Não foi possível obter seu nome ou foto do Google, preeencha antes para continuar");
                }

                setUser({
                    id: uid,
                    avatar: photoURL,
                    name: displayName,
                })
           }
       })

       return () => {
           unsubscribe();
       }
    }, [])
    
    async function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);

    
        if (result.user) {
            const { uid, photoURL, displayName } = result.user;
            if(!displayName || !photoURL){
                throw new Error("Não foi possível obter seu nome ou foto do Google, preeencha antes para continuar");
            }

            setUser({
                id: uid,
                avatar: photoURL,
                name: displayName,
            })
        }

    }
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}
