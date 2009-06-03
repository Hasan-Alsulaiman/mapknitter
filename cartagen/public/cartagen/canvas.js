// canvas.js
//
// Copyright (C) 2009 Jeffrey Warren, Design Ecology, MIT Media Lab
//
// This file is part of the Cartagen mapping framework. Read more at
// <http://cartagen.org>
//
// Cartagen is free software: you can redistribute it and/or modify
// it under the terms of the MIT License. You should have received a copy 
// of the MIT License along with Cartagen.  If not, see
// <http://www.opensource.org/licenses/mit-license.php>.
//

// Wrapped native canvas methods in shorter, simpler method names:
function clear() {
	canvas.clearRect(0,0,width,height)
}
function fillStyle(color) {
	canvas.fillStyle = color
}
function translate(x,y) {
	canvas.translate(x,y)
}
function scale(x,y) {
	canvas.scale(x,y)
}
function rotate(rotation) {
	canvas.rotate(rotation)
}
function rect(x,y,w,h) {
	canvas.fillRect(x,y,w,h)
}
function strokeRect(x,y,w,h) {
	canvas.strokeRect(x,y,w,h)
}
function strokeStyle(color) {
	canvas.strokeStyle = color
}
function lineWidth(lineWidth) {
	if (parseInt(lineWidth) == 0) canvas.lineWidth = 0.0000000001
	else canvas.lineWidth = lineWidth	
}
function beginPath() {
	canvas.beginPath()
}
function moveTo(x,y) {
	canvas.moveTo(x,y)
}
function lineTo(x,y) {
	canvas.lineTo(x,y)
}
function quadraticCurveTo(x,y,x1,y1) {
	canvas.quadraticCurveTo(x,y,x1,y1)
}
function stroke() {
	canvas.stroke()
}
function fill() {
	canvas.fill()
}
function arc(x,y,radius,startAngle,endAngle,clockwise) {
	canvas.arc(x,y,radius,startAngle,endAngle,clockwise)
}
function drawText(font,size,x,y,text) {
	canvas.drawText(font,size,x,y,text)
}
function drawTextCenter(font,size,x,y,text) {
	canvas.drawTextCenter(font,size,x,y,text)
}