import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";

//initializing firebase app
initializeFirebase();
const useFirebase = () => {
     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
      const [admin, setAdmin] = useState(false)
     const [authError, setAuthError] = useState('')
     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();
     const [token, setToken] = useState('');


     const registerUser = (email, password,name,  history) => {
          
        setIsLoading(true);
         createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            setAuthError('')
            const newUser = {email, displayName: name};
           
            setUser(newUser);
            //save user to the database
            saveUser(email, name, 'POST');

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

   const saveUser = (email, displayName, method)=> {
     const user = {email, displayName};
     fetch('https://dry-inlet-45409.herokuapp.com/email', {
       method: method,
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify(user)
     })
     .then()
   }
     const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
       
          const user = result.user;
          saveUser(user.email, user.displayName, 'PUT');
          setAuthError('');
          history.replace('/dashboard')
       
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
     }
  
     const loginUser = (email, password, location, history) => {
         setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/dashboard';
            history.replace(destination)
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
     }

     useEffect(()=> {
       fetch(`https://dry-inlet-45409.herokuapp.com/email/${user.email}`)
       .then(res => res.json())
       .then(data => setAdmin(data.admin))
     }, [user.email])

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
              getIdToken(user)
              .then(idToken => {
                setToken(idToken);
              })
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe
     }, [auth])
     return {
         user,
         admin,
         token,
         registerUser,
         logOut,
         isLoading,
         loginUser,
         authError,
         signInWithGoogle

     }

}

export default useFirebase;