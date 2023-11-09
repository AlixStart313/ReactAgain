import { app, db } from "../utils/Firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const getUsers = () => {
  return fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.data;
    })
    .catch(console.log);
};

export const getUsersFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const usersData = querySnapshot.docs.map((doc) => {
      const { name, mail, phone } = doc.data();
      return {
        id: doc.id,
        mail,
        name,
        phone,
      };
    });
    return(usersData);
  } catch (error) {
    console.error("Error al obtener documentos:", error);
    return []
  }
};

export const addUserToFirestore = async (
  name,
  mail,
  phone,
) => {
  try {
    await addDoc(collection(db, "users"), {
      name: data.name,
      mail: data.mail,
      phone: data.phone,
    });
    console.log("Usuario registrado con éxito en Firestore.");
  } catch (error) {
    console.error("Error al registrar usuario en Firestore:", error);
    throw error;
  }
};
