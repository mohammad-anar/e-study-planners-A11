
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../firebase/firebase.conf";
import { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    setLoading(true)
    return signOut(auth);
  }
  const updateUser = (name, photo) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  const popUpSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const githubSignin = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
  useEffect( () => {
    const unsubscrive = onAuthStateChanged(auth, (currentUSer) => {
      setuUser(currentUSer)
      setLoading(false)
    })
    
    return () => {
      unsubscrive()
    }
  }, [])

  const authValue = {
    user,
    logout,
    loading,
    signInUser,
    updateUser,
    createUser,
    popUpSignIn,
    githubSignin
  };
  AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animated',
  });
  return (
    <AuthContext.Provider value={authValue}>{children} </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
