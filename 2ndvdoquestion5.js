let age = 17;
let ticketFee = 800;

if(age < 10){
    console.log("This Ticket is free for you");
}

else if(age<60){
    console.log("You got 50% discount:", ticketFee*50/100);
}
else if(age>=60){
    console.log("You got 15% discount:", ticketFee*15/100);
}

else{
    console.log("Regular Price:", ticketFee);
}