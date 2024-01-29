import { CSSProperties } from "react";
import { create } from "zustand";

import { Position } from "@/types";
import { AnimationControls } from "framer-motion";

interface CursorStore {
    show: boolean;
    setShow: (show: boolean) => void;
    controlled: boolean;
    setCOntrolled: (controlled: boolean) => void;
    controls: AnimationControls | null;
    setControls: (controls: AnimationControls) => void;
}

const useCursor = create<CursorStore>((set) => ({
    show: true,
    setShow: (show) => set({ show }),
    controlled: false,
    setCOntrolled: (controlled) => set({ controlled }),
    controls: null,
    setControls: (controls) => set({ controls }),
}));

export default useCursor;
