// import { fullName } from "./register.js"

let form = document.querySelector('#form')
let expense = document.querySelector('#expense')
let amount = document.querySelector('#amount')
let allitems = document.querySelector('#allitems')
let newrow = document.querySelector('#newrow')
let totalamunt = document.querySelector('#total')
let username = document.querySelector('#username')

username.innerHTML = `Hi Your Expenses Sheet is Here`
// console.log(fullName.value);

let arr 
let items = JSON.parse(localStorage.getItem('items'));
if(items === null){
  arr = [] ;
}else{
  arr = items;
  renderitems()
}
// let users = localStorage.getItem('items',JSON.stringify(arr))
// if(users === null){
//     arr = [] ;
//   }else{
//     arr = users;
//   }
// console.log(users);


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
        // allitems.html +=
        allitems.innerHTML+=`
        
       
    
        
    
        
        `
        renderitems()
        

    }else{
        alert("enter a expense and amount")
    }



    amount.value =""
    expense.value=""


})


function renderitems() {

const now = new Date();
const dayOfMonth = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();


let newdate =`${dayOfMonth}/${month + 1}/${year}`

    let totalprice = 0
    
    localStorage.setItem('items',JSON.stringify(arr))


    newrow.innerHTML=""
    arr.map((items,index)=>{


        // if (totalprice != 0) {
            // console.log();
            // allitems.innerHTML ="farhan"
            newrow.innerHTML +=` 
            <tr>
                        <td>${index+1}</td>
                        <td>${items.expense}</td>
                        <td>${newdate}</td>
                        <td>${items.amount}</td>
                        <td><button onclick="add(${index})">Edit</button></td>
                        <td><button onclick="delet(${index})">Delet</button></td>
                    </tr>`
            



            // <tr>
            //             <td>01</td>
            //             <td>${items.expense}</td>
            //             <td>24/7/2024</td>
            //             <td>${items.amount}</td>
            //         </tr>



        //     <tr>
        //     <td colspan="2">Total</td>
        //     <td colspan="2" id="totalPrice">${totalprice}</td>
        // </tr>



    // }
    // else{
    //         console.log(newrow);
            
            
    //     }

    //     <div>
    //     <h1></h1>
    //     <h3></h3>
        // <button onclick="add(${index})">add</button>
    // <button onclick="delet(${index})">delet</button>
    // <hr>
    //     </div>


    //  total =items.amount
    
    // console.log(typeof items.amount);
    totalprice += +items.amount
    // totalprice=0    
    // for (let i = 0; i < total.length; i++) {
        //     totalprice = total + total[i]
        
        // }
    })
    // let newamount = total + items.amount 
    if (totalprice != 0) {
        totalamunt.innerHTML = `
        <tr>
                <td colspan="3">Total</td>
                <td colspan="3" id="totalPrice">${totalprice}</td>
             </tr>
        `
    
   
    }
    else{totalamunt.innerHTML = ` <tr>
                
             </tr>`}
            
            
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

// console.log(Date(2024));

