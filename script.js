function volume_sphere() {
    let r = document.forms["MyForm"]["radius"].value
	document.forms["myForm"]["volume"].value = 4/3*Math.PI*r**3 
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_spher