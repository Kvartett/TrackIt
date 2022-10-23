import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Footer() {
    const navigate = useNavigate()

    function goToHabits() {
        navigate("/habits")
    }

    function goToToday() {
        navigate("/today")
    }

    function goToHistoric() {
        navigate("/historic")
    }

    return (
        <FooterContainer>
            <p onClick={goToHabits}>Habits</p>
            <div onClick={goToToday}>Hoje</div>
            <p onClick={goToHistoric}>Historic</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
    div {
        width: 91px;
        height: 91px;
        background-color: #52B6FF;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 40px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
` 