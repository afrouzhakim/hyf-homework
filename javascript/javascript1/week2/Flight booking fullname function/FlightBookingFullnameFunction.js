function getFullname() {
    var fullname1;
    var fullname2;
    var checkBox = document.getElementById("user-check");
    var firstname= document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    if (checkBox.checked == true){
        if (!firstname && lastname) {
            alert("Please enter your name");
        } else if (!firstname && !lastname) {
            alert("Please enter your name and your surname");
        } else if (firstname && !lastname) {
            alert("Please enter your surname");
        } else {
           fullname1 = firstname+" "+lastname;
           alert("Full name : Lord " + fullname1);
        }
        
    } else {
        if (!firstname && lastname) {
            alert("Please enter your name");
        } else if (!firstname && !lastname) {
            alert("Please enter your name and your surname");
        } else if (firstname && !lastname) {
            alert("Please enter your surname");
        } else {
           fullname2 = firstname+" "+lastname;
           alert("Full name : " + fullname2);
        }
    }
}

function get(a) {
    alert(a);
}