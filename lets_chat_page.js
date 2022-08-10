//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyB0DtXwFpsjiRPLEVAuzAoH810C-Z4pfQk",
      authDomain: "letschat-4b42c.firebaseapp.com",
      databaseURL: "https://letschat-4b42c-default-rtdb.firebaseio.com",
      projectId: "letschat-4b42c",
      storageBucket: "letschat-4b42c.appspot.com",
      messagingSenderId: "582194368929",
      appId: "1:582194368929:web:53b61fa69ef89168303be0"
    };
    
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("Username");
room_name = localStorage.getItem("RoomName")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout()
{
      localStorage.removeItem("Username");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}

function send()
{
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
     });
}
