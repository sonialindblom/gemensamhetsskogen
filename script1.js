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


class Myheader extends HTMLElement{
  connectedCallback(){
      this.innerHTML =` 
      <header>
      <div class="logo"> 

      <div class="toggleBtn" onclick="openNav()" >
          <div class="bar"></div>
          
          <div class="bar"></div>
          
          <div class="bar"></div>
        
      </div> 
         <h1><a href="index.html" class="logo">
          Gemensamhetsskog <br> Billingen</a></h1>
            
        </div > 
        <div id="myDIV">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
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
          
    <div class="footer">
    <p> &#169; gemensamhetsskogen.se</p>
    <p> gemensamhetsskogen@gmail.com</p>
  
   </div>
    
  </footer>
`
   
}

}


customElements.define('my-footer',Myfooter)