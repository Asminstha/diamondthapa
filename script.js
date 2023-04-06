// console.log("hello ")
document.querySelector('.cross').style.display ='none'; /*to hide the cross */
document.querySelector('.hamburger').addEventListener("click", ()=>{
document.querySelector('.sidebar').classList.toggle('sidebargo');
 /*to toggle the sidebar ...if seen hides , if hides seeon on click*/
if(document.querySelector('.sidebar').classList.contains('sidebargo')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
}
else{
    document.querySelector('.ham').style.display='none'
    setTimeout(() => {
        document.querySelector('.cross').style.display='inline'
    }, 200);
   
}
});

var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");
         function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
           document.getElementById(tabname).classList.add("active-tab");
         }
