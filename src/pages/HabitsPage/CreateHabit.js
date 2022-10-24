import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls"
import WEEKDAYS from "../../constants/weekdays"
import { useAuth } from "../../providers/auth"
import DayButton from "./DayButton"
import { ThreeDots } from "react-loader-spinner"

export default function CreateHabit(props) {
    const { user } = useAuth()
    const [selectedDays, setSelectedDays] = useState([])
    const [habit, setHabit] = useState({ name: "" })
    const { addHabit, setAddHabit, reloadHabits, isLoading, setIsLoading } = props

    function handleHabit(e) {
        const { value } = e.target
        setHabit({ ...habit, name: value })
    }

    function sendHabit() {
        setIsLoading(true)
        if (habit.name.length === 0) {
            alert("Give a name for your habit")
            setIsLoading(false)
        } else if (selectedDays.length === 0) {
            alert("Select at least one day")
            setIsLoading(false)
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

            axios.post(`${BASE_URL}/habits`, body, config)
                .then(res => {
                    setHabit("")
                    setSelectedDays([])
                    setAddHabit(false)
                    reloadHabits()
                })
                .catch(err => {
                    alert(err.response.data.message)
                    setIsLoading(false)
                })

        }
    }

    function setInput() {
        return isLoading ? (
            <input type="text" value={habit.name} placeholder="Habit name" disabled />
        ) : (
            <input type="text" value={habit.name} onChange={handleHabit} placeholder="Habit name" />
        )
    }

    function setButton() {
        return isLoading ? (
            <LoadButton>
                <ThreeDots color="#FFFFFF" height={35} width={35} />
            </LoadButton>
        ) : (
            <SaveButton onClick={sendHabit}>Save</SaveButton>
        )
    }

    const input = setInput()
    const button = setButton()

    if (addHabit === false) {
        return (<></>)
    }

    return (
        <CreateHabitContainer>
            {input}
            <DayButtons>
                {WEEKDAYS.map(({ day, initials }, i) => <DayButton selectedDays={selectedDays} setSelectedDays={setSelectedDays} day={day} initials={initials} key={i} />)}
            </DayButtons>
            <DecisionButtons>
                <CancelButton onClick={() => setAddHabit(false)}>Cancel</CancelButton>
                {button}
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
        color: #808080;
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

const LoadButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52B6FF;
`