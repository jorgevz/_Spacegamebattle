let user = window.prompt('Enter your name, ready to start ?', 'John Smith' ); {
  console.log("Hello " + user + "! Welcome to spacebattle, here are the rules to the game, you must first attack any of the alienships by clicking any of the 1st round for them, after that you must attack the USS schwazernneger and then you have the option to attack the same alienship again for the 2nd round and destroy it or click for a first round with another one. You should only click for a second round once you have already hit the alienship for a first round. If you destroy all alienships you win otherwise you will lose either if you don't or if you retreat. You can click on any alienship name on the red box to see the features of each ship and to see which one may be a better option to attack next or first. Goodluck. ");
}

let hull = 20
let firepower = 5
let accuracy = 0.7



function ussmsg(btnuss){
alert('USS Schwarzenegger' + ' hull: ' + hull 
+ ' firepower: ' + firepower + ' accuracy: ' + accuracy  )
}



function attackuss(attauss){
  let hit1 = [arr2,arr5,arr8,arr11,arr14,arr17]
  let randomhit = hit1[Math.floor(Math.random() * hit1.length)];
  let hit2 = hull-randomhit
  console.log('Hull left: ' + hit2 )
  }


///////
let hull1 = [6,7,8]
let firepower1 = [2,3,4]
let accuracy1 = [0.6,0.7,0.8]

let arr1 = hull1[Math.floor(Math.random() * hull1.length)];
let arr2 = firepower1[Math.floor(Math.random() * firepower1.length)];
let arr3 = accuracy1[Math.floor(Math.random() * accuracy1.length)];


  function showMessage1(btnaa){          
        alert('alienship 1-' + ' hull: ' + arr1 
        + ' firepower: ' + arr2 + ' accuracy: ' + arr3)} 
       
        
        let res1 = arr1-firepower
      let final = 0

function attackaliens1() {
  if (res1 >= 1){
  console.log("alienship #1- Hull remaining: "+ res1 +" you have " + res1 + " hulls remaining to destroy the alienship")
  alert('Now you must click on Attack USS')
  } 
}

function attackaliens2(){
console.log(' Hull: ' + final + ' congrats you have destroyed the ship #1')
}
  

///////
          
let hull2 = [6,7,8]
let firepower2 = [2,3,4]
let accuracy2 = [0.6,0.7,0.8]

let arr4 = hull2[Math.floor(Math.random() * hull2.length)];
let arr5 = firepower2[Math.floor(Math.random() * firepower2.length)];
let arr6 = accuracy2[Math.floor(Math.random() * accuracy2.length)];


  function showMessage2(btnab){          
        alert('alienship 2-' + ' hull: ' + arr4 
        + ' firepower: ' + arr5 + ' accuracy: ' + arr6)} 
       
        let res2 = arr4-firepower
        let final1 = 0
      
      function attackaliens3() {
        if (res2 >= 1){
        console.log("alienship #1- Hull remaining: "+ res2 +" you have " + res2 + " hulls remaining to destroy the alienship")
        alert('Now you must click on Attack USS')
        } 
      }
      
      function attackaliens4(){
      console.log(' Hull: ' + final1 + ' congrats you have destroyed the ship #2')
      }
        

////////
  
        let hull3 = [6,7,8]
        let firepower3 = [2,3,4]
        let accuracy3 = [0.6,0.7,0.8]
        
        let arr7 = hull3[Math.floor(Math.random() * hull3.length)];
        let arr8 = firepower3[Math.floor(Math.random() * firepower3.length)];
        let arr9 = accuracy3[Math.floor(Math.random() * accuracy3.length)];
        
        
          function showMessage3(btnac){          
                alert('alienship 3-' + ' hull: ' + arr7 
                + ' firepower: ' + arr8 + ' accuracy: ' + arr9)} 

                let res3 = arr7-firepower
                let final2 = 0
              
              function attackaliens5() {
                if (res3 >= 1){
                console.log("alienship #1- Hull remaining: "+ res3 +" you have " + res3 + " hulls remaining to destroy the alienship")
                alert('Now you must click on Attack USS')
                } 
              }
              
              function attackaliens6(){
              console.log(' Hull: ' + final2 + ' congrats you have destroyed the ship #3')
              }

              
