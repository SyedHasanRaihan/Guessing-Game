'use strict';

let score = 20;
let secretNum =  Math.trunc(Math.random()*20)+1;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage( '🔞 No number!');
    }
    else if(guess===secretNum){
        displayMessage('🎉 Congrats!Correct guess!!!');

        document.querySelector('.number').textContent = secretNum;

        if(score>highscore){
            highscore = score;
        }

        document.querySelector('.highscore').textContent = highscore;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
    }
    else if(guess!==secretNum){
        if(score>1){
            displayMessage(guess>secretNum ? '📈 too high' : '📉 too low'); 
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage( '💥 Game over!');
            document.querySelector('.score').textContent = 0;
        }
    }
    });
    

document.querySelector('.again').addEventListener('click',function(){
    
    console.log('hello');
    score = 20;

    secretNum = Math.trunc(Math.random()*20)+1;

    displayMessage( 'Start guessing... ');

    document.querySelector('.number').textContent = '?';

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
});
// some cahnges