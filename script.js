
function setHenviser(){
	// Reset all inputs
	document.querySelectorAll('input[type="checkbox"]').forEach(el => el.checked = false);
	document.querySelectorAll('input[type="radio"]').forEach(el => el.checked = false);
	document.querySelectorAll('textarea').forEach(el => el.value = "");
	textResult.innerHTML = "Oplægget vises her";
	setDisplays()
    // Manage displayed content according to "henviser" selection
	// var selectHenviser = document.getElementById("selectHenviser");
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
	if (selectHenviser.value == "intet"){
		dispStateAlmen = "none";
		dispStateSpecial = "none";
		dispStateShared = "none";
	}
	if (selectHenviser.value == "almen"){
		dispStateAlmen = "block";
		dispStateSpecial = "none";
		dispStateShared = "block";
	}
	if (selectHenviser.value == "special"){	
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
	if (document.getElementById(e).checked == true ) {
		return text;
	} else {
		return '';
	} 
}

function returnIfSet(e, text) {
	if (document.getElementById(e).value.length > 0 ) {
		return text;
	} else {
		return '';
	}
}

function  generateResult() {
	var lineBreak = "<br/>";
	var tab = "&nbsp &nbsp";
	var textKarpal = selectKarpal.options[selectKarpal.selectedIndex].text;
	
	// prints
	var printDiagnostik = returnIfSet("textareaDiagnostisk", lineBreak+textareaDiagnostisk.value);
	var printKarpal = returnIfChecked("checkboxKarpal", lineBreak+"Karpaltunnel, "+textKarpal);
	var printEeg = returnIfChecked("checkboxEeg", lineBreak+"EEG"); 
	var printEmg = returnIfChecked("checkboxEmg", lineBreak+"EMG"+lineBreak
		+"Er pt. i AK-behandling? "+returnIfChecked("radioAk1", "Ja, "+textareaAk.value)+returnIfChecked("radioAk2", "Nej"));
	
	var printVep = returnIfChecked("checkboxVep", lineBreak+"VEP");
	var printSep = returnIfChecked("checkboxSep", lineBreak+"SEP");
	var printMep = returnIfChecked("checkboxMep", lineBreak+"MEP"+lineBreak
		+"Har pt. interkranielle metalclips?: "+returnIfChecked("radioInter1", "Ja")+returnIfChecked("radioInter2", "Nej")+lineBreak
		+"Har pt. metal i øjne el. ører?: "+returnIfChecked("radioØjne1", "Ja")+returnIfChecked("radioØjne2", "Nej")+lineBreak
		+"Lider pt. af epilepsi?: "+returnIfChecked("radioEpilepsi1", "Ja")+returnIfChecked("radioEpilepsi2", "Nej")+lineBreak
		+"Er pt. gravid?: "+returnIfChecked("radioGravid1", "Ja")+returnIfChecked("radioGravid2", "Nej"));
	
	var printMeg = returnIfChecked("checkboxMeg", lineBreak+"MEG"+lineBreak
		+"Har pt. interkranielle metalclips?: "+returnIfChecked("radioInter1", "Ja")+returnIfChecked("radioInter2", "Nej")+lineBreak
		+"Har pt. metal i øjne el. ører?: "+returnIfChecked("radioØjne1", "Ja")+returnIfChecked("radioØjne2", "Nej")+lineBreak
		+"Har pt. bøjle el. metal i munden?: "+returnIfChecked("radioBøjle1", "Ja")+returnIfChecked("radioBøjle2", "Nej")+lineBreak
		+"Har pt. metal i kroppen?: "+returnIfChecked("radioKrop1", "Ja")+returnIfChecked("radioKrop2", "Nej")+lineBreak
		+"Er pt. gravid?: "+returnIfChecked("radioGravid1", "Ja")+returnIfChecked("radioGravid2", "Nej"));
	
	var printSøvn = returnIfChecked("checkboxSøvn", lineBreak+"Søvn");
	var printØjen = returnIfChecked("checkboxØjen", lineBreak+"Øjen"
		+returnIfChecked("checkboxVepØjen",lineBreak+"VEP ")
		+returnIfChecked("checkboxErgØjen",lineBreak+"ERG ")
		+returnIfChecked("checkboxSepØjen",lineBreak+"SEP "));

	var printIom = returnIfChecked("checkboxIom", lineBreak+"IOM");
	var printAndet = returnIfChecked("checkboxAndet", lineBreak+"Andet: "+textareaAndet.value);
	var printSærligeAlmen = returnIfChecked("radioSærlige1", lineBreak+"Ja, "+textareaSærlige.value)+returnIfChecked("radioSærlige2", lineBreak+"Nej");

	var printSærligeSpecial = 
	"Akut/fast-track?: "+returnIfChecked("radioAkut1", "Ja, "+textareaAkut.value)+returnIfChecked("radioAkut2", "Nej")+lineBreak
	+"Behov for tolk: "+returnIfChecked("radioTolk1", "Ja "+textareaTolk.value)+returnIfChecked("radioTolk2", "Nej")+lineBreak
	+"Andre behov?: "+returnIfChecked("radioAndre1", "Ja "+textareaAndre.value)+returnIfChecked("radioAndre2", "Nej");
	
	var printAnamnese = returnIfSet("textareaAnamnese", lineBreak+textareaAnamnese.value);
	var printOut = "";

	if (selectHenviser.value == "almen"){
		printOut = 

		lineBreak

		+"Diagnostisk spørgsmål, der ønskes besvaret:"
		+printDiagnostik+lineBreak+lineBreak

		+"Ønskede undersøgelser:"
		+printKarpal+printEeg+lineBreak+lineBreak

		+"Særlige behov:"
		+printSærligeAlmen+lineBreak+lineBreak

		+"Anamnese og objektive fund:"
		+printAnamnese+lineBreak

		+lineBreak
		;
	}

	if (selectHenviser.value == "special"){
		printOut = 

		lineBreak

		+"Ønskede undersøgelser:"
		+printKarpal+printEeg+printEmg+printVep+printSep+printMep+printMeg+printSøvn
		+printØjen+printIom+printAndet+lineBreak+lineBreak	

		+"Særlige behov:"
		+lineBreak+printSærligeSpecial+lineBreak+lineBreak

		+"Anamnese og objektive fund:"
		+printAnamnese+lineBreak

		+lineBreak
		;
	}

	textResult.innerHTML = printOut;
	selectElementContents(textResult);
}

function selectElementContents(e) {
	var doc = document, text = e, range, selection;    
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

// var checkboxKarpal = document.getElementById("checkboxKarpal");
// var rowKarpal = document.getElementById("rowKarpal");
// var checkboxEmg = document.getElementById("checkboxEmg");
// var rowEmg = document.getElementById("rowEmg");
// var checkboxØjen = document.getElementById("checkboxØjen");
// var rowØjen = document.getElementById("rowØjen");
// var checkboxAndet = document.getElementById("checkboxAndet");
// var rowAndet = document.getElementById("rowAndet");
// var radioAk1 = document.getElementById("radioAk1");
// var textareaAk = document.getElementById("textareaAk");
// var radioSærlige1 = document.getElementById("radioSærlige1");
// var textareaSærlige = document.getElementById("textareaSærlige");
// var radioAkut1 = document.getElementById("radioAkut1");
// var textareaAkut = document.getElementById("textareaAkut");
// var radioTolk1 = document.getElementById("radioTolk1");
// var textareaTolk = document.getElementById("textareaTolk");
// var radioAndre1 = document.getElementById("radioAndre1");
// var textareaAndre = document.getElementById("textareaAndre");
