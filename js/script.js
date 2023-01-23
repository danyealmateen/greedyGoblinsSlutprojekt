// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuOHm2QYDm0vAZ0851gcyNoRXaGLDq4uU",
  authDomain: "slutprojekt-versionshant-178fa.firebaseapp.com",
  databaseURL: "https://slutprojekt-versionshant-178fa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "slutprojekt-versionshant-178fa",
  storageBucket: "slutprojekt-versionshant-178fa.appspot.com",
  messagingSenderId: "366280612570",
  appId: "1:366280612570:web:f3bf7376ce3120a6b1e3e3",
  measurementId: "G-H52F2QQWM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase();










// skriva
function writeUserData(message) {
    let adressRef= ref(database, "Eleonora/barn1" );
    set(adressRef, {
        message: message,
        username: "EL",
        lista:[888,2,3,4],
    });
}

writeUserData( "SUPP DOG!!!");











// läsa en specifik onValue direkt + när den ändrar value
const urlRef = ref(database, "Eleonora/barn1");
onValue(urlRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data.lista);
    document.body.innerHTML = data.lista[1];
});









const urlRootRef = ref(database, "/Eleonora");
//läsa childs i root.
console.warn("LOOP and children!!")
onValue(
    urlRootRef,
    (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log(childKey);
            console.log(childData.message);
        });
    }/* ,
    {
        onlyOnce: true,  // engång
    } */
);






//radera stuff.
const deleteRef = ref(database, "/filip/username");
remove(deleteRef).then(() => {
    console.log("location removed");
});








// kolla om det supportas i olika webb läsare
if (typeof(Storage) !== "undefined") {
    // läsa från user pref
    console.log( localStorage.getItem("name"))
    console.log( localStorage.getItem("lastLoggin"))

    //skriva i user pref
    //localStorage.setItem("name", "Alrik");
   // localStorage.setItem("lastLoggin","today!!");
}



