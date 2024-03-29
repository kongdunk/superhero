import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { use, useEffect, useState } from "react";
import Lottie from "lottie-react";
import LoadingAnimation from "../public/loading.json";
import useSound from "use-sound";
import { bgImages } from "../public/bg";
import useStore from "../src/store";
import Music from "../components/music";

const inter = Inter({ subsets: ["latin"] });

import Card from "../components/card";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  var key = "5714346188686087";
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [playerUrl, setPlayerUrl] = useState("");
  const playerCard = useStore((state) => state.playerCard);
  const setPlayerCard = useStore((state) => state.setPlayerCard);
  const botCard = useStore((state) => state.botCard);
  const setBotCard = useStore((state) => state.setBotCard);
  const [cardOption1, setCardOption1] = useState({});
  const [cardOption2, setCardOption2] = useState({});
  const [cardOption3, setCardOption3] = useState({});
  const [cardOption4, setCardOption4] = useState({});
  const [cardOption5, setCardOption5] = useState({});
  const [cardOption6, setCardOption6] = useState({});
  const cardPower = useStore((state) => state.cardPower);
  const setCardPower = useStore((state) => state.setCardPower);
  const botPower = useStore((state) => state.botPower);
  const setBotPower = useStore((state) => state.setBotPower);
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");
  const words = useStore((state) => state.words);
  //SHOWS SELECTED CARD
  const [showCard, setShowCard] = useState(false);
  const [showCaption, setCaption] = useState(false);

  // BUTTON COLOE CHANGE
  const [color, setColor] = useState("gray");
  const handleColor = () => {
    setColor(color === "gray" ? "#d10a0a" : "#d10a0a");
  };

  //SOUND
  const [thunder] = useSound("/sounds/thunder.mp3");
  const [sword] = useSound("/sounds/sword.mp3");

  //BG Image
  const [bg, setBg] = useState(Math.floor(Math.random() * 4));

  /* FUNCTION FOR CALLING SUPERHERO API DATA TO cardOptions */
  function setCharacter(setcardoption, characterID) {
    useEffect(() => {
      //axios.get('https://superheroapi.com/api/5714346188686087/search/iron%20man')
      axios
        .get(`https://superheroapi.com/api.php/${key}/${characterID}`)
        .then((response) => {
          
          console.log(response.data.powerstats.combat);
          if(response.data.powerstats.combat == "null" || response.data.image == 'null') {
            window.location.reload(true)
          } else {
            console.log(response.data);
            setcardoption(response.data);
          }
          
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  }

  // function getQuote() {
  //   useEffect(() => {
  //     axios
  //       .get("https://www.affirmations.dev/")
  //       .then((response) => {
  //         console.log(response);
  //         setQuote(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  // }

  //CALCULATES SELECTED CARDS TOTAL POWERSTAT
  function calculatePower(player, setPlayerPower) {
    var power = 0;
    var stats = [];

    
      stats.push(player.powerstats.combat);
      stats.push(player.powerstats.durability);
      stats.push(player.powerstats.intelligence);
      stats.push(player.powerstats.power);
      stats.push(player.powerstats.speed);
      stats.push(player.powerstats.strength);

      stats.forEach((stat) => {
        const num = parseInt(stat);
        power += num;
      });
      setPlayerPower(power);
  }

  //LOADING ANIMATION TIME
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  //LOADING ANIMATION TIME
  useEffect(() => {
    console.log(playerCard);
  }, []);
  /* function for only selecting one SUPERHERO checkbox  */
  function onlySelect(id, playerCard) {
    let max = 6;
    for (let i = 1; i < max; i++) {
      document.getElementById("check" + i).checked = false;
    }

    document.getElementById(id).checked = true;

    console.log(id)

      setPlayerCard(playerCard);
      calculatePower(playerCard, setCardPower);
      console.log(playerCard);
      setName(playerCard.name);
      setPlayerUrl(playerCard.image.url);
  
    
  }

  /* CALLING THE FUNCTION TO GET THE SUPERHERO DATA */  
  setCharacter(setCardOption1, Math.floor(Math.random() * 731 + 1));
  setCharacter(setCardOption2, Math.floor(Math.random() * 731 + 1));
  setCharacter(setCardOption3, Math.floor(Math.random() * 731 + 1));
  setCharacter(setCardOption4, Math.floor(Math.random() * 731 + 1));
  setCharacter(setCardOption5, Math.floor(Math.random() * 731 + 1));
  setCharacter(setCardOption6, Math.floor(Math.random() * 731 + 1));
  setCharacter(setBotCard, Math.floor(Math.random() * 731 + 1));

  // getQuote();
  useEffect( () => {
    getQuote()
  }, []);

  async function getQuote() {
    const res = await axios.get("https://type.fit/api/quotes");
    const quotes = res.data;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    console.log(quote);
  }
  

  //LOADING PAGE
  if (loading) {
    return (
      <div className="loadingCont">
            {/* <div className="quote"> {quote.text} </div> */}
        {/* <div className="quote">{quote}</div> */}
        <Lottie
          className="loader"
          style={{ 
            width: 200, 
            height: 200,
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
          animationData={LoadingAnimation}
          loop={true}
        />
        <img className="loadingSplash" src="../superhero-battle-cover.png" />
      </div>
    );
  }

  //CARD SELECTION
  return (
    <>
      <Head>
        <title>Superhero Battle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <main className="selectionCont">
        <Music />

          <div className="characterSelectionCont">  
            <div className="charSelTitle">
              <h1>Choose Fighter</h1>
            </div>
            <div className="optionsContainer">
              <div className="cardCont">
                <img
                  src={cardOption1.image.url}
                  alt=""
                  srcSet=""
                />
                {cardOption1.name}{" "}
                <input
                  className="input"
                  id="check1"
                  type="checkbox"
                  onChange={(e) => onlySelect(e.target.id, cardOption1)}
                  onClick={() => {
                    setShowCard(true);
                    setCaption(true);
                    handleColor();
                    {
                      thunder("/sounds/thunder.mp3");
                    }
                  }}
                />
              </div>
              <div className="cardCont">
                <img
                  src={cardOption2.image.url}
                  alt=""
                  srcSet=""
                />
                {cardOption2.name}{" "}
                <input
                  id="check2"
                  type="checkbox"
                  onChange={(e) => onlySelect(e.target.id, cardOption2)}
                  onClick={() => {
                    setShowCard(true);
                    setCaption(true);
                    handleColor();
                    {
                      thunder("public/sounds/thunder.mp3");
                    }
                  }}
                />
              </div>
              <div className="cardCont">
                <img
                  src={cardOption3.image.url}
                  alt=""
                  srcSet=""
                />
                {cardOption3.name}{" "}
                <input
                  id="check3"
                  type="checkbox"
                  onChange={(e) => onlySelect(e.target.id, cardOption3)}
                  onClick={() => {
                    setShowCard(true);
                    setCaption(true);
                    handleColor();
                    {
                      thunder("public/sounds/thunder.mp3");
                    }
                  }}
                />
              </div>
              <div className="cardCont">
                <img
                  src={cardOption4.image.url}
                  alt=""
                  srcSet=""
                />
                {cardOption4.name}{" "}
                <input
                  id="check4"
                  type="checkbox"
                  onChange={(e) => onlySelect(e.target.id, cardOption4)}
                  onClick={() => {
                    setShowCard(true);
                    setCaption(true);
                    handleColor();
                    {
                      thunder("public/sounds/thunder.mp3");
                    }
                  }}
                />
              </div>
              <div className="cardCont">
                <img
                  src={cardOption5.image.url}
                  alt=""
                  srcSet=""
                />
                {cardOption5.name}{" "}
                <input
                  id="check5"
                  type="checkbox"
                  onChange={(e) => onlySelect(e.target.id, cardOption5)}
                  onClick={() => {
                    setShowCard(true);
                    setCaption(true);
                    handleColor();
                    {
                      thunder("public/sounds/thunder.mp3");
                    }
                  }}
                />
              </div>
              <div className="cardCont">
                <img
                  src={cardOption6.image.url}
                  alt=""
                  srcSet=""
                />
                {cardOption6.name}{" "}
                <input
                  className="input"
                  id="check1"
                  type="checkbox"
                  onChange={(e) => onlySelect(e.target.id, cardOption6)}
                  onClick={() => {
                    setShowCard(true);
                    setCaption(true);
                    handleColor();
                    {
                      thunder("/sounds/thunder.mp3");
                    }
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="selectedCont">
            <div className="previewCont">     
              <div className="playerSelectCont">
                {showCard ? (
                  <Card name={name} src={playerUrl} power='?' />
                ) : null}
                {showCaption ? (
                  <h4> Your Superhero: {playerCard.name} </h4>
                ) : null}
              </div>
              <div className="botCont">
                <Card name={botCard.name} src={botCard.image.url} power='?' />
                <h4> You will be fighting against: {botCard.name}</h4>
              </div>
            </div> 
            <button
                className="battleButton"
                style={{ backgroundColor: color }}
                title="Select a Character and Start!"
                onClick={async () => {
                  if (color === "#d10a0a") {
                    {
                      sword("public/sounds/sword.mp3");
                    }
                    await calculatePower(botCard, setBotPower);
                    router.push("/battle");
                  } else {
                    null
                  }
                }}
              >
                Battle
            </button> 
          </div>
          <img className="bgImg" src={bgImages[bg].imageUrl} />
      </main>
    </>
  );
}
