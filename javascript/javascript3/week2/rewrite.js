/* I really think I don't understand this exercise but try to 
find a way by looking at the codes we wrote before and get some idea from my classmates 
that what should I do, but still I think I did it
without exactly know what I did!
anyway, I dont have some questions to ask about that and I think just need to practice more
*/
function setTimeoutPromise(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds*1000);
    })
}
setTimeoutPromise(3)
    .then(() => {
        console.log('Called after 3 seconds');
    });

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position);
        }, noPosition => {
            reject(noPosition);
        })
    })
}
    
getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });