import { useState, useEffect } from 'react';
import firebase from '../Firebase/firestore';

// eslint-disable-next-line import/prefer-default-export
export const useFirestoreGameStatus = (id) => {
  const [refState, setRefState] = useState({
    firestoreRef: null,
  });

  useEffect(() => {
    firebase.firestore().collection('games').doc(id)
      .onSnapshot((doc) => {
        setRefState({ firestoreRef: doc.data() });
      });
  });

  return refState;
};
