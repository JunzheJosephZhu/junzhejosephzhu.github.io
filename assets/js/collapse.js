var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    console.log(3)
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == "inline") {
      content.style.display = "none";
    } else {
      content.style.display = "inline";
    }
  });
}
