import { create } from "zustand";

const useStore = create((set) => ({
    playerCard: { image: "na" },
    setPlayerCard: (card) =>
        set({card}),
}))

export default useStore