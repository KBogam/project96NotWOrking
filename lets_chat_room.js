
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("username").innerHTML = "Welcome " + user_name + "!"; 

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
          purpose: "Adding Room Name"
        });

        localStorage.setItem("RoomName" , room_name);

        window.location= "lets_chat_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
          console.log("Room Name - " + Room_names);

          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
          
          document.getElementById("output").innerHTML += row;



      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);

  localStorage.setItem("RoomName" , name);

  window.location = "lets_chat_page.html";
}


function logout()
{
      localStorage.removeItem("Username");
      localStorage.removeItem("RoomName");

      window.location = "index.html";
}



