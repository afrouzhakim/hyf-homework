function getEventWeekday(commingevent) {
    let day = new Date();
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let index=day.getDay();
    let today = weekDays[index];
    let reminder = commingevent % 7;
    console.log("Today is "+today+" and event will be on "+weekDays[index + reminder-1]);
}
getEventWeekday(9);