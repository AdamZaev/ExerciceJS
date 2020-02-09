/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click",()=>{
       const numbers = [
        document.getElementById("n-1").innerHTML = 
        Math.floor(Math.random() * 100),

        document.getElementById("n-2").innerHTML = 
        Math.floor(Math.random() * 100),
        document.getElementById("n-3").innerHTML = 
        Math.floor(Math.random() * 100),
        document.getElementById("n-4").innerHTML = 
        Math.floor(Math.random() * 100),
        document.getElementById("n-5").innerHTML = 
        Math.floor(Math.random() * 100),
        document.getElementById("n-6").innerHTML = 
        Math.floor(Math.random() * 100),
        document.getElementById("n-7").innerHTML = 
        Math.floor(Math.random() * 100),
        document.getElementById("n-8").innerHTML = 
        Math.floor(Math.random() * 100),
        document.getElementById("n-9").innerHTML = 
        Math.floor(Math.random() * 100),
        document.getElementById("n-10").innerHTML = 
        Math.floor(Math.random() * 100),
       ]
      
       numbers.forEach(element => {
        function getSum(total, num) {
            return total + Math.round(num);
          }
          function myFunction(item) {
            document.getElementById("sum").innerHTML = numbers.reduce(getSum, 0);
          } 
          
       });



        
    })
    
    

})();
