import Firebase from "../firebase";
import { firestore } from "firebase-admin";
const db = Firebase.firestore();


export function toDBDate(date: Date) {
  return firestore.Timestamp.fromDate(date);
}

export default db;
