function incCounter() {
    var spanElement = document.getElementById("counter");
    var count = spanElement.getAttribute("numberOfClicks");
    count++;
    spanElement.innerText = count;
    spanElement.setAttribute("numberOfClicks",count);
}
function toggleVisibility() {
    var chartImage = document.getElementById('chart2');
    if (chartImage.style.display === "none") {
    chartImage.style.display = "block";
    } else {
    chartImage.style.display = "none";
    }
    }
document.getElementById('chartToggle').addEventListener('click',toggleVisibility)
document.getElementById('incButton').addEventListener('click',incCounter)