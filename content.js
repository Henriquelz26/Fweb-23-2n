function validaBusca(){
    if(document.querySelector('#inputlupa').value == ''){
        alert('Busca não pode estar vazio')
        return false
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;