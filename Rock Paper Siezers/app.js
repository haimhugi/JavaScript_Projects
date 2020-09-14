
const game = ()=>{
    let pScore = 0;
    let cScore = 0;
    //Start the game
    const startGame =() => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const restart = document.querySelector('.restart-game');
        const restartBtn = document.querySelector('.restart-game button');
        

      
       

        
        restartBtn.addEventListener('click', ()=>{

            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');
            const winner = document.querySelector('.winner');

            restart.classList.remove('fadeIn');
            match.classList.remove('fadeOut');
            match.classList.add('fadeIn');
            playerScore.textContent =0;
            pScore=0;
            computerScore.textContent=0;
            cScore=0;

            winner.textContent = 'תבחר אופציה';
        });

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
        };
        //Play match
        const playMatch = ()=>{
            const options = document.querySelectorAll('.options button');
            const playerHand = document.querySelector('.player-hand');
            const computerHand = document.querySelector('.computer-hand');
            const hands =document.querySelectorAll('.hands img');

            hands.forEach(hand =>{
                hand.addEventListener('animationend',function(){
                    this.style.animation= "";
                })
            })

            //Computer options
            const computerOptions = ['אבן','נייר','מספריים'];

            options.forEach(option =>{
                option.addEventListener('click' ,function(){
                    const computrtNumber = Math.floor(Math.random()*3);
                    const computerChoise = computerOptions[computrtNumber];
                    setTimeout(()=>{
                    //Here is ehere we call compare hands
                    compareHands(this.textContent,computerChoise);
                 
                    //update images
                    if(this.textContent === 'אבן')  playerHand.src = `./assets/rock.png`;    
                    if(this.textContent === 'נייר') playerHand.src = `./assets/paper.png`;    
                    if(this.textContent === 'מספריים') playerHand.src = `./assets/scissors.png`;    

                    if(computerChoise === 'אבן')  computerHand.src = `./assets/rock.png`;    
                    if(computerChoise === 'נייר') computerHand.src = `./assets/paper.png`;    
                    if(computerChoise === 'מספריים') computerHand.src = `./assets/scissors.png`;    
                    } ,2000)

                    //anamation
                    playerHand.style.animation = "shakePlayer 2s ease";
                    computerHand.style.animation = "shakeComputer 2s ease";

                    playerHand.src = `./assets/rock.png`;
                    computerHand.src = `./assets/rock.png`;
                   
                });
            });
        };

        const chekWinner = ()=>{
               //chekWinner
               const playerN = document.querySelector('.Player-name');
               const computerN = document.querySelector('.Computer-name');

               if(pScore >= 3)
               {
                   restGame(playerN);
               }
               if(cScore >= 3)
               {
                   restGame(computerN);
               }
        }
        const restGame = (name)=>{

            const match = document.querySelector('.match');
            const restart = document.querySelector('.restart-game');
            const winnerText = document.querySelector('.winnerText');

            
            match.classList.remove('fadeIn');
            match.classList.add('fadeOut');
            restart.classList.add('fadeIn');
            winnerText.textContent = ` המנצח הוא: ${name.textContent}`;
        }

        const updateScore = ()=>{
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');
            playerScore.textContent = pScore;
            computerScore.textContent =cScore;
        }

        const compareHands = (playerChoise,computerChoise)=>{
            //update rext
            const winner = document.querySelector('.winner');
            //checking for tie
            if(playerChoise === computerChoise)
            {
                winner.textContent = 'תיקו ';
                chekWinner();
                return;
            }
            //check for rock
            if(playerChoise === 'אבן')
            {
                if(computerChoise === 'מספריים')
                {
                    winner.textContent = 'ניצחת, יפה';
                    pScore++;
                    updateScore();
                    chekWinner();
                    return;
                }
                else{
                    winner.textContent = 'המחשב ניצח';
                    cScore++;
                    updateScore();
                    chekWinner();
                    return;
                }
            }
            if(playerChoise === 'נייר')
            {
                if(computerChoise === 'מספריים')
                {
                    winner.textContent = 'המחשב ניצח';
                    cScore++;
                    updateScore();
                    chekWinner();
                    return;
                }
                else{
                    winner.textContent = 'ניצחת, יפה'
                    pScore++;
                    updateScore();
                    chekWinner();
                    return;
                }
            }
            if(playerChoise === 'מספריים')
            {
                if(computerChoise === 'אבן')
                {
                    winner.textContent = 'המחשב ניצח';
                    cScore++;
                    updateScore();
                    chekWinner();
                    return;
                }
                else{
                    winner.textContent = 'ניצחת, יפה';
                    pScore++;
                    updateScore();
                    chekWinner();
                    return;
                }
            }
            

        }



        //Is call all the inner function
        startGame();
        playMatch();
        
};
//start the game function

game();

