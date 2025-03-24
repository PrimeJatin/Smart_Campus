let form = document.querySelector("form") ;
let input_data = document.querySelectorAll(".input-box") ;
let dataArr = Array.from(input_data) ;

let s_info = document.querySelectorAll(".student-card p span") ;
let s_card = document.querySelector(".student-card") ;
let wrong = document.querySelector("#wrong") ;


let s_data = [ {

    name : "jatin sain" ,
    enroll_num : "149" ,
    batch : "3" , 
    stream : "bca", 
    attendance : "78%" ,

} , 

{

    name : "abhishek singh" ,
    enroll_num : "1" ,
    batch : "3" , 
    stream : "bca" ,
    attendance : "80%" ,

} ,

{
    name : "khushi swami" ,
    enroll_num : "2" ,
    batch : "3" , 
    stream : "bca" ,
    attendance : "90%" ,
} , 

{
    name : "sunil kuamr prajapat" ,
    enroll_num : "3" ,
    batch : "3" , 
    stream : "bca" ,
    attendance : "60%" ,

} ] ; 

form.addEventListener("submit" , (e) =>{

    
    e.preventDefault() ;

    let check1 = input_data[0].value.trim().toLowerCase() ;
    let check2 = input_data[1].value.trim().toLowerCase() ;
    let check3 = input_data[2].value.trim().toLowerCase() ; 
    let check4 = input_data[3].value.trim().toLowerCase() ; 

    for(let i =0; i<s_data.length ;i++){

        if(check1 == s_data[i].name && check2 == s_data[i].enroll_num && check3 == s_data[i].batch && check4 == s_data[i].stream ){

            s_info[0].innerText = check1.toUpperCase()  ;
            s_info[1].innerText = check2.toUpperCase()  ;
            s_info[2].innerText = check3.toUpperCase()  ;
            s_info[3].innerText = check4.toUpperCase()  ;
            s_info[4].innerText = s_data[i].attendance ;

        dataArr.forEach( (el) => {

            el.value = "" ;

        } );

            s_card.classList.remove("cen") ;
            s_card.focus() ;
            break ;

        }else if(i == s_data.length-1){
            
            wrong.innerText = "Invalid information" ;
            document.addEventListener("click" , () => {

                wrong.innerText = "" ;

            } ) ;
        }
    }

}) ;

function closeProfile(){

    s_card.classList.add("cen");

} ;