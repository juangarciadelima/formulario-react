import React, { useState } from 'react'

function Formulario() {
    const [pessoa, alteraPessoa] = useState(PegaDoLocalStorage('usuario'))

    function ColocaNoLocalStorage(chave,valor){
        return localStorage.setItem(chave, JSON.stringify(valor))
    }

    function PegaDoLocalStorage(chave){
        return JSON.parse(localStorage.getItem(chave))
    }

    


    function onChangeSupremo(event) {
        const valor = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const copia = {...pessoa}
        copia[event.target.name] = valor
        alteraPessoa(copia)
    }

    function salvaPessoa(){
        ColocaNoLocalStorage('usuario',pessoa)
        console.log(typeof pessoa)
    }




    return <form>
        <input onChange={onChangeSupremo} type="text" name="nome" id="1" />
        <input onChange={onChangeSupremo} type="number" name="idade" id="2" />
        <input onChange={onChangeSupremo} type="number" name="telefone" id="3" />
        <input onChange={onChangeSupremo} type="text" name="cidade" id="4" />
        <input onChange={onChangeSupremo} type="email" name="email" id="5" />
        <input onChange={onChangeSupremo} type="checkbox" name="emprego" id="6" />
        <input onChange={onChangeSupremo} type="text" name="dataNascimento" id="7" />
        <input onChange={onChangeSupremo} type="text" name="endereco" id="8" />
        <input onChange={onChangeSupremo} type="text" name="estado" id="9" />
        <button type = "button" onClick={salvaPessoa}>Salva Aqui</button>

        <p>Meu Nome é : {pessoa.nome}</p>
        <p>Minha Idade é :{pessoa.idade}</p>
        <p>Meu Telefone é :{pessoa.telefone}</p>
        <p>Minha Cidade é :{pessoa.cidade}</p>
        <p>Meu Email é :{pessoa.email}</p>
        <p>Eu nasci em :{pessoa.dataNascimento}</p>
        <p>Moro aqui : {pessoa.endereco}</p>
<p> {pessoa.nome} Está atualmente {pessoa.emprego ? "Empregado" : "Desempregado"}</p>
        <p>Amo esse estado aqui : {pessoa.estado}</p>

        

    </form>
}

export default Formulario