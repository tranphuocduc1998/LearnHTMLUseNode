/**
 * [Method]
 * document.getElementById('nameId')
 */
var nameId = document.getElementById('nameId');
nameId.style.fontStyle = 'italic';
nameId.style.color = '#d2691e';
nameId.style.fontSize = '20px';

/**
 * [Method]
 * document.getElementsByClassName('nameClass')
 */
var nameClass = document.getElementsByClassName('nameClass');
nameClass.item(1).style.fontStyle = "italic";
nameClass.item(1).style.color = "#d2691e";
nameClass.item(1).style.fontSize = "20px";

/**
 * [Method]
 * document.getElementsByClassName('nameClass')
 */
var nameTag = document.getElementsByTagName('p');
nameTag.item(1).style.fontStyle = "italic";
nameTag.item(1).style.color = "#d2691e";
nameTag.item(1).style.fontSize = "20px";

/**
 * [Method]
 * document.querySelector(name) Select item first
 * [name Id: #name]
 * [name Class : .name]
 */
var nameIdSelector = document.querySelector('#nameIdSelector');
nameIdSelector.style.color = 'red';
var nameClassSelector = document.querySelector('.nameClassSelector');
nameClassSelector.style.color = 'Grey';

nameIdSelector.style.fontStyle = nameClassSelector.style.fontStyle = 'italic';
nameIdSelector.style.fontSize = nameClassSelector.style.fontSize = '20px';

/**
 * [Method]
 * document.nameIdSelectorAll(name) select all items
 * [name Id: #name]
 * [name Class : .name]
 */
var nameIdSelectorAll = document.querySelectorAll('#nameIdSelectorAll');
nameIdSelectorAll.item(1).style.color = 'red';
nameIdSelectorAll.item(1).style.fontStyle = 'italic';
nameIdSelectorAll.item(1).style.fontSize = '20px';