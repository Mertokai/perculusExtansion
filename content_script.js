var buttons = document.getElementsByClassName("response-button");
setInterval(() => {  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].click();
    console.log("I clicked ");
  }
}, 1000);
