
const users = [
    {username: "user", password: "user1"}
]

function login (){
    users.forEach(user => {
        if (document.getElementById("username").value == user.username &&
        document.getElementById("password").value == user.password) {
            alert("login success");
            location.replace("file:///C:/Users/DCV/Desktop/Taschenrechner/calc.html")
        } else {
            alert("password/username problem")
        }   
    })
}