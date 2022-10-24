import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { useAuth } from "../providers/auth"

export default function Footer() {
    const navigate = useNavigate()
    const { percentage } = useAuth()

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
            <span onClick={goToToday} className="progress-bar">
                <CircularProgressbar
                    value={percentage}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={{
                        path: {
                            stroke: `#FFFFFF`,
                            strokeLinecap: "round",
                        },
                        trail: {
                            stroke: "#52B6FF",
                        },
                        text: {
                            fill: "#FFFFFF",
                            fontSize: "18px",
                        },
                        background: {
                            fill: "#52B6FF",
                        },
                    }}
                />
            </span>
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
    .progress-bar {
        width: 91px;
        height: 91px;
        margin-bottom: 40px;
    }
` 