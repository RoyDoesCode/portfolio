import { CSSProperties } from "react";
import { create } from "zustand";

import { Position } from "@/types";

interface CursorStore {
    position: Position;
    setPosition: (position: Position) => void;
    show: boolean;
    setShow: (show: boolean) => void;
    radius: CSSProperties["width"];
}

const useCursor = create<CursorStore>((set) => ({
    position: { x: -100, y: -100 },
    setPosition: (position) => set({ position }),
    show: true,
    setShow: (show) => set({ show }),
    radius: "56px",
}));

export default useCursor;
