import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls"
import WEEKDAYS from "../../constants/weekdays"
import { useAuth } from "../../providers/auth"
import DayButton from "./DayButton"

export default function CreateHabit(props) {
    const { user } = useAuth()
    const [selectedDays, setSelectedDays] = useState([])
    const [habit, setHabit] = useState({ name: "" })
    const { addHabit, setAddHabit } = props

    function handleHabit(e) {
        const { value } = e.target
        setHabit({ ...habit, name: value })
    }

    function sendHabit() {
        if (habit.name.length === 0) {
            alert("Give a name for your habit")
        } else if (selectedDays.length === 0) {
            alert("Select at least one day")
        } else {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }

            const body = {
                ...habit,
                days: selectedDays.map(s => s)
            }
            console.log(body)

            axios.post(`${BASE_URL}/habits`, body, config)
                .then(res => {
                    setHabit("")
                    setSelectedDays([])
                    setAddHabit(false)
                })
                .catch(err => alert(err.response.data.message))
        }
    }


    if (addHabit === false) {
        return (<></>)
    }

    return (
        <CreateHabitContainer>
            <input type="text" value={habit.name} onChange={handleHabit} placeholder="Habit name" />
            <DayButtons>
                {WEEKDAYS.map(({ day, initials }, i) => <DayButton selectedDays={selectedDays} setSelectedDays={setSelectedDays} day={day} initials={initials} key={i} />)}
            </DayButtons>
            <DecisionButtons>
                <CancelButton onClick={() => setAddHabit(false)}>Cancel</CancelButton>
                <SaveButton onClick={sendHabit}>Save</SaveButton>
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

const DayButtons = styled.div`
    display: flex;
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