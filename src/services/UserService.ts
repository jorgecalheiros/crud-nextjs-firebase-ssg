import { addDoc, collection, CollectionReference, deleteDoc, doc, DocumentReference, getDoc, getDocs } from "firebase/firestore"
import { DataUser, User } from "../@types/User";
import { db } from "../firebase/initFirebase"

class UserService {
    collection: CollectionReference<any>

    constructor() {
        const collectionName = "usuarios";
        this.collection = collection(db, collectionName)
    }

    async get(): Promise<[User[] | [], boolean | unknown]> {
        try {
            const userSnapShot = await getDocs<DataUser>(this.collection);
            const userList = userSnapShot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                }
            });
            return [userList, false];
        } catch (error) {
            return [[], error];
        }
    }

    async addCollection(data: DataUser): Promise<boolean> {
        try {
            const user = await addDoc<DataUser>(this.collection, data)
            return true
        } catch (error) {
            return false;
        }
    }

    async getByDocument(id: string) {
        try {
            const docRef = doc(db, `usuarios/${id}`);
            const userSnapShot = await getDoc<any>(docRef);

            const data: User = {
                id: userSnapShot.id,
                data: userSnapShot.data()
            }

            return [data, false]

        } catch (error) {
            return [null, error]
        }
    }

    async deleteDocument(id: string) {
        try {
            const docRef = doc(db, `usuarios/${id}`);
            await deleteDoc(docRef);
            return true;
        } catch (error) {
            return false;
        }
    }

}

export default new UserService