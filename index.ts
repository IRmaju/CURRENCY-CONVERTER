import inquirer from  "inquirer";

let Conversion ={
    "PKR":{
        "USD":0.0036,
        "GBP":0.0037,
         "PKR":1
},

"GBP":{
    "USD":1.21,
    "PRK": 350,
    "GBP":1
},

"USD":{
    "PKR":27.58,
    "GBP": 0.083,
    "USD":1
}
}


const answer:{
    from : "PKR"|"USD"|"GBP",
    to :"PKR"|"USD"|"GBP",
    amount :number
}= await inquirer.prompt([
{
    type:"list",
    name:"from",
    choices:["PKR","USD","GBP"],
    message:"select your currency..?"
},
{
    type :"list",
    name:"to",
    choices:["PKR","USD","GBP"],
    message:"select your conversion currency"
},
{
    type:"number",
    name:"amount",
    message:"Enter your conversion amount"
}
    
])

const {from ,to, amount}= answer;

if (from && to && amount){
    let result = Conversion [from ][to ]*amount
    console.log (`your conversion from ${from} to ${to} is ${result}`)
}else{
    console.log("invalid input")
}