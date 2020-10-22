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
            ...pessoa,
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




    return <>
    <h1> Formulário Top</h1>
    <form>
    
        <input onChange={onChangeUm} type="text" name="nome" id="a" placeholder="Digite Seu Nome"/>
        <input onChange={onChangeDois} type="number" name="idade" id="b" placeholder="Coloque Sua Idade"/>
        <input onChange={onChangeTres} type="tel" name="telefone" id="c" placeholder="Coloque Seu Numero"/>
        <input onChange={onChangeQuatro} type="text" name="cidade" id="d" placeholder="Coloque Sua Cidade" />
        <input onChange={onChangeCinco} type="email" name="email" id="e" placeholder="Coloque Seu Email"/>
        <input onChange={onChangeSeis} type="checkbox"  id="f" />
        <input onChange={onChangeSete} type="date" name="dataNascimento" id="g" placeholder="Quando Voce Nasceu"/>
        <input onChange={onChangeOito} type="text" name="endereco" id="h"  placeholder="Onde Moras, Meu Templário"/>
        <input onChange={onChangeNove} type="text" name="estado" id="i" placeholder= "Voce Mora em qual estado?"/>

        <p>Meu nome é {pessoa.nome}</p>
        <p>Minha Idade é {pessoa.idade}</p>
        <p>Meu Telefone é {pessoa.telefone}</p>
        <p>Minha Cidade é {pessoa.cidade}</p>
        <p>Meu Email é {pessoa.email}</p>
        <p>Eu nasci em {pessoa.dataNascimento}</p>
        <p>Moro aqui : {pessoa.endereco}</p>
        <p>Amo esse estado aqui : {pessoa.estado}</p>
        <p>{pessoa.nome} esta atualmente {pessoa.empregado ? "Empregado" : "Desempregado"} </p>

        

    </form>
    </>
}

export default Formulario
