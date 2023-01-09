import Firebase from "../firebase";
import { firestore } from "firebase-admin";
const db = Firebase.firestore();

export function toDate(date: Date) {
  return firestore.Timestamp.fromDate(date);
}

export default db;
