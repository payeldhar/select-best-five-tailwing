let counter = 0;

document.getElementById('calculate').addEventListener('click' , function(){
const numberField = document.getElementById("number-field")
const numberFieldString = numberField.value
const preNumberField = parseFloat(numberFieldString)
numberField.value =''
const allCost = preNumberField * counter

const  playerExpenses = document.getElementById ("player-expenses")
playerExpenses.innerText = allCost
})

document.getElementById("calculate-now" ).addEventListener('click' , function (){
    const playerExpensesAll   = document.getElementById ('player-expenses')
    const playerExpense = playerExpensesAll.innerText
    const prePlayerExpense = parseFloat (playerExpense)

   const managerExpenses = document.getElementById ('manager-expenses')
    const managerExpensesString  = managerExpenses.value
    const preManagerExpenses = parseFloat (managerExpensesString)
   
  const newManagerExpenses = preManagerExpenses + prePlayerExpense;
  managerExpenses.value = newManagerExpenses;

  const coachExpenses  = document.getElementById ('coach-Expenses')
     const coachExpensesString = coachExpenses.value
    const preCoachExpenses = parseFloat (coachExpensesString)
      const newCoachExpenses = newManagerExpenses + preCoachExpenses

      const final = document.getElementById('final')
         final.innerText = newCoachExpenses

         managerExpenses.value = ''
         coachExpenses.value =''
         playerExpensesAll.innerText =''
})

document.getElementById("select-one").addEventListener('click' , function(){
    const selected = document.getElementById("selected")
    counter++;
    const li1 = document.createElement('li')
    li1.innerHTML = `
    paulo Dybala
    `
    selected.appendChild(li1)
    })

    document.getElementById("select-two").addEventListener('click' , function(){
    const selected = document.getElementById("selected")
    counter++;
    const li2 = document.createElement('li')
    li2.innerHTML = `
    acuna
    `
    selected.appendChild(li2)
    })
    
    document.getElementById("select-three").addEventListener('click' , function(){
      const selected = document.getElementById('selected')
      counter++;
      const li3 = document.createElement ('li')
      li3.innerHTML = `
      mbappee `
      selected.appendChild(li3)
    })
    document.getElementById("select-four").addEventListener('click' , function(){
    const selected = document.getElementById("selected")
    counter++;
    const li4 = document.createElement('li')
    li4.innerHTML = `
    naymar
    `
    selected.appendChild(li4)
    })

    document.getElementById("select-five").addEventListener('click' , function(){
    const selected = document.getElementById("selected")
    counter++;
    const li5 = document.createElement('li')
    li5.innerHTML = `
    messi
    `
    selected.appendChild(li5)
    })
    document.getElementById("select-six").addEventListener('click' , function(){
        const selected = document.getElementById('selected')
        counter++;
        const li6 = document.createElement ('li')
        li6.innerHTML = `
        albaraz `
        selected.appendChild(li6)
      })