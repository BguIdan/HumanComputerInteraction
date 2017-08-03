// JavaScript Document
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

function switchToPage(page) {
	if(isIE || isEdge) { document.location.href = page.substring(5); }
	else { document.location.href = page; }
}