import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update, connectDatabaseEmulator } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithCredential, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyByVBSe1i-WjQHGmUbZTGRFKtdGo1ifyQM",
    authDomain: "first-proj-95ab4.firebaseapp.com",
    databaseURL: "https://first-proj-95ab4-default-rtdb.firebaseio.com",
    // databaseURL: "https://first-proj-95ab4.firebaseio.com",
    projectId: "first-proj-95ab4",
    storageBucket: "first-proj-95ab4.appspot.com",
    messagingSenderId: "643512546806",
    appId: "1:643512546806:web:f59411deda788def5683d7",
    measurementId: "G-VNPY7HC8TJ"
};
  
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const auth = getAuth(firebase);


const createAdmin = (uid) => {
  console.log('createAdmin', uid);
  update(ref(database, `/admins/${uid}`),{ uid : uid});
};

const deleteAdmin = (uid) => {
  console.log('deleteAdmin', uid);
  update(ref(database, `/admins/${uid}`), null);
}

const seeAdmins = () => {
  console.log('seeAdmins');
  onValue(ref(database, '/admins'), (snapshot) => {
    const data = snapshot.val();
    console.log('data', data);
  });
}
// TO CREATE OR DELETE ADMIN
  // paste 'some-uid' into the function call below
  // then uncomment the line below
  // 
// createAdmin('some-uid');
// deleteAdmin('some-uid');

// TO SEE ALL ADMINS
  // uncomment the line below
// seeAdmins();

if (!globalThis.EMULATION && import.meta.env.MODE === 'development') {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

signInWithCredential(auth, GoogleAuthProvider.credential(
  '{"sub": "FMUAZspPfmaCCvQh1MiNa75QlWc5", "email": "fake@gmail.com", "displayName":"Fake User", "email_verified": false}'
));

// set flag to avoid connecting twice, e.g., because of an editor hot-reload
globalThis.EMULATION = true;
}



export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

// Authentification
export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ), []);

  return [user];
};