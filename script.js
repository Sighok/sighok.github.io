
function setHenviser(){
	// Reset all inputs
    document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
    document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
    document.querySelectorAll('textarea').forEach(el => el.value = "");
    setDisplays()
    // Manage displayed content according to "henviser" selection
	var idSelection = document.getElementById("selectHenviser");
	var classAlmen = document.getElementsByClassName("almen");
	var classSpecial = document.getElementsByClassName("special");
	var classShared = document.getElementsByClassName("shared");
	var classShowIf = document.getElementsByClassName("showIf");
    
	var dispStateAlmen = "none";
	var dispStateSpecial = "none";
	var dispStateShared = "none";
    var i;
    for (i = 0; i < classShowIf.length; i++) {
    	classShowIf[i].style.display= "none";
    }

	if(idSelection.value == "intet"){
		dispStateAlmen = "none";
		dispStateSpecial = "none";
		dispStateShared = "none";
	}

	if(idSelection.value == "almen"){
		dispStateAlmen = "block";
		dispStateSpecial = "none";
		dispStateShared = "block";
	}

	if(idSelection.value == "special"){	
		dispStateAlmen = "none";
		dispStateSpecial = "block";
		dispStateShared = "block";
	}

    var i;
    for (i = 0; i < classAlmen.length; i++) {
    	classAlmen[i].style.display = dispStateAlmen;
    } 
    var i;
    for (i = 0; i < classSpecial.length; i++) {
    	classSpecial[i].style.display = dispStateSpecial;
    } 
    var i;
    for (i = 0; i < classShared.length; i++) {
    	classShared[i].style.display = dispStateShared;
    } 	
}

function setDisplays(){
	// checkboxes
	if (checkboxKarpal.checked == true){
		rowKarpal.style.display = "block";
	} 
	else {
		rowKarpal.style.display = "none";
	}

	if (checkboxEmg.checked == true){
		rowEmg.style.display = "block";
	} 
	else {
		rowEmg.style.display = "none";
	}

	if (checkboxØjen.checked == true){
		rowØjen.style.display = "block";
	} 
	else {
		rowØjen.style.display = "none";
	}

	if (checkboxAndet.checked == true){
		rowAndet.style.display = "block";
	} 
	else {
		rowAndet.style.display = "none";
	}

	// radios 
	if (radioAk1.checked == true){
		textareaAk.style.display = "block";
	} 
	else {
		textareaAk.style.display = "none";
	}

	if (radioSærlige1.checked == true){
		textareaSærlige.style.display = "block";
	} 
	else {
		textareaSærlige.style.display = "none";
	}

	if (radioAkut1.checked == true){
		textareaAkut.style.display = "block";
	} 
	else {
		textareaAkut.style.display = "none";
	}

	if (radioTolk1.checked == true){
		textareaTolk.style.display = "block";
	} 
	else {
		textareaTolk.style.display = "none";
	}

	if (radioAndre1.checked == true){
		textareaAndre.style.display = "block";
	} 
	else {
		textareaAndre.style.display = "none";
	}

	// mep/meg checkboxes
	var classMepMeg = document.getElementsByClassName("mep_meg");
	var classMep = document.getElementsByClassName("mep");
	var classMeg = document.getElementsByClassName("meg");
	var dispStateMepMeg = "none";
	var dispStateMep = "none";
	var dispStateMeg = "none";
	
	if(checkboxMep.checked == true && checkboxMeg.checked == true){
		dispStateMepMeg = "block";
		dispStateMep = "block";
		dispStateMeg = "block";	
    }
	if(checkboxMep.checked == true && checkboxMeg.checked == false){
		dispStateMepMeg = "block";
		dispStateMep = "block";
		dispStateMeg = "none";				 			
	}
	if(checkboxMep.checked == false && checkboxMeg.checked == true){
		dispStateMepMeg = "block";
		dispStateMep = "none";
		dispStateMeg = "block";				 			
	} 
	if(checkboxMep.checked == false && checkboxMeg.checked == false) {
		dispStateMepMeg = "none";
		dispStateMep = "none";
		dispStateMeg = "none";			
	}

    var i;
    for (i = 0; i < classMepMeg.length; i++) {
    	classMepMeg[i].style.display= dispStateMepMeg;
    } 
    var i;
    for (i = 0; i < classMep.length; i++) {
    	classMep[i].style.display= dispStateMep;
    } 
    var i;
    for (i = 0; i < classMeg.length; i++) {
    	classMeg[i].style.display= dispStateMeg;
    } 	
}

