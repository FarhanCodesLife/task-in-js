let form = document.querySelector('#form')
let expense = document.querySelector('#expense')
let amount = document.querySelector('#amount')
let allitems = document.querySelector('#allitems')
let totalamunt = document.querySelector('#totalamount')

let arr 
let users = localStorage.getItem('items',JSON.stringify(arr))
if(arr == null){
    arr = [] ;
  }else{
    arr = users;
  }



form.addEventListener('submit',(res)=>{
    res.preventDefault()

    if (expense.value != "" || amount.value !="") {
        // console.log(expense.value);
        // console.log(amount.value);
        arr.push({
            expense:expense.value,
            amount:amount.value
        })

        console.log(arr);
        

        renderitems()
    }else{
        alert("enter a expense and amount")
    }



    amount.value =""
    expense.value=""


})


function renderitems() {
    let totalprice = 0
    
    localStorage.setItem('items',JSON.stringify(arr))


    allitems.innerHTML=""
    arr.map((items,index)=>{
        allitems.innerHTML+=`
        <div>
        <h1>${items.expense}</h1>
        <h3>${items.amount}</h3>
         <button onclick="add(${index})">add</button>
    <button onclick="delet(${index})">delet</button>
    <hr>
        </div>
        `
    //  total =items.amount
    
    // console.log(typeof items.amount);
    totalprice += +items.amount
    // totalprice=0    
    // for (let i = 0; i < total.length; i++) {
        //     totalprice = total + total[i]
        
        // }
    })
    // let newamount = total + items.amount 
    
    if (arr != []) {
    
    totalamunt.innerHTML = `
    <h1>total Amount = ${totalprice}</h1>`
    }
    else{totalprice = ""}
            
            
    }
   
    



// arr.every()



function add(index) {
   let newexpense = {
        expense:prompt("enter a new expense"),
        amount:prompt("enter a new amount")}
    
   

console.log(index);
console.log(arr);

    arr.splice(index,1,newexpense)
    renderitems()
    
}

function delet(index) {
console.log(index);

    arr.splice(index,1,)
    console.log(arr);
    renderitems()
    // allitems.innerHTML=""
    
}