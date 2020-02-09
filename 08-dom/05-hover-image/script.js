/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
        var myimg=document.getElementsByTagName("img")[0];
        var newimg=myimg.getAttribute("data-hover")
        var oldimg=myimg.getAttribute("src")
        myimg.addEventListener("mouseover", onMouseOver)
        myimg.addEventListener("mouseout", onMouseOut)

        function onMouseOver() {

            myimg.setAttribute("src",newimg)

        }

        function onMouseOut() {

            myimg.setAttribute("src",oldimg)
        }

})();