function returnIfChecked(e, text) {
	if ( document.getElementById(e).checked == true ) {
		return "<br/>"+text;
	} else {
		return '';
	} 
}

function returnIfSet(e, text) {
	if ( e.value.length > 0 ) {
		return "<br/>"+text;
	} else {
		return '';
	}
}



function  generateResult() {
	var lb = "<br/>";
	var tab = "&nbsp &nbsp";
	var idKarpal = document.getElementById("selectKarpal")
	var textKarpal = idKarpal.options[idKarpal.selectedIndex].text;	

	var textOut = 
	"Diagnostisk spørgsmål, der ønskes besvaret:"
	+returnIfSet(textareaDiagnostisk, textareaDiagnostisk.value)
	+lb
	+lb+"Ønskede undersøgelser:"
	+tab+returnIfChecked("checkboxKarpal", "Karpaltunnel, "+"["+textKarpal+"]")+returnIfChecked("checkboxEeg", "EEG")+returnIfChecked("checkboxEmg", "EMG")+returnIfChecked("checkboxVep", "VEP")+returnIfChecked("checkboxSep", "SEP")+returnIfChecked("checkboxMep", "MEP")+returnIfChecked("checkboxMeg", "MEG")+returnIfChecked("checkboxSøvn", "søvn")+returnIfChecked("checkboxØjen", "Øjen")+returnIfChecked("checkboxIom", "IOM")+returnIfChecked("checkboxAndet", "Andet")
	+lb
	+lb+"Særlige behov? "+returnIfChecked("radioSærlige1", "Ja, "+textareaSærlige.value)+returnIfChecked("radioSærlige2", "Nej")
	+lb
	+lb+"Anamnese og objektive fund:"
	+returnIfSet(textareaAnamnese, textareaAnamnese.value)
	+lb+lb



	// +lb+"Akut/fast-track? "+returnIfChecked("radioAkut1", "Ja")+returnIfChecked("radioAkut2", "Nej")+returnIfChecked("radioAkut1", textareaAkut.value)
	// +lb+"Behov for tolk? "+returnIfChecked("radioTolk1", "Ja")+returnIfChecked("radioTolk2", "Nej")+returnIfChecked("radioTolk1", textareaTolk.value)
	// +lb+"Andre særlige forhold? "+returnIfChecked("radioAndre1", "Ja")+returnIfChecked("radioAndre2", "Nej")+returnIfChecked("radioAndre1", textareaAndre.value)      
	;

	document.getElementById("textResult").innerHTML = textOut;
	selectElementContents(document.getElementById("textResult"));
}

function selectElementContents(e) {
	var doc = document
	, text = e
	, range, selection
	;    
	if (doc.body.createTextRange) { //ms
		range = doc.body.createTextRange();
		range.moveToElementText(text);
		range.select();
	} 
	else if (window.getSelection) { //all others
		selection = window.getSelection();        
		range = doc.createRange();
		range.selectNodeContents(text);
		selection.removeAllRanges();
		selection.addRange(range);
	}
}

// function showIfChecked(box, e){
// 	var checkBox = document.getElementById(box);
// 	var element = document.getElementById(e);
// 	if (checkBox.checked == true){
// 		element.style.display = "block";
// 	} 
// 	else {
// 		element.style.display = "none";
// 	}
// }

// function displayElement(id) {
// 	var element = document.getElementById(id);
// 	element.style.display = "block";
// }

// function hideElement(id) {
// 	var element = document.getElementById(id);
// 	element.style.display = "none";
// }