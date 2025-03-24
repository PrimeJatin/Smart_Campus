let form = document.querySelector("form") ;
let input = document.querySelectorAll("input") ;

let worker_info = [ 
    
    {
        username : "electricion" ,
        password : "123" 
    },

    {
        username : "carpenter" ,
        password : "123" 
    },

    {
        username : "lab" ,
        password : "123" 
    },

    {
        username : "sweeper" ,
        password : "123" 
    },

    {
        username : "class-Room" ,
        password : "123" 

    },
    {
        username : "other" ,
        password : "123" 
    
    } ] ;

    form.addEventListener("submit" , (e) => {

        e.preventDefault() ;

        for(let i=0 ; i<worker_info.length ; i++){

            let usnm = input[0].value.trim().toLowerCase() , pswd = input[1].value.trim().toLowerCase() ;

            if(usnm == worker_info[i].username && pswd == worker_info[i].password ){
    
                if(usnm == "electrition" ){

                    location.assign("Electrition_Data/elec_db.html") ;

                }else if(usnm == "carpenter" ){

                    location.assign("Carpenter_Data/cpr_db.html") ;

                }else if(usnm == "lab" ){

                    location.assign("Lab_Data/lb_db.html") ;

                }else if(usnm == "sweeper" ){

                    location.assign("Sweeper_Data/swpr_db.html") ;

                }else if(usnm == "class-Room"){

                    location.assign("ClassRoomData/cls_db.html") ;

                }else{

                    location.assign("Other_Data/othr_db.html") ;

                } 

                input[0].value = "" ;
                input[1].value = "" ;
    
            }else if(i == worker_info.length- 1){
                
                let p = document.querySelector("p") ;
                p.innerText = "Invalid username or password" ;

                document.addEventListener("click" ,() =>{

                    p.innerText = "" ;

                });
            }
        }
    });

