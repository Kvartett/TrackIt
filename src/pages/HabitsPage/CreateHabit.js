import styled from "styled-components"

export default function CreateHabit() {
    return (
        <CreateHabitContainer>
            <input type="text" placeholder="Habit name" />
            <ButtonsContainer>
                <button>S</button>
                <button>M</button>
                <button>T</button>
                <button>W</button>
                <button>T</button>
                <button>F</button>
                <button>S</button>
            </ButtonsContainer>
            <DecisionButtons>
                <CancelButton>Cancel</CancelButton>
                <SaveButton>Save</SaveButton>
            </DecisionButtons>

        </CreateHabitContainer>
    )
}

const CreateHabitContainer = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: none;
    padding: 18px;
    box-sizing: border-box;
    margin-top: 15px;
    input {
        width: 303px;
        height: 45px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        box-sizing: border-box;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 11px;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: initial;
    align-items: center;
    margin-top: 8px;
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

const DecisionButtons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 29px;
    padding-left: 130px;
    button {
        width: 84px;
        height: 35px;
        border-radius: 4.5px;
        box-sizing: border-box;
    }
`

const CancelButton = styled.button`
    background-color: #FFFFFF;
    color: #52B6FF;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border: none;
`

const SaveButton = styled.button`
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    border: none;
`