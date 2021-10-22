
const btns = document.querySelectorAll('.inputItems .btn');
const formgen = document.querySelector('.formName');



btns.forEach( btn => btn.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target.id == "name1"){
       formgen.innerHTML += `
       <label for="">Text </label>
       <input type="text" name="text" id="name">`
    }
   else if(e.target.id == "number1"){
        formgen.innerHTML += `
        <label for="">Number </label>
        <input type="number" name="number" id="number">`
     }
    else if(e.target.id == "date1"){
        formgen.innerHTML += `
        <label for="">Date </label>
        <input type="date" name="number" id="date">`
     }
     else if(e.target.id == "textArea1"){
        formgen.innerHTML += `
        <label for="">Text Area </label>
        <textarea id="textArea" name="textArea" rows="4" cols="20">`
     }
}
));
 let itemArray = [];
function store(e){ //stores items in the localStorage
    
   e.preventDefault();
   console.log('hello');
const formName1 = {
        formName: document.getElementById('formNameVal').value,
        name1: document.getElementById('name1').value,
        number1: document.getElementById('number1').value,
        date1: document.getElementById('date1').value,
        textarea1: document.getElementById('textArea1').value,
    }
    itemArray.push(formName1);
    console.log(itemArray);
    // localStorage.setItem(key,JSON.stringify(formName1));  
    //converting object to string
}
//window.onload =function(){ //ensures the page is loaded before functions are executed.
//    document.getElementById("carForm").onsubmit = store
//    document.getElementById("clearButton").onclick = clearStorage
 //   document.getElementById("removeButton").onclick = removeItem
 //   document.getElementById("retrieveButton").onclick = retrieveRecords
//}
const generate = document.querySelector('.generatebtn');
   generate.addEventListener('click', (e)=>{
       e.preventDefault();
       store(e);
   });