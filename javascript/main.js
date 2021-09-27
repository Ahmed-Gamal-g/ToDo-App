// let mybtn = document.getElementById("button")
// let mynon = document.getElementById("non")

// let start = () =>{

//     mynon.classList.remove("display")

// }

// mybtn.addEventListener("click" , start)




// // end step (1)




// myinput = document.getElementById("inputadd");
// mybutton = document.getElementById("button2");
// myp = document.getElementById("pp");


// let form = () =>{
//     let data = myinput.value;
//     myp.innerText = data;
//     mynon.classList.add("display")
    
// }

// mybutton.addEventListener("click" , form)




// // end step (2)




// myclose = document.getElementById("close");


// let cancel = () =>{

//     mynon.classList.add("display")
// }

// myclose.addEventListener("click" , cancel)



// // end step (3)



// mydelete = document.getElementById("delete")


// let empty = () =>{

//     myp.innerText = "No Data Added Yet ."
// }

// mydelete.addEventListener("click" , empty)













// let mybtn = document.getElementById("button")
// let mynon = document.getElementById("non")



// let start = () =>{

//     mynon.classList.remove("display")


// }



// mybtn.addEventListener("click" , start)

// //end step (1)



// let myinput = document.getElementById("inputadd")
// let mybutton = document.getElementById("button2")
// let myp = document.getElementById("pp")
// let myanswer = document.getElementById("answer")
// let mylayin = document.getElementById("layin")



// let form = () =>{

    
   
//     let data = myinput.value;
//     mynon.classList.add("display")
//     //  mylayin.remove();
//     if(data.trim() == ""){
//         alert("you must enter Data")
//     }else{

//         myanswer.innerHTML += `
//         <div class = "alert alert-info">
//         ${data}
//         <button style="margin: 0px 0px 20px 710px;"  class = "btn btn-danger delete">delete</button>
//         </div>
        
//         `

//     }
//     console.log(data)



// }

// mybutton.addEventListener("click" , form)


// document.addEventListener("click" , function(a){
//     if(a.target.classList.contains("delete"))
//     a.target.parentElement.remove();

// })

// // end step (2)



// let myclose = document.getElementById("close")



// let cancel = () =>{
//     mynon.classList.add("display")
// }


// myclose.addEventListener("click" , cancel)








mybtn = document.getElementById("button")
mynon = document.getElementById("non")





let start = ()=>{

    mynon.classList.remove("display");
    
}

mybtn.addEventListener("click" , start)




mybtn2 = document.getElementById("button2")
myinputadd = document.getElementById("inputadd")
myp = document.getElementById("pp")
myanswer = document.getElementById("answer")
mylayin = document.getElementById("layin")


let dos = () => {
    data = myinputadd.value;
    console.log(data)
    mynon.classList.add("display")

    if(data.trim() == ""){
        alert("you must enter data")
    }else{
        mynon.classList.add("display")
        // mylayin.remove();
        myanswer.innerHTML += `
        <div style="color: black"; class = "alert alert-dark bg-info task">
        ${data}
        <button  style="margin:30px 0px 35px 700px;" class = "btn btn-danger delete">delete</button>
        </div>
        
        `;
        myanswer.addEventListener("click" , function(b){
            if(b.target.classList.contains("task")){
            b.target.classList.toggle("cheked");
        }
        })

    }



}

mybtn2.addEventListener("click" , dos)


document.addEventListener("click" , function(e){
    if(e.target.classList.contains("delete"))
    e.target.parentElement.remove();
    

})



myclose = document.getElementById("close")

let cancel = () => {

    mynon.classList.add("display")
    
}

myclose.addEventListener("click" , cancel)



// end step (3)



// let mydelete = document.getElementById("delete")


// let empty = () =>{
//     myp.innerText = "No Data Added Yet ."
// }


// mydelete.addEventListener("click" , empty)