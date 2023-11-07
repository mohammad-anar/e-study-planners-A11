
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../firebase/firebase.conf";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setuUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    return signOut(auth);
  }
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  const popUpSignIn = () => {
    return signInWithPopup(auth, googleProvider)
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
    popUpSignIn
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
