/* alert(1) */

class Myheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =` 
        <header>
        <div class="logo"> 
  
        <div class="toggleBtn" onclick="fToggleBtn()" >
            <div class="bar"></div>
            
            <div class="bar"></div>
            
            <div class="bar"></div>
          
        </div> 
          <a href="index.html" class="logo">
            Gemensamhetsskog <br> Billingen</a>
              
          </div > 
          <div id="myDIV">
          <ul  id="listan" class="nav_links">
                          <li>        
                            <div class="dropdown" >
                                  <a class="dropbtn" href="projektet.html" >Om Projektet</a>
                                  <div class="dropdown-content">
                                    <a href="aktuellt.html"  >aktuellt</a>
                                    <a href="iMedia.html"  >i media</a>
                                    <a href="">nästa steg</a>
                                    <a href="QA.html"  >Frågor & svar</a>
                                  </div>
                                </div>
                          
                          </li>
                          
                          <li> <div id="dropdown"  class="dropdown" >
                              <a class="dropbtn" href="Fakta.html "  >Fakta</a>
                             <div class="dropdown-content">
                                <a href="FaktaStyrdokument.html">Styrdokument</a>
                                <a href="FaktaLknProjekt.html"> linkande projekt</a>
                                <a href="#">plantageskog</a>
                                <a href="kontinuitetsskog.html">kontinuitetsskog</a>
                              </div>
                            </div></li>
                          <li> <div class="dropdown">
                               <a href="OmOss.html" class="dropbtn" > Om Oss</a>
                              <div class="dropdown-content">
                                <a href="OmOss.html" target="iframe2">Vem är vi</a>
                                <a href="#">På sociala media</a>
                              </div>
                            </div></li>
                          <li>  
                        <div class="dropdown">
                          
                        <a href="index.html"  class="dropbtn" >Hem</a>
                        </div> </li> 
            </ul>
          </div>
      
                              
         <a  class="cta" href="https://bit.ly/Billingen"> <button> till namninsamling</button></a>
       
        </header>
  `
       
    }

}


customElements.define('my-header',Myheader)



/* GET A FOOTER*/


class Myfooter extends HTMLElement{
  connectedCallback(){
      this.innerHTML =` 
      <footer>
            
     <nav>
       <ul id=huvudMeny class="foot_links ">
                      <li>        
                        <div id="footer_dropdown"  class="footer_dropdown" >
                              <a class="footer_dropbtn" href="projektet.html" >Om Projektet</a>
                              <div class="footer_dropdown-content">
                                <a href="aktuellt.html"  >aktuellt</a>
                                <a href="iMedia.html"  >i media</a>
                                <a href="">nästa steg</a>
                                <a href="QA.html"  >Frågor & svar</a>
                              </div>
                            </div>
                      
                      </li>

                      
                      <li> <div id="footer_dropdown"  class="dropdown" >
                          <a class="footer_dropbtn" href="Fakta.html "  ><br> Fakta</a>
                         <div class="footer_dropdown-content">
                            <a href="FaktaStyrdokument.html">Styrdokument</a>
                            <a href="FaktaLknProjekt.html" target=""> linkande projekt</a>
                            <a href="">plantageskog</a>
                            <a href="kontinuitetsskog.html">kontinuitetsskog</a>
                          </div>
                        </div></li>
                      <li> <div class="footer_dropdown">
                          <span class="footer_dropbtn"><br> <a href="OmOss.html" onclick="fq4()"></a> Om Oss</span>
                          <div class="footer_dropdown-content">
                            <a href="OmOss.html" target="iframe2">Vem är vi</a>
                            <a href="#">På sociala media</a>
                          </div>
                        </div></li>
      <!--  <li>  <a href="index.html">Home</a> </li>  */ -->  </ul>
     </nav>
                          
      
    </footer>
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