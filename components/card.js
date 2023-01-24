import styled from "styled-components"

const CardCont = styled.div`
    width: 350px;
    height: 500px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 8px #dbdbdb;
    border-radius: 10px;
    background-color: #265fab;
    color: white;
    position: relative;
`

const ImgCont = styled.img`
    width: 100%;
    height: 85%;
    object-fit: cover;
    margin: 0.75em;
`

const Name = styled.span`
    font-size: 2em;
    font-weight: bold;
`

const PowerCont = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 10px #dbdbdb;
    border-radius: 100%;
    position: absolute;
    top: 7.75em;
    background-color: #265fab;
    font-size: 3em;
`

export default function Card({ name, src }){


    return (
        <CardCont>
            <Name>{name}</Name>
            <ImgCont src={src}/>
            <PowerCont>100</PowerCont>
        </CardCont>
    )
}