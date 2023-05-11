const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")

function Traffic_light(){
    setTimeout(()=>{
        green.style.backgroundColor="black"
        red.style.backgroundColor="red"
        console.log("1");
    },0)
    setTimeout(()=>{
        yellow.style.backgroundColor="yellow"
        red.style.backgroundColor="black"
        console.log("2");
    },10000)
    setTimeout(()=>{
        green.style.backgroundColor="green"
        yellow.style.backgroundColor="black"
        red.style.backgroundColor="black"
        console.log("3");
    },12000)

    setInterval(()=>{
        clearTimeout(red)
        clearTimeout(yellow)
        clearTimeout(green)
        console.log("clear");
    },27001)  //yeni onsuzda 1 kuruq 27000 ms saniye deyil 27000 ms
}            //saniye sonra yeni kuruq baslamir yeni 27000 +1 ms 
            // saniye bele besdirki biz bunu ramdan duzgun silek
Traffic_light()

setInterval(Traffic_light, 27000);