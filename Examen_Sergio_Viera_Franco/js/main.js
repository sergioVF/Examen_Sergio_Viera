function loadquotes(){
    var letter = document.getElementById("letter").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "main.php?quote=" + letter, true);
    xhttp.send();

}