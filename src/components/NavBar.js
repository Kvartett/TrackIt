import styled from "styled-components"
import { useAuth } from "../providers/auth"

export default function NavBar() {
    const { user } = useAuth()

    return (
        <NavContainer>
            <p>TrackIt</p>
            <img src={`${(user.image === "") ? "https://mod.go.ke/wp-content/uploads/2021/04/default-profile-pic.png" : user.image}`} />
        </NavContainer>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    p {
        font-family: 'playball';
        font-style: normal;
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 99px;
    }
`