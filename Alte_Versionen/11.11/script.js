var moveback = false
var restartmove = true

function url() { 
  if(moveback == true ) {
    document.getElementById("name").value = sessionStorage.getItem('savename')
    document.getElementById("lastname").value = sessionStorage.getItem('savelastname')
    moveback = false
    restartmove = true
  }
  else{
    let url = window.location.href
    let params = (new URL(url).searchParams)

    document.getElementById("name").value = params.get('name')
    document.getElementById("lastname").value = params.get('lastname')

    params.set('hallo', 'byby')

    sessionStorage.setItem('savename', document.getElementById("name").value)
    sessionStorage.setItem('savelastname', document.getElementById("lastname").value)

    console.log("Name: " + sessionStorage.getItem('savename'))
    console.log("Nachname: " + sessionStorage.getItem('savelastname'))
    restartmove = false
  }
}

function startset() {
  window.sessionStorage.setItem('savename', document.getElementById("name").value)
  window.sessionStorage.setItem('savelastname', document.getElementById("lastname").value)

  console.log(sessionStorage.getItem('savename'))
  console.log(sessionStorage.getItem('savelastname'))
}

function selection() {
  console.log(sessionStorage.getItem('savename'))
  console.log(sessiontorage.getItem('savelastname'))
}

function gesellschaftlich() {
  if(document.getElementById("pfach1.3").checked == true) {
    document.getElementById("pfach1.3").checked = false
  }
  else{
    document.getElementById("pfach1.3").checked = true
  }
  if(document.getElementById("pfach3.4").checked == true) {
    document.getElementById("pfach3.4").checked = false
  }
  else{
  document.getElementById("pfach3.4").checked = true
  }
}

function natur() {
  document.getElementById("name").value = sessionStorage.getItem('savename')
  document.getElementById("lastname").value = sessionStorage.getItem('savelastname')
  console.log("Name: " + sessionStorage.getItem('savename'))
  console.log("Nachname: " + sessionStorage.getItem('savelastname'))
  moveback = true
}

function muku() {
  document.getElementById("name").value = sessionStorage.getItem('savename')
  document.getElementById("lastname").value = sessionStorage.getItem('savelastname')
  console.log("Name: " + sessionStorage.getItem('savename'))
  console.log("nachname: " + sessionStorage.getItem('savelastname'))
  moveback = true
}

function sprach() {

}

function clear() {
  sessionStorage.removeItem('savename')
  sessionStorage.removeItem('savelastname')
}

function chemieselected(pfach){
	if(pfach === "pfach1.2"){
		document.getElementById("pfach2.2").checked = false
		document.getElementById("pfach3.2").checked = false
	}
	if(pfach === "pfach2.2"){
		document.getElementById("pfach1.2").checked = false
		document.getElementById("pfach3.2").checked = false
	}
	if(pfach === "pfach3.2"){
		document.getElementById("pfach1.2").checked = false
		document.getElementById("pfach2.2").checked = false
	}
	
}

function giveoutput() {
  document.getElementById('name').value = sessionStorage.getItem('savename')
  document.getElementById('lastname').value = sessionStorage.getItem('savelastname')
}