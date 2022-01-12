import React, { useState } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

function PostApi() {

    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [plan, setPlan] = useState('')

    const Alunos = () => {
        Axios.post(`https://api-academia-alunos.herokuapp.com/alunos`, { nome: name, cpf: cpf, endereco: address, estado: state, telefone: phone, email: email, plano: plan }).then((response) => {
            console.log(response)
        }
        )
    }

    const handleChange = ({target: {value, name}}) => {

        console.log (value)
        
        const data = {
        name: setName(value),
        cpf: setCpf(value),
        address: setAddress(value),
        state: setState(value),
        phone: setPhone(value),
        email: setEmail(value),
        plan: setPlan(value),
    }

    return data[name]
    } 
    console.log ('nome:', name)
    console.log ('cpf:', cpf)

    return (<div>
        <DivPrincipal>
            <form>
                <label>Name</label>
                <input type='text' onChange={handleChange} name='name'/>
                <label>CPF</label>
                <input type='text' onChange={handleChange} name='cpf' />
                <label>Address</label>
                <input type='text' onChange={handleChange} name='endereco' />
                <label>State</label>
                <input type='text' onChange={handleChange} name='estado' />
                <label>Phone</label>
                <input type='text' onChange={handleChange} name='telefone' />
                <label>Email</label>
                <input type='email' onChange={handleChange} name='email' />
                <label>Plan</label>
                <input type='text' onChange={handleChange} name='plano' />
                
            </form>
            <button onClick={Alunos}>Save</button>
        </DivPrincipal>
    </div>);
}

const DivPrincipal = styled.div`
min-height: 692px;
position: fixed;
bottom: 0;
left: 0;
right: 0;
top: 0;
z-index: 0;
overflow: hidden;
background: linear-gradient(225deg, #ffc93f 0, #ffba41 12.5%, #ffaa43 25%, #ff9a45 37.5%, #f98946 50%, #eb7946 62.5%, #de6b47 75%, #d15e48 87.5%, #c65449 100%);
`

export default PostApi;
