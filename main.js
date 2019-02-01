// main.js: This code starts to run after the HTML page is loaded, because of defer attribute in script tag.  
let boardGames = ['Diplomacy', 'Chess', 'Ticket to Ride', 'Shuffleboard', 'Monopoly', 'Risk'];  
let rev = boardGames.reverse();
// Update the title with the total number of games from our array length  
document.getElementById('ListTitle').textContent = "Jamin's " + boardGames.length + " Board Games - in reverse!"  

// Retrieve the ordered list element (ol) so we can add list items (li)
let listParent = document.querySelector('.TopTen');  

boardGames.forEach((game) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(game));
    console.log(li);
    li.className = 'Game-Item';
    listParent.appendChild(li); 
});  
