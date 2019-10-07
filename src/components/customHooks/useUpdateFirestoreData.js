import { useState, useEffect } from 'react';
import firebase from '../Firebase/firestore';

// eslint-disable-next-line import/prefer-default-export
export const useUpdateFirestoreData = (id, data) => {
  const [fireData, updateData] = useState(null);

  useEffect(() => {
    firebase.firestore().collection('games').doc(id).update(data)
      .then((res) => {
        updateData(res);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error writing document: ', error);
      });
  });

  return fireData;
};
