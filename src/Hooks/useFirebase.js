import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
//initializing firebase app
initializeFirebase();
const useFirebase = () => {
     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);

     const [authError, setAuthError] = useState('')
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();


     const registerUser = (email, password,name,  history) => {
          
        setIsLoading(true);
         createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            setAuthError('')
            const newUser = {email, displayName: name};
           
            setUser(newUser);

             //send name to firebase 
             updateProfile(auth.currentUser, {
                displayName: name, 
              }).then(() => {
              
              }).catch((error) => {
              });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
         
          })
          .finally(()=> setIsLoading(false));
        
     }


     const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
       
          const user = result.user;
          setAuthError('');
          history.replace('/')
       
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
     }
  
     const loginUser = (email, password, location, history) => {
         setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination)
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
     }

     const logOut = () => {
         setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=> setIsLoading(false))
          
     }

     //observer user state 
     useEffect(() => {
 const unsubscribe  = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe
     }, [])
     return {
         user,
         registerUser,
         logOut,
         isLoading,
         loginUser,
         authError,
         signInWithGoogle

     }

}

export default useFirebase;