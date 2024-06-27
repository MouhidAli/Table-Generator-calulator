function find(){
    let table = document.querySelector("#tb1").value;
    document.querySelector("#result").innerHTML = ""
    for( let i=0; i<10; i++){
        document.querySelector("#result")
        .innerHTML +=`<h3> ${table} x ${i+1} = ${table *(1+i)} </h3>`
    } 
}