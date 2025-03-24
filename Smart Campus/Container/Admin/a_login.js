let form = document.querySelector("form") ;
let user_name = document.querySelector("#username") ;
let password = document.querySelector("#password") ;
let p = document.querySelector("p") ;


let id = "admin" ;
let pass = "123" ;



form.addEventListener("submit" , (e) => {

    e.preventDefault() ;

    if(user_name.value.trim().toLowerCase() == id && password.value.trim() == pass){

        location.assign("Admin_Data/a_data.html") ;

    }else{
        p.innerText = "Invalid userame or password" ;
        document.addEventListener("click" , () => {

            p.innerText = "" ; 

        } )
    }

})