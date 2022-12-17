import React, { useContext, useState, useEffect } from "react";
import * as api from '../api/index'
import { auth } from "./firebase"
const AuthContext = React.createContext<any | null>(null);


export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function signUp(username: string, email: string, password: string, role: string) {
  //   await auth.createUserWithEmailAndPassword(email, password);
  //   if(auth.currentUser)
  //   setDoc(doc(db, "users", auth.currentUser.uid), {
  //     username,
  //     email,
  //     password,
  //     role,
  //     tasks: {
  //   "BackLog": [
  //     ],
  //     "To-Do": [
  //     ],
  //     "In-Process": [
  //     ],
  //     "Completed": [
  //     ]
  // },
  //   });
  }

 async function login(username:string, password:string) {
  const userDatas: any = {
    "username": username,
    "password": password
  }
    const user: any = await api.login(userDatas)
    setCurrentUser(user.data._id)

  }
  function signOut() {
    setCurrentUser(null);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: any) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  const value : any= {
    currentUser,
    login,
    signUp,
    signOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}