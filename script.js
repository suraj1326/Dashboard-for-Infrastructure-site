// Collapsible sections
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function openModal(widgetName) {
    document.getElementById("modal-text").innerText = "More information about " + widgetName;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// for transition
document.addEventListener("DOMContentLoaded", function() {
    var widgets = document.querySelectorAll('.widget');
    widgets.forEach(function(widget) {
        widget.style.transition = 'all 0.3s ease-in-out';
    });
});
