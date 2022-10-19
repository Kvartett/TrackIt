import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

export default function TodayPage() {
    return (
        <>
            <NavBar />
            <Footer />
            <ContentContainer>
                <h2>Monday, 17/10</h2>
                <p>Nenhum hábito concluido ainda</p>
                <DayHabitContainer>
                    <DayHabit>
                        <h3>Read a book</h3>
                        <p>Atual sequency: 3 days</p>
                        <p>Your record: 5 days</p>
                    </DayHabit>
                    <Retangle>
                    </Retangle>
                </DayHabitContainer>
            </ContentContainer>
        </>
    )
}

const ContentContainer = styled.div`
    height: 100vh;
    background-color: #f3f3f3;
    padding: 90px 17px 100px 17px;
    h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p {
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`

const DayHabitContainer = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 13px;
    box-sizing: border-box;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
`

const DayHabit = styled.div`
    h3 {
        display: inline-block;
        height: 30px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    p {
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
`

const Retangle = styled.div`
    background-color: #E7E7E7;
    width: 69px;
    height: 69px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    box-sizing: border-box;
`