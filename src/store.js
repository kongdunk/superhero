import produce from "immer";
import { useEffect } from "react";
import { create } from "zustand"; 
import { persist, createJSONStorage, devtools } from "zustand/middleware"


const useStore = create(
    persist(
    (set) => ({
        playerCard: { },
        setPlayerCard: (playerCard) => set({playerCard}),
        cardPower: 0,
        setCardPower: (cardPower) => set({cardPower}),
        botCard: { },
        setBotCard: (botCard) => set({botCard}),
        botPower: 0,
        setBotPower: (botPower) => set({botPower}),
    }),
    {
        name: "playerCardStorage",
        getStorage: () => sessionStorage
    }
    ))

export default useStore