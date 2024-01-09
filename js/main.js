const generatedprice = document.getElementById(`generated-price`);

// Chiediamo all'utente quanti chilometri vuole percorrere
const km = parseInt(prompt(`Quanti chilometri vuoi percorrere?`));
console.log(km);


// Chiediamo l'età all'utente
const age = parseInt(prompt(`Quanti anni hai?`));
console.log(age);

if(isNaN(km) || isNaN(age)){
    error = true;
    alert(`Dati non validi`)
}
else{
    error = false;
}
    // Calcoliamo il prezzo del biglietto in base ai chilometri che l'utente vuole percorrere
    let price = km * 0.21;
    console.log(price);
    let finalprice = price;
    if(!error){

        if(age < 18){
            let discountprice = 20;
            
            discountprice = price * discountprice / 100;
            finalprice = price - discountprice;
        }
        else if (age > 65){
        let discountprice = 40;
        
        discountprice = price * discountprice / 100;
        finalprice = price - discountprice;
        }
    console.log(finalprice);
    generatedprice.innerText = `Il prezzo del tuo biglietto è: ` + finalprice.toFixed(2) + ` €`;
    } 
    
    
    
    
    
    