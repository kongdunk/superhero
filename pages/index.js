import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Splash() {
  const r = useRouter();

  return (
    <div className="splashCont">
      <img className="splash" src="../placeholder.jpg" />
      <button className="start"
        onClick={() => {
          r.push("/selection");
        }}
      >
        Start
      </button>
    </div>
    
  );
}
