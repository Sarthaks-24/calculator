const answer = document.getElementById('answer');
let value="";
function append(val){
    value+=val;
    answer.textContent = value;
}

function del(){
    value = value.slice(0,value.length-1);
    answer.textContent=value;
}

function calculate(){
    try{
        value = String(eval(value));
    answer.textContent = value;
    }catch{
        answer.textContent = `Error: `;
    }
}

function cleard(){
    value ="";
    answer.textContent= 0;
}