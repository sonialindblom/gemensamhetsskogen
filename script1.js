
function fToggleBtn(){ 
    
   
 /* var x = document.getElementsByClassName('menu');
    x[0].classList.toggle='active';  /*--- works without changing back */ 

    var x = document.getElementById("listan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
    
/*  NOT REALLY-*/

/*   var x = document.getElementsByClassName('menu');
  // If "mystyle" exist, overwrite it with "mystyle2"
  if (x.className = 'active') {
    x.className = 'inactive';
  } else {
    x.className = 'active'; 
  }}  */ 

/* const toggleBtn = document.getElementsByClassName('toggleBtn')[0]
const nav_links = document.getElementsByClassName('nav_links')[0]

toggleButton.addEventListener('click', () => {
    nav_links.classList.toggle('active')
})
}


function fq3(){
    var siffer = document.getElementById("siffer1").value; // gets a variable from input field at html-document. 
    if (siffer > 0)// first condition - cheches if the number is positive
     {document.getElementById("q3").innerHTML = "your number is positive"// in case first condition is true, this will output the message "your number is positive" on paragraph "<p id="q3"> in the html-document
  
    } 
    else {// in case first condition is false, then creates second condition
         if (siffer < 0) {document.getElementById("q3").innerHTML = "your number is negative"  //in case second condition is true, this will output the message "your number is negative" on paragraph "<p id="q3"> in the html-document
    } 
    else // in case second condition also is false, then the number has to equals zero, the following will output the message "your number equals 0" on paragraph "<p id="q3"> in the html-document
     {document.getElementById("q3").innerHTML = "your number equals 0"
    }
     }
}*/