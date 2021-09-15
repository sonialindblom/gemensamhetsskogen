/* alert(1) */

class Myheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =` 
        <header>
        <div class="logo"><h1><a href="index.html" class=" logo">Gemensamhetsskog <br> Billingen</a></h1></div>
        <div class="till"><a   href="https://bit.ly/Billingen"> till namninsamling</a></div>
          <div class="topnav" id="myTopnav">
          
          <div class="dropdown">
          <a class="dropbtn" href="index.html"> 
          <i class="fa fa-home"></i>
        </a>
          </div> 
          <div class="dropdown">
            <span class="dropbtn">Om Initiativet 
              <i class="fa fa-caret-down"></i>
            </span>
            <div class="dropdown-content">
              <a href="initiativ.html">Initiativet</a>
              <a href="aktuellt.html"  >aktuellt </a>
              <a href="iMedia.html"  >i media</a>
              <a href="QA.html"  >Frågor & svar</a>
            </div>
          </div> 
          <div class="dropdown">
            <span class="dropbtn" id="fakta">Fakta 
              <i class="fa fa-caret-down"></i>
            </span>
            <div class="dropdown-content">
              <a href="FaktaStyrdokument.html">Styrdokument</a>
              <a href="FaktaLknProjekt.html"> linkande projekt</a>
              <a href="granplantage.html">Granplantage</a>
              <a href="kontinuitetsskog.html">kontinuitetsskog</a>
            </div>
          </div> 
          <div class="dropdown">
            <span class="dropbtn">Om Oss 
              <i class="fa fa-caret-down"></i>
            </span>
            <div class="dropdown-content">
              <a href="OmOss.html">Vem är vi</a>
              <a href="#fb-page">På sociala media</a>
            </div>
          </div> 
          <a href="javascript:void(0);" style="font-size:26px;" class="icon" onclick="myFunction()">&#9776;</a>
        </div>
        </header>
  `
       
    }

}


customElements.define('my-header',Myheader)



/* GET A FOOTER*/



class Myfooter extends HTMLElement{
  connectedCallback(){
      this.innerHTML =` 
      
      '
      
      </div>
      <div class="grid-container">
         <div class="footer">
         <p class="footerp"> &#169; gemensamhetsskogen.se <br>
          gemensamhetsskogen@gmail.com</p>
         </div>
       </div>
         
  `
     
  }
  
  }
  
  
  customElements.define('my-footer',Myfooter)




/* GET A SLIDESHOW */


var slideIndex = 1;
showDivs(slideIndex);



function plusDivs(n) {
  showDivs(slideIndex += n);
}


function currentDivs(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "inline";  
}


/* new slide*/ 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}


/*  SHOW MENU IN SMALL SCREENS */ 
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

 /*  sidebar */

 function openNav() {
  document.getElementById("listan").style.width = "250px";
}

function closeNav() {
  document.getElementById("listan").style.width = "0";
}




function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



/* FACEBOOK */















/* *** Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict ***

function dropdown(){ alert(2321321321321)}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
 */