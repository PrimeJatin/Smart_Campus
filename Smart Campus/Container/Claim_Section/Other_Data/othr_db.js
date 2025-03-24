let table = document.querySelector("table") ;
let key ;
let value = "Othr" ;
let sum ;

for(let i=1 ; i<localStorage.getItem("DefIndex") ; i++ ) {

    let tr = document.createElement("tr") ;
    table.appendChild(tr) ;

    for(let j=1 ; j<=4 ; j++ ){

        function func(value){

            if(localStorage.getItem(i+"."+j + " " + value + " " + key) != null){

                return value ;

            }else {
                return 0;
            }
            
        }

        if(j == 1){
            key = "Username" ;

        }else if(j == 2){
            key = "Stream" ;
            
        }else if(j ==3){
            key = "Enrollment no:" ;

        }else if(j == 4){
            key = "Problem" ;

    }

    if(func(value) != 0){
    let td = document.createElement("td") ;
    td.innerText = localStorage.getItem(i+"."+j + " " + func(value) + " " + key);
    tr.appendChild(td) ;

    }

  }
}

let allTr = document.querySelectorAll("tr") ;

    for(let k=1 ; k< localStorage.getItem("DefIndex") ; k++ ){
        if(allTr[k].childElementCount == 0 ){
            allTr[k].remove() ;
        }
        
    }