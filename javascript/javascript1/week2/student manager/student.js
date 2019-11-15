const class07Students = [];
function addStudentToClass(studentName) {
    var nameCheck=false;
        for(var i=0; i<class07Students.length; i++) {
            if (class07Students[i]===studentName) {
                nameCheck=true;
            }
        }
    var emptyName = false;
    if (!studentName) {
        emptyName=true;
    }
    if (emptyName==true) {
        console.log("Cannot add emptyname to class 07.");
    }else if  (class07Students.length > 6) {
        if (studentName === "Queen") {
            class07Students.push(studentName);
        } else {
            console.log("Cannot add more students to class 07.");
        }
    } else if (nameCheck==false) {
        class07Students.push(studentName);
    }else if (nameCheck==true){
        console.log(`Student ${studentName} is already in the class`);
    }
}  
function getNumberOfStudents() {
   let noOfStudents =  class07Students.length;
   console.log(noOfStudents);
    
}
addStudentToClass("a");
addStudentToClass("b");
getNumberOfStudents();