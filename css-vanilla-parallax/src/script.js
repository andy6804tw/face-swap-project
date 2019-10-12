// Design gimmicks, absolutely not necessary for the effect to work.
// Inserting button and nav with JS to not clutter the parallax structure.
var nav = document.createElement('nav'),
    par = document.querySelector('header')
nav.innerHTML = '<a href="#anchor1">Vanilla</a><a href="#anchor2">Pure</a><a href="#anchor3">CSS</a><a href="#anchor4">Parallax</a>'
par.insertBefore(nav, par.firstChild)
document.querySelector('header .contain').innerHTML += '<button>Praise this</button>'