
let inputext = document.querySelector('#input');
let add = document.querySelector('#add');
let demo =  document.querySelector('#demo');
let view = document.querySelector('.view-container');
let content = document.querySelector('.content');


add.addEventListener('click',() =>{
    console.log(inputext.value);
    let notes = inputext.value;
    
    let newDiv =  document.createElement('div');
    let btn = document.createElement('button')
    let deletebtn = document.createElement('button');
    
    newDiv.className = 'views';
    view.appendChild(newDiv);
    newDiv.innerHTML = notes;
    
    btn.className = 'view-details';
    btn.innerHTML = 'view Details'
    newDiv.appendChild(btn);
    
    deletebtn.className = 'delete';
    deletebtn.innerHTML = 'deletenote';
    newDiv.appendChild(deletebtn);
    
    btn.addEventListener('click',viewTotalData);
    deletebtn.addEventListener('click',deletenotes);
    
    function viewTotalData(){
        let secondDiv = document.createElement('div');
        secondDiv.className = 'data-container';
        content.appendChild(secondDiv);
        
        let thirdDiv = document.createElement('div');
        thirdDiv.className = 'totaldata';
        secondDiv.appendChild(thirdDiv);
        thirdDiv.innerHTML = notes;
        
        content.addEventListener('click',function(){
            content.removeChild(secondDiv);
        });       
        
    }
    
   function deletenotes(){
       view.removeChild(newDiv);
   }

        
});


    

