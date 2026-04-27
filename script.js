function volume_sphere() {
    let element = document.querySelector("#radius");
    let r = parseFloat(element.value);

    let ansElem = document.querySelector("#volume");

    // Validate input first
    if (isNaN(r) || r < 0) {
        ansElem.value = "Invalid input";
        return;
    }

    // Then compute
    let ans = (4/3) * Math.PI * r ** 3;
    let roundedAns = ans.toFixed(4);

    ansElem.value = roundedAns;
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
