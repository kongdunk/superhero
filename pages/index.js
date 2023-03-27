import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import axios from "axios";
import useSound from "use-sound";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Music from "../components/music";

const inter = Inter({ subsets: ["latin"] });

export default function Splash() {
  const r = useRouter();

  const [thunder] = useSound("/sounds/thunder.mp3");

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="splashCont">
      <Head>
        <title>Superhero Battle</title>
        <meta name="description" content="Created by Daesan Kim, Ivan Li, and Ivan Tong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <img className="splash" src="../superhero-battle-cover.png" />
      <Music />
      <button
        className="start"
        onClick={() => {
          r.push("/selection");

          {
            thunder("public/sounds/thunder.mp3");
          }
        }}
      >
        START
      </button>
    </div>
  );
}
