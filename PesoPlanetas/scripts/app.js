const marte = document.querySelector("#marte")
const jupiter = document.querySelector("#jupiter")
const venus = document.querySelector("#venus")
const saturno = document.querySelector("#saturno")

const planets = document.querySelectorAll(".btn-planet");

planets.forEach(element => {
    element.addEventListener("click", function(){
        Calcular();
    })
});

function Calcular(){
        const pesoUser = document.querySelector("#peso").value

    marte.addEventListener("click", function(){
        // gravedad
        const g = 9.81;

        // peso
        const res = pesoUser/g * 3.711;

        Swal.fire({
            title: `Su peso en marte es: ${res} kg`
        })
        // console.log(res)
    })

    venus.addEventListener("click", function(){
         // gravedad
         const g = 0.87;

         // peso
         const res = pesoUser * g;
 
         Swal.fire({
             title: `Su peso en venus es: ${res} kg`
         })
         // console.log(res)
    })

    saturno.addEventListener("click", function(){
              // gravedad
              const g = 0.93;

              // peso
              const res = pesoUser * g;
      
              Swal.fire({
                  title: `Su peso en saturno es: ${res} kg`
              })
              // console.log(res)
         })

    jupiter.addEventListener("click", function(){
               // gravedad
               const g = 2.55;

               // peso
               const res = pesoUser * g;
       
               Swal.fire({
                   title: `Su peso en jupiter es: ${res} kg`
               })
          })
}

