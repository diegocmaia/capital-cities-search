import styled from 'styled-components'

const Box = styled.div`
    width: 60vw;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    position: relative;

    &:after {
        position: absolute;
        content: '';
        background-color: #000000;
        opacity: 0.5;
        width: 60vw;
        height: 15vh;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 5px;
    }
`

export default Box
