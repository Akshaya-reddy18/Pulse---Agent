import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  onSnapshot
} from "firebase/firestore";
import { db } from "../lib/firebase";

export const createDocument = (collectionName: string, data: any) => {
  return addDoc(collection(db, collectionName), data);
};

export const getDocument = async (collectionName: string, id: string) => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
};

export const updateDocument = (collectionName: string, id: string, data: any) => {
  const docRef = doc(db, collectionName, id);
  return updateDoc(docRef, data);
};

export const listenToCollection = (collectionName: string, callback: (data: any[]) => void) => {
  const q = collection(db, collectionName);
  return onSnapshot(q, (querySnapshot) => {
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    callback(data);
  });
};
