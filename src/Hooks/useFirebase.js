import initializeAuthentication from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const singInUsingGoogle = (location, navigate) => {
    const googleProvider = new GoogleAuthProvider();
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const destination = location?.state?.from || '/';
      navigate(destination);
      setUser(result.user);
      })
      .catch((e) => setError(e.message)(console.log(e.message)))
      .finally(() =>setIsLoading(false))
  };
  const register = (email, pass)=>{
    createUserWithEmailAndPassword(auth, email, pass)
    .then(result=>{
      setUser(result.user)
    })
  }
  const loginUser = (email, pass)=>{
    signInWithEmailAndPassword(auth, email, pass)
    .then(result=>{
      setUser(result.user)
    })
    .catch(err=>console.log(err.message))
  }
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((e) => setError(e.message));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return unsubscribe;
  }, []);
  return {
    singInUsingGoogle,
    logOut,
    register,
    loginUser,
    isLoading,
    user,
    error,
  };
};
export default useFirebase;
