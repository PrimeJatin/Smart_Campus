let table = document.querySelector("table") ;
let key ;
let value = "Elc" ;
let sum ;

for(let i=1 ; i<localStorage.getItem("DefIndex") ; i++ ) {

    let tr = document.createElement("tr") ;
    table.appendChild(tr) ;

    for(let j=1 ; j<=4 ; j++ ){

        function func(value){

            if(localStorage.getItem(i+"."+j + " " + value + " " + key) == null){
                value = "Cpr" ;
                if( localStorage.getItem(i+"."+j + " " + value + " " + key) == null){
                    value = "Lb" ;
                    if(localStorage.getItem(i+"."+j + " " + value + " " + key) == null){
                        value = "Swpr" ;
                        if(localStorage.getItem(i+"."+j + " " + value + " " + key) == null){
                            value = "Cls" ;
                            if(localStorage.getItem(i+"."+j + " " + value + " " + key) == null){
                                value = "Othr" ;
                                if(localStorage.getItem(i+"."+j + " " + value + " " + key) != null){
                                    return value ;
                                }
                                
                            }else{
                              return value ;
                            }
                        }else{
                         return value ; 
                        }
                    }else{
                      return value ;
                    }
                }else{
                 return value ;
                }
            }else{
              return value ;
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

    let td = document.createElement("td") ;
    td.innerText = localStorage.getItem(i+"."+j + " " + func(value) + " " + key);
    tr.appendChild(td) ;

  }

//   let check = document.createElement("input") ;
//   check.setAttribute("type" , "checkbox") ;
//   table.append(check) ;
}