/*var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;
console.log(showInnerText);

var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTML;
firstItem.innerHTML = '<a href=https://www.w3schools.com/>' + itemContent + '</a>';

var msg = '<p>textContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInnerText + '</p>';
    var el = document.getElementById('scriptResults');
    el.innerHTMl = msg;

var firstItem = document.getEelementById('one');
var itemContent = firstItem.innerHTML;
firstItem.innerHTML = '<a href=https://www.w3schools.com/>' + itemContent + '</a>';

firstItem.textContent = 'sourdough bread';

var newEl = document.createElement('i');
var newText = document.createTextNode('emoji movie');
newEl.appendChild(newText);
var position = document.getElementsByTagName('ul')[0];
position.appendChild(newEl);

var removeEl = document.getElementsByTagName('li')[5];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);


var firstItem = document.getElementsById('one');
if (firstItem.hasAttribute('class')); {
    firstItem.removeAttribute('class');
var el = document.getElementById('scriptResults');
el.innerHTML = '<p>The first item has a class name: ' + Attr + '</p>';
}*/

var firstItem = document.getElementById('one');
firstItem.className = 'cold';

var fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class', 'warm');