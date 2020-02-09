/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    let mountains = [
        { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
        { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
        { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
        { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
        { name: "Monte Amiata", height: 1738, place: "Siena" }
      ];
      function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      }
      function generateTable(table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      }
      let table = document.getElementById("target");
      let data = Object.keys(mountains[0]);
      generateTableHead(table, data);
      generateTable(table, mountains);
})();
