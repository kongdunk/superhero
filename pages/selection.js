import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../public/loading.json";

const inter = Inter({ subsets: ["latin"] });

import Card from '../components/card';


export default function Home() {
  var key = "5714346188686087";
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [playerCard, setPlayerCard] = useState({});
  const [cardOption1, setCardOption1] = useState({});
  const [cardOption2, setCardOption2] = useState({});
  const [cardOption3, setCardOption3] = useState({});
  const [cardOption4, setCardOption4] = useState({});
  const [cardOption5, setCardOption5] = useState({});
  const [cardOption1Image, setCardOption1Image] = useState("");

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  /* FUNCTION FOR CALLING SUPERHERO API DATA TO cardOptions */
  function setCharacter(setcardoption, characterID) {
    useEffect(() => {
      //axios.get('https://superheroapi.com/api/5714346188686087/search/iron%20man')
      axios
        .get(`https://superheroapi.com/api.php/${key}/${characterID}`)
        .then((response) => {
          console.log(response.data);
          setcardoption(response.data);
          setCardOption1Image(response.data.image.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  }

  function quote() {
    axios
      .get('https://www.affirmations.dev/')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* function for only selecting one SUPERHERO checkbox  */
  function onlySelect(id, playerCard) {
    for (let i = 1; i < 6; i++) {
      document.getElementById("check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
    setPlayerCard(playerCard);
  }

  /* CALLING THE FUNCTION TO GET THE SUPERHERO DATA */
  setCharacter(setCardOption1, 1);
  setCharacter(setCardOption2, 100);
  setCharacter(setCardOption3, 200);
  setCharacter(setCardOption4, 300);
  setCharacter(setCardOption5, 400);

  if (loading) {
    return (
      <div className="loadingCont">
        <div className="quote">{quote()}</div>
        <Lottie
        className="loader"
          style={{ width: 500, height: 500 }}
          animationData={LoadingAnimation}
          loop={true}
        />
        <img className="loadingSplash" src="../placeholder.jpg" />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="optionsContainer">
          <div className="cardContainer">
            <img
              style={{ height: "35vh" }}
              src={cardOption1Image}
              alt=""
              srcSet=""
            />
            {cardOption1.name}{" "}
            <input
              id="check1"
              type="checkbox"
              onChange={(e) => onlySelect(e.target.id, cardOption1)}
            />
          </div>
          <div className="cardContainer">
            <img
              style={{ height: "35vh" }}
              src={cardOption1Image}
              alt=""
              srcSet=""
            />
            {cardOption2.name}{" "}
            <input
              id="check2"
              type="checkbox"
              onChange={(e) => onlySelect(e.target.id, cardOption2)}
            />
          </div>
          <div className="cardContainer">
            <img
              style={{ height: "35vh" }}
              src={cardOption1Image}
              alt=""
              srcSet=""
            />
            {cardOption3.name}{" "}
            <input
              id="check3"
              type="checkbox"
              onChange={(e) => onlySelect(e.target.id, cardOption3)}
            />
          </div>

          <div className="cardContainer">
            <img
              style={{ height: "35vh" }}
              src={cardOption1Image}
              alt=""
              srcSet=""
            />
            {cardOption4.name}{" "}
            <input
              id="check4"
              type="checkbox"
              onChange={(e) => onlySelect(e.target.id, cardOption4)}
            />
          </div>
          <div className="cardContainer">
            <img
              style={{ height: "35vh" }}
              src={cardOption1Image}
              alt=""
              srcSet=""
            />
            {cardOption5.name}{" "}
            <input
              id="check5"
              type="checkbox"
              onChange={(e) => onlySelect(e.target.id, cardOption5)}
            />
          </div>
        </div>
        <div> Your Superhero: {playerCard.name} </div>

        <Card name={cardOption1.name} src={cardOption1Image}/>


      </main>
    </>
  );
}
