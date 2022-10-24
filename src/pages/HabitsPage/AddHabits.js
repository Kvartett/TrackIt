import { useState } from "react"
import styled from "styled-components"
import CreateHabit from "./CreateHabit"

export default function AddHabits(props) {
    const { reloadHabits, isLoading, setIsLoading } = props
    const [addHabit, setAddHabit] = useState(false)

    function goToCreateHabit() {
        setAddHabit(true)
    }

    return (
        <AddHabitsContainer>
            <AddContainer>
                <p>My Habits</p>
                <button onClick={goToCreateHabit}>+</button>
            </AddContainer>
            <CreateHabit reloadHabits={reloadHabits} addHabit={addHabit} setAddHabit={setAddHabit} isLoading={isLoading} setIsLoading={setIsLoading} />
        </AddHabitsContainer>
    )
}

const AddHabitsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const AddContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    button {
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 4.6px;
        border: none;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
    }
`