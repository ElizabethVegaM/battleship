import { useState, useEffect } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useFirestoreData = (ref) => {
  const [docState, setDocState] = useState({
    firestoreData: null,
  });

  useEffect(() => {
    ref.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDocState({
            firestoreData: doc,
          });
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error getting documents: ', error);
      });
  });
  return docState;
};
