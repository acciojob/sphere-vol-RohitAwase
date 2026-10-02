function volume_sphere() {
    let r = document.forms["MyForm"]["radius"].value
	document.forms["MyForm"]["volume"].value = (4/3*Math.PI*r**3).toFixed(4)
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_spher