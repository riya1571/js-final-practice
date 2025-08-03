let score = 88;
let friendScore = 79;

if(score>80){

    if(friendScore>80)
    {
        console.log("Go for a lunch.");
    }

    else if(friendScore >= 60){
        console.log("Good Luck next time.");

    }

    else if(friendScore>=40){
        console.log("Keep your friend message unseen.");
    }
    else if(friendScore<40){
        console.log("Block your friend.");
    }

}

else if(score<80){
    console.log("Go to home and sleep and act sad");
}