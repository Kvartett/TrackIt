import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls"

export default function RegisterForm() {
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function sendRegister(e) {
        e.preventDefault()

        const body = { ...form }

        axios.post(`${BASE_URL}/auth/sign-up`, body)
            .then(res => {
                navigate("/")
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <Form onSubmit={sendRegister}>
            <input name="email" value={form.email} onChange={handleForm} placeholder="Email" type="email" required />
            <input name="password" value={form.password} onChange={handleForm} placeholder="Password" type="password" required />
            <input name="name" value={form.name} onChange={handleForm} placeholder="Name" type="text" required />
            <input name="image" value={form.image} onChange={handleForm} placeholder="Image" type="text" required />
            <button type="submit">Create Account</button>
        </Form>
    )
}

const Form = styled.form`
    width: 305px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 35px;
    input {
        background-color: #FFFFFF;
        width: 305px;
        height: 45px;
        margin-bottom: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 19px;
        line-height: 25px;
        color: #DBDBDB;
    }
    button {
        width: 305px;
        height: 45px;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        box-sizing: border-box;
    }
`