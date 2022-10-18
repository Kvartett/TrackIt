import styled from "styled-components"

export default function RegisterForm() {
    return (
        <Form>
            <input name="email" placeholder="Email" type="email" />
            <input name="password" placeholder="Password" type="password" />
            <input name="name" placeholder="Name" type="text" />
            <input name="image" placeholder="Image" type="text" />
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