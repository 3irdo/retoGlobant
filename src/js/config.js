// config.js
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  limit,
  orderBy
} from 'firebase/firestore';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './firebaseCredentials';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, initializeApp as getApp };

const auth = getAuth(app);

const db = getFirestore(app);

export { db, collection, addDoc, getDocs, auth, onSnapshot, query, limit, orderBy };

export const saveTask = (title, description, imgUrl) =>
  addDoc(collection(db, 'publicaciones'), { title, description, imgUrl });

export const getTasks = () => getDocs(collection(db, 'publicaciones'));

export const onGetPost = (callback) =>
  onSnapshot(collection(db, 'publicaciones'), callback);
