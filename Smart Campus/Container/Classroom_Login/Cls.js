// Selecting Elements 

let form = document.querySelector("form") ;
let input = document.querySelectorAll(".inputs") ;
let inputArr = Array.from(input) ;
let p = document.querySelector("p") ;

// Student Information 

let data = [ 
    {

        name : "jatin sain",
        stream : "bca" ,
        enroll_num : "149" ,  

    },
    {

        name : "abhishek singh",
        stream : "bca" ,
        enroll_num : "1" ,

    },
    {

        name : "khushi swami",
        stream : "bca" ,
        enroll_num : "2" ,

    },
    {

        name : "sunil kumar",
        stream : "bca" ,
        enroll_num : "3" ,

    },
    {

        name : "kunal singh",
        stream : "bca" ,
        enroll_num : "4" ,

    },
    {

        name : "abhishek jangid",
        stream : "bca" ,
        enroll_num : "5" ,


    } ] ;


// Form Submit Event 


form.addEventListener("submit" , (e) => {

    e.preventDefault() ;

// input data into a variable

    let checkN ;
    let checkS ;
    let checkE ;


// Loop

        for(let j=0 ; j<data.length ; j++){

            checkN = input[0].value.trim().toLowerCase() ;
            checkS = input[1].value.trim().toLowerCase() ;
            checkE = input[2].value.trim().toLowerCase() ;

// Condition 

        if(checkN == data[j].name && checkS == data[j].stream  && checkE == data[j].enroll_num ){

                // Copy paste 
            let i ;
            let key ;
            let count = 1 ;


            if(localStorage.getItem("DefIndex") == null ){
               i = 1;
            }else{
                i = localStorage.getItem("DefIndex") ;
            }

    // Saved Data In Db Using Array Dot For Each.

            inputArr.forEach( (el)  => {

               if(count == 1){
                  key = "Username" ;
                }else if(count == 2){
                    key = "Stream" ;
                }else if(count ==3){
                    key = "Enrollment no:" ;
                }else if(count == 4){
                    key = "Problem" ;
                }

            localStorage.setItem(i+"."+count + " " + "Cls" + " " + key , el.value.trim().toUpperCase() ) ;
            count++ ;
            el.value = "" ;

          } ) ;


// Saved Successfuly Or Invalid Message With Timeout 

        p.innerText = "Saved Successfuly" ;
        p.style.color = "black" ;
            
            localStorage.setItem("DefIndex" , ++i) ;
            break ;

        }else if(j == 5){

            p.innerText = "Invalid Information" ;
            p.style.color = "red" ;

        }

        document.addEventListener("click" , () => {

            p.innerText = "" ;

        } )

    }

});;