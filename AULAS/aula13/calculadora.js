
let txtValue = '';

function limpar(){
    txtValue = '';
    alert('limpou')    
    updateText();
}

function apagarTxt(){

}

function updateText(){
    document.querySelector('#barTxt').value = txtValue;
}


function addOperator(operador){
    txtValue += operador;
    updateText()
}