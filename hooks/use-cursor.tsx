import React from "react";
import { create } from "zustand";

interface CursorStore {
    position: { x: number; y: number };
    setPosition: (position: { x: number; y: number }) => void;
    show: boolean;
    setShow: (show: boolean) => void;
}

const useCursor = create<CursorStore>((set) => ({
    position: { x: -100, y: -100 },
    setPosition: (position) => set({ position }),
    show: true,
    setShow: (show) => set({ show }),
}));

export default useCursor;
