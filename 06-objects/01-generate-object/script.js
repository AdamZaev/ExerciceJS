

/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",()=>{

         person = {
            firstName : "Adam",
            lastName  : "Betmurzaev",
            age     : 20,
            city : "La Louviere",
            country: "Belgium"
          };
         
          console.log("My name is",person.firstName, "", person.lastName,"I am",person.age,"years old", "I live in",person.city,"in",person.country)

        })
    
})();
