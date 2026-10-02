function volume_sphere(event) {
    event.preventDefault();

    let r = Number(document.forms["MyForm"]["radius"].value);

    if (isNaN(r)) {
        document.forms["MyForm"]["volume"].value = "NaN";
        return;
    }

    document.forms["MyForm"]["volume"].value =
        (4 / 3 * Math.PI * r ** 3).toFixed(4);
}

document.getElementById("MyForm").onsubmit = volume_sphere;

window.onload = document.getElementById('MyForm').onsubmit = volume_spher