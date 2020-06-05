function wearWhat(degree) {
    if (degree<-30) {
        return "You will be die anyway!";
    }else if (-30<degree<=0) {
        return "You must to wear winter jacket";
    }else if (0<degree<=10) {
        return "You must to wear normal jacket";
    }else if (10<degree<=30) {
        return "You must to wear pants";
    }else if (30<degree) {
        return "You must to wear shorts";
    }
}
alert(wearWhat(20));