function wearWhat(degree) {
    if (degree<-30) {
        console.log("You will be die anyway!");
    }else if (-30<degree<=0) {
        console.log("You must to wear winter jacket");
    }else if (0<degree<=10) {
        console.log("You must to wear normal jacket");
    }else if (10<degree<=30) {
        console.log("You must to wear pants");
    }else if (30<degree) {
        console.log("You must to wear shorts");
    }
}
wearWhat(20);