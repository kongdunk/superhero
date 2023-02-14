import styled from "styled-components"  

const CardCont = styled.div`
    width: 300px;
    height: 400px;
    padding: 2.5em;
    padding-top: 2em;
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    position: relative;
    background-image: url("card.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transform-style: preserve-3d;
  animation: flip 0.5s 1 forwards;


    @media (max-width: 768px) {
    width: 200px;
    height: 300px;
    padding: 2.5em;
    padding-top: 2em;
    margin: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-image: url("card.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

`

const ImgCont = styled.img`
    width: 100%;
    height: 85%;
    object-fit: cover;
    margin: 0.75em;
    margin-top: 0.5em;
    border-radius: 10px;
    box-shadow: 1px 1px 15px 5px #0b0730;
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
    border-radius: 100%;
    position: absolute;
    top: -0.75em;
    right: -0.75em;
    background-color: #8cdeff;
    font-size: 2.5em;
    box-shadow:
        inset 0 0 20px 5px #309fff,
        inset 0 0 30px 2px #0f8efc,
        0 0 15px 1px #abd8ff,
        0 0 30px 10px #006ac7;
`

export default function Card({ name, src, power }){
    

    return (
        <CardCont>
            <ImgCont src={src}/>
            <Name>{name}</Name>
            <PowerCont>{power}</PowerCont>
        </CardCont>
    )
}