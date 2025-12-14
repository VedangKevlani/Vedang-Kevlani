import { db, collection, addDoc, serverTimestamp } from '../firebase'

export async function logPageVisit(name) {
  try {
    await addDoc(collection(db, 'analytics'), {
      name,        // page or section name
      timestamp: serverTimestamp()
    })
  } catch (err) {
    console.error('Failed to log analytics', err)
  }
}
