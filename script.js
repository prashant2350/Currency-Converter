let dropdowns = document.body.querySelectorAll(".dropdown select");
let btn = document.querySelector("button");
let msg= document.querySelector(".msg");

for(let select of dropdowns){
    for(let currCode in countryList){
       let newOption = document.createElement("option");
       newOption.innerText=currCode;
       newOption.value=currCode;
       select.append(newOption);
    }
    select.addEventListener("change",()=>{
        let currCode=select.value;
    let countryCode= countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png` ;
    let img = select.parentElement.querySelector("img");
    img.src=newSrc;
    })
}

btn.addEventListener("click",async(evt)=>{
   evt.preventDefault();
    let amount=document.querySelector("input");
    let amtval=amount.value;
if(amtval==="" || amtval<1){
    amtval=1;
    amount.value="1";
}
    console.log(amtval);
    const URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
    let fromCurr=dropdowns[0];
    let toCurr=dropdowns[1];
    
    let response=await fetch(URL);
    let data=await response.json();

    let ratefrom = data.eur[fromCurr.value.toLowerCase()];
    let rateto =   data.eur[toCurr.value.toLowerCase()];
    console.log(ratefrom);
    console.log(rateto);
    let rate = rateto/ratefrom;
    console.log(rate);

    let finalamt= amtval*rate;
  
    msg.innerText=`${amtval} ${fromCurr.value} = ${finalamt} ${toCurr.value}`
    

})