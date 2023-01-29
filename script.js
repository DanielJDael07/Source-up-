

// JS Script for Nav Bar scroll effect

  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
      nav.classList.add('nav-color', 'shadow');
    } else {
      nav.classList.remove('nav-color', 'shadow');
    }
  });

//End of JS Script for Nav Bar scroll effect

//JS Script for calendly

  document.getElementById("schedule-button").onclick = function() {
      window.open("https://calendly.com/jenadarayan/sales-call?api_key=5ZYSUZ6RY5YGDYY74T5CL4SLQBUVT4G6");
  };

//end of JS Script for calendly


//Start of back to top botton
 // Get the button
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

//End of back to top botton

// Start of connecting sheetdb API

  var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
e.preventDefault();
fetch(form.action, {
    method : "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
}).then(
    response => response.json()
).then((html) => {
  // you can put any JS code here
  window.open('contact-form-notification.html', '_blank');

});
});

// End of connecting sheetdb API



  
   
   
   
 



    
