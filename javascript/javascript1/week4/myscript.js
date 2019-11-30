let todo = [];
let eventsInCalendar = [];
let todoLength = 0;
let favouriteDish = '';

function getReply(command) {
    let commandInWord = command.split(' ');
    let commandLength = commandInWord.length;
    //Hello my name is Benjamin
    if (commandInWord[0] == 'Hello') {
        let userName = commandInWord[commandLength-1];
        return (`nice to meet you ${userName}.`);
    //What is my name
    } else if (commandInWord[0] == 'What' && commandInWord[commandLength-1]=='name') {
        if (userName) {
            return (`My name is ${userName}`)
        } else {
            return (`you must enter your name!`)
        }
    //Add fishing to my todo
    } else if (commandInWord[0] == 'Add' && commandInWord[1]=='fishing'){
        todo[todoLength]='fishing'
        todoLength +=1;
        return(`fishing added to your todo`);
    //Add singing in the shower to my todo
    } else if (commandInWord[0] == 'Add' && commandInWord[1]=='singing') {
        todo[todoLength]='singing in the shower'
        todoLength +=1;
        return(`singing in the shower added to your todo`);
    //Remove fishing from my todo
    } else if (commandInWord[0] == 'Remove') {
        for (let i=0; todoLength; i++) {
            if (todo[i]=='fishing') {
                todo = todo.splice(i,1);
                todoLength -=1;
                return ('Removed fishing from your todo');
            }
        }
    //What is on my todo?
    } else if (commandInWord[0] == 'What' && commandInWord[commandLength-1]=='todo?') {
        let todoNumber = todo.length;
        return (`You have ${todoNumber} todos - ${todo.toString()}`);
    //What day is it today?
    } else if (commandInWord[0] == 'What' && commandInWord[commandLength-1]=='today?') {
        let date = new Date();
        let year = date.getFullYear();
        let day = date.getDate();
        let month = date.getMonth();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let stringMonth = months[month];
        return (`${day}. of ${stringMonth} ${year}`);
    //do simple math (what is 3 + 3)
    }  else if ( commandInWord[0] == 'What' && (commandInWord.includes('+') || commandInWord.includes('-') || commandInWord.includes('*') || commandInWord.includes('/'))) {
        let operator = commandInWord[3];
        let x = commandInWord[2];
        let y = commandInWord[4];
        let result = 0;
        x = parseFloat(x); 
        y = parseFloat(y);
        if (operator == '+') {
            result = x + y;
        } else if (operator == '-') {
            result = x - y;
        } else if (operator == '*') {
            result = x * y;
        } else if (operator == '/') {
            result = x / y;
        }
        return (result);
    //My favorite dish is lasagne
    } else if (commandInWord[0] == 'My') {
        favouriteDish = commandInWord[commandLength-1];
    //What is my favorite dish
    } else if (commandInWord[0] == 'What' && commandInWord[commandLength-1]=='dish') {
        return (favouriteDish);
    //Set a timer for 4 minutes    
    } else if (commandInWord[0] == 'Set') {
        let time = commandInWord[4];
        time = parseInt(time);
        let timeInMs = time * 60 * 1000; 
        setTimeout(myFunction, timeInMs);
        function myFunction() {
            console.log('Timer done');
        }
        return (`Timer set for ${time} minutes`);
    //Add Bike ride the 3/5/2019 to my calendar
    } else if (commandInWord[0] == 'Add' && commandInWord[commandLength-1]=='calendar') {
        let eventDate = commandInWord[4];
        let eventDate = eventDate.toString();
        let eventName = commandInWord[1];
        eventsInCalendar.push({ 'name': eventName, 'date': eventDate });
        return (`${eventName} added to your calendar`);
    }
}
console.log(getReply('Hello my name is Benjamin'));
console.log(getReply('What is my name?'));
console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?'));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 4.5 * 12?'));
console.log(getReply('My favorite dish is lasagne'));
console.log(getReply('What is my favorite dish'));
console.log(getReply('Set a timer for 4 minutes'));
console.log(getReply('Add Bike ride on 19/11/2019 to my calendar'));
console.log(getReply('What am I doing this week?'));
console.log(getReply('How are you feeling?'));