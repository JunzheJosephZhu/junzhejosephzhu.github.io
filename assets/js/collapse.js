var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    console.log(3)
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    // inline for .content, block for .content2
    var display = content.classList.contains("content") ? "inline": "block";
    var arrow = this.children[2];
    if (content.style.display == display) {
      content.style.display = "none";
      arrow.classList.remove("inverted");

    } else {
      content.style.display = display;
      arrow.classList.add("inverted");
    }
  });
}
