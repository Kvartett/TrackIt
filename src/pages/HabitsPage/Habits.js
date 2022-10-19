import styled from "styled-components"

export default function Habits() {
    return (
        <HabitsContainer>
            <Habit>
                <p>Play Video Games</p>
                <ButtonsContainer>
                    <button>S</button>
                    <button>M</button>
                    <button>T</button>
                    <button>W</button>
                    <button>T</button>
                    <button>F</button>
                    <button>S</button>
                </ButtonsContainer>
                <ion-icon name="trash-bin-outline"></ion-icon>
            </Habit>
        </HabitsContainer>
    )
}

const HabitsContainer = styled.ul`
    width: 100vw;
    margin-top: 30px;
`

const Habit = styled.li`
    background-color: #FFFFFF;
    width: 340px;
    height: 91px;
    padding: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
    p {
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    ion-icon {
        font-size: 18px;
        position: absolute;
        top: 12px;
        right: 10px;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: initial;
    align-items: center;
    margin-top: 10px;
    button {
        width: 30px;
        height: 30px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        margin: 0 1.8px;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        color: #DBDBDB;
    }
`