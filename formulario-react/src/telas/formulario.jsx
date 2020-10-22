import React, { useState } from 'react'

function Formulario() {
    const [pessoa, alteraPessoa] = useState({})

    function onChangeUm(event) {
        alteraPessoa({
            ...pessoa,
            nome: event.target.value
        })
    }

    function onChangeDois(event) {
        alteraPessoa({
            ...pessoa,
            idade: event.target.value
        })
    }

    function onChangeTres(event) {
        alteraPessoa({
            ...pessoa,
            telefone: event.target.value
        })
    }

    function onChangeQuatro(event){
        alteraPessoa({
       ...pessoa,
            cidade: event.target.value
        })
    }

    function onChangeCinco(event){
        alteraPessoa({
            ...pessoa,
            email: event.target.value
        })
    }

    function onChangeSeis(event){
        alteraPessoa({
            empregado: event.target.checked,
        })
    }

    function onChangeSete(event){
        alteraPessoa({
            ...pessoa,
            dataNascimento: event.target.value
        })
    }

    function onChangeOito(event){
        alteraPessoa({
            ...pessoa,
            endereco: event.target.value
        })
    }

    function onChangeNove(event){
        alteraPessoa({
            ...pessoa,
            estado:event.target.value
        })
    }




    return <form>
        <input onChange={onChangeUm} type="text" name="nome" id="1" />
        <input onChange={onChangeDois} type="number" name="idade" id="2" />
        <input onChange={onChangeTres} type="number" name="telefone" id="3" />
        <input onChange={onChangeQuatro} type="text" name="cidade" id="4" />
        <input onChange={onChangeCinco} type="email" name="email" id="5" />
        <input onChange={onChangeSeis} type="checkbox" name="emprego" id="6" />
        <input onChange={onChangeSete} type="text" name="dataNascimento" id="7" />
        <input onChange={onChangeOito} type="text" name="endereco" id="8" />
        <input onChange={onChangeNove} type="text" name="estado" id="9" />

        <p>Meu nome é {pessoa.nome}</p>
        <p>Minha Idade é {pessoa.idade}</p>
        <p>Meu Telefone é {pessoa.telefone}</p>
        <p>Minha Cidade é {pessoa.cidade}</p>
        <p>Meu Email é {pessoa.email}</p>
        <p>Eu nasci em {pessoa.dataNascimento}</p>
        <p>Moro aqui : {pessoa.endereco}</p>
        <p>Amo esse estado aqui : {pessoa.estado}</p>

        

    </form>
}

export default Formulario