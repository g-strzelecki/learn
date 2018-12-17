/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// ZDARZENIE ONSCROLL

window.onload = function()
{
    var toTopButton = document.getElementById("toTopButton")
    
    window.onscroll = function()
    {
        var test = document.getElementById("test");
        var toTopButton = document.getElementById("toTopButton");
        
        var yScrollAxis = window.pageYOffset;
                
        if (yScrollAxis > 300)
            toTopButton.style.display = "block";
        else
            toTopButton.style.display = "none";
        test.innerHTML = yScrollAxis;
    }
      
       
    toTopButton.onclick = function()
    {
        window.scrollBy(0, -1 * window.pageYOffset)
    };
}




// OBIEKT ARGUMENTS
/*
function addNumbers()
{
    var suma = 0;

    for (i = 0; i < arguments.length; i++)  //rozwiązanie z użyciem pętli for
    {
        suma += arguments[i];
    }



for (var property in arguments) //rozwiązanie z użyciem pętli for in
{
   suma += arguments[property];
}
    return suma;
}

var suma = addNumbers(3, 4, 7, 6, 8);

alert(suma);
*/





/* // TABLICZKA MNOŻENIA

var rezultat = document.getElementById('rezultat');

var tabMnozenia = "<table>" ;

for (var i = 1; i <= 10; i++)
{
    tabMnozenia += "<tr>";
    
    for (var j = 1; j <= 10; j++)
    {
        tabMnozenia += "<td>" + i * j + "</td>";
    }
    
    tabMnozenia += "</tr>";
}

tabMnozenia += "</table>"

rezultat.innerHTML = tabMnozenia;

//rezultat.innerHTML = "sraj sie";
*/




/* // FUNKCJA MNOŻENIA
 * 
function Mnozenie(x,y)
{

    var wynik;
    var rodzajWyniku;
    
    rodzajWyniku = typeof(x + y);
    
    if (rodzajWyniku === 'number')
    {
        wynik = x * y;
        return alert(wynik);
    }
    else
        return alert("Podaj poprawne parametry");
}    


var a = 4;
var b = 5;

Mnozenie(a,b);
*/


