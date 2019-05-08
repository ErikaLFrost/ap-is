function openHamburgerFunction() {
    let myLink = document.getElementById("myLinks");
    if (myLink.style.display === "block") {
      myLink.style.display = "none";
    } else if(myLink.style.display === "inline-flex") {
      myLink.style.display = "none";
      } else{
      myLink.style.display = "inline-flex";
    }
  }