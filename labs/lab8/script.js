function toggleTheme() {
    // Identify the <body> element of the page
    var bodyElement = document.body;

    // Toggle .dark-mode css class on <body>
    bodyElement.classList.toggle("dark-mode");
}

var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleTheme);