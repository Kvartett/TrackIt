import { useState } from "react"
import styled from "styled-components"
import WEEKDAYS from "../../constants/weekdays"

export default function DayButtons(props) {
    const { selectedDays, setSelectedDays, day, initials } = props
    const [selected, setSelected] = useState(false)

    function selectDay() {
        if (selected === false) {
            const newSelectedDays = [...selectedDays, day]
            setSelectedDays(newSelectedDays)
            setSelected(true)
        } else {
            const newSelectedDays = [...selectedDays]
            const removeDay = newSelectedDays.filter((e) => e !== day)
            setSelectedDays(removeDay)
            setSelected(false)
        }
    }

    return (
        <ButtonContainer selected={selected}>
            <button onClick={selectDay}>{initials}</button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    display: flex;
    justify-content: initial;
    align-items: center;
    margin-top: 8px;
    button {
        width: 30px;
        height: 30px;
        background-color: ${props => (props.selected === false) ? "#FFFFFF" : "#52B6FF"};
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