// how to get a form from the html file
// how to get a message from html file


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value;
  if (email.includes('@')){
    message.textContent = "Eamil accepted";
    message.style.color = 'green'
  }
  else{
    // how to set a message to "Please, enter valid email"
    // how to get a red color to the message
  }
  
})



