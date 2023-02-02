import styled from "styled-components"

const CardCont = styled.div`
    width: 300px;
    height: 400px;
    padding: 2.5em;
    padding-top: 2em;
    margin: 1em;
    margin-top: 2em;
    margin-right: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    position: relative;
    background-image: url("card.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const ImgCont = styled.img`
    width: 100%;
    height: 85%;
    object-fit: cover;
    margin: 0.75em;
    border-bottom-left-radius: 10px; 
    border-bottom-right-radius: 10px;
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
    border: solid 12px #dbdbdb;
    border-radius: 100%;
    position: absolute;
    top: -0.75em;
    right: -0.75em;
    background-color: #265fab;
    font-size: 2.5em;
`

export default function Card({ name, src, power }){


    return (
        <CardCont>
            <Name>{name}</Name>
            <ImgCont src={src}/>
            <PowerCont>{power}</PowerCont>
        </CardCont>
    )
}