///////
                let hull4 = [6,7,8]
                let firepower4 = [2,3,4]
                let accuracy4 = [0.6,0.7,0.8]
                
                var arr10 = hull4[Math.floor(Math.random() * hull4.length)];
                let arr11 = firepower4[Math.floor(Math.random() * firepower4.length)];
                let arr12 = accuracy4[Math.floor(Math.random() * accuracy4.length)];
                
                
                  function showMessage4(btnad){          
                        alert('alienship 4-' + ' hull: ' + arr10 
                        + ' firepower: ' + arr11 + ' accuracy: ' + arr12)} 
                        
                        let res4 = arr10-firepower
                      let final3 = 0
                        

              function attackaliens7() {
                if (res4 >= 1){
                console.log("alienship #1- Hull remaining: "+ res4 +" you have " + res4 + " hulls remaining to destroy the alienship")
                alert('Now you must click on Attack USS')
                } 
              }
              
              function attackaliens8(){
              console.log(' Hull: ' + final3 + ' congrats you have destroyed the ship #4')
              }
 ///////               
  
                        let hull5 = [6,7,8]
                        let firepower5 = [2,3,4]
                        let accuracy5 = [0.6,0.7,0.8]
                        
                        var arr13 = hull5[Math.floor(Math.random() * hull5.length)];
                        let arr14 = firepower5[Math.floor(Math.random() * firepower5.length)];
                        let arr15 = accuracy5[Math.floor(Math.random() * accuracy5.length)];
                        
                        
                          function showMessage5(btnae){          
                                alert('alienship 5-' + ' hull: ' + arr13 
                                + ' firepower: ' + arr14 + ' accuracy: ' + arr15)} 

                                let res5 = arr13-firepower
                              let final4 = 0
              
              function attackaliens9() {
                if (res5 >= 1){
                console.log("alienship #1- Hull remaining: "+ res5 +" you have " + res5 + " hulls remaining to destroy the alienship")
                alert('Now you must click on Attack USS')
                } 
              }
              
              function attackaliens10(){
              console.log(' Hull: ' + final4 + ' congrats you have destroyed the ship #5')
              }
////////
  
                                let hull6 = [6,7,8]
                                let firepower6 = [2,3,4]
                                let accuracy6 = [0.6,0.7,0.8]
                                
                                var arr16 = hull6[Math.floor(Math.random() * hull6.length)];
                                let arr17 = firepower6[Math.floor(Math.random() * firepower6.length)];
                                let arr18 = accuracy6[Math.floor(Math.random() * accuracy6.length)];
                                
                                
                                  function showMessage6(btnaf){          
                                        alert('alienship 6-' + ' hull: ' + arr16 
                                        + ' firepower: ' + arr17 + ' accuracy: ' + arr18)} 

                                        let res6 = arr16-firepower
                                        let final5 = 0
              
              function attackaliens11() {
                if (res6 >= 1){
                console.log("alienship #1- Hull remaining: "+ res6 +" you have " + res6 + " hulls remaining to destroy the alienship")
                alert('Now you must click on Attack USS')
                } 
              }
              
              function attackaliens12(){
              console.log(' Hull: ' + final5 + ' congrats you have destroyed the ship #6')
              }
              
              

              if (winarr <= 0) {
               alert('USS SHCZ has won, congrats')
               console.log('Victory !')
              }

              let winarr = [arr1,arr4,arr7,arr10,arr13,arr16]

function retreat(){
 alert('GAME OVER,REFRESH THE PAGE')
 console.log('GAME OVER')
}
