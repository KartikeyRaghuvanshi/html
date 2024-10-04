//-------------1st way--------------------
// let btn = document.querySelector("button");
// let currmode = "lightmode";
// btn.addEventListener("click",()=>{
    //     if(currmode==="lightmode"){
        //         currmode = "darkmode";
        //         let body= document.querySelector("body");
        //         body.style.backgroundColor = "black";
//         body.style.color = "white";

//     }
//     else{
    //         currmode="lightmode";
//         let body= document.querySelector("body");
//         body.style.backgroundColor = "white";
//         body.style.color = "black";
//         // body.style.color = "black";
//     }
    
//     console.log(currmode);
// });


//--------------2nd way------------------
// let btn = document.querySelector("button");
// let body = document.querySelector("body");
// let mode= "light"

// btn.addEventListener("click",()=>{
//     if(mode==="light"){
//         mode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         mode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })
//---------------------------------------
const emp ={
    salary: 400,
    caltax(){
        console.log("tax is 10%");
    },
    newtax(){
        console.log("tax is 50%");
    },
};
const karan={
    salary: 5000,
    // caltax(){
    //     console.log("tax is 20%");
    // },
};

karan.__proto__=emp;