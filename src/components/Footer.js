import styled from "styled-components"

export default function Footer() {
    return (
        <FooterContainer>
            <p>Habits</p>
            <p>Historic</p>
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
` 