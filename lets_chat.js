function login()
{
    username = document.getElementById("username").value;
    localStorage.setItem("Username" , username);
    window.location="lets_chat_room.html";
}