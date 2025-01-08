


window.onload = function(e){ 
    console.log("Bienvenidos")
  
    setTimeout(() => {
        const caja = document.getElementById("box")
        caja.classList.add("box-motion")
          }, "3500");

    
          setTimeout(()=>{window.location = '../pages/pageOne.html' },4500)
       
}
    