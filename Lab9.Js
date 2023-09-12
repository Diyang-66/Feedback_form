const username = document.getElementById('username')
const comment = document.getElementById('comment')
const form = document.getElementById('form')

function validate(){
    if(username.value == "") return alert("Enter the username");
    if(comment.value == "") return alert("enter the comment")

    sessionStorage.setItem('username',username.value);
    sessionStorage.setItem('comment',comment.value)
        
    let content = `Username   ${username.value} \xa0\xa0\xa0\xa0\xa0\xa0\xa0         Comment              ${comment.value}`;
    document.getElementById("display").innerHTML= content

}

function alter(){
    let username = prompt("Enter new username ")

    let comment = prompt("Enter new comment")
    if(username || comment !== ""){
        sessionStorage.setItem("username",username);
        sessionStorage.setItem("comment",comment);
        document.getElementById("display").innerHTML= ` Username ${username} \xa0\xa0\xa0\xa0\xa0\xa0\xa0  comment ${comment}`;
    }
    else{
        alert("Please fill all the fields")
    }
    
}

function remove(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("comment");
    document.getElementById("display").innerHTML= "Elements removed succesfully"

}

