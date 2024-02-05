import { AnimationControls } from "framer-motion";
import { create } from "zustand";

interface CursorStore {
    show: boolean;
    setShow: (show: boolean) => void;
    controlled: boolean;
    setControlled: (controlled: boolean) => void;
    controls: AnimationControls | null;
    setControls: (controls: AnimationControls) => void;
    onAnimation: () => void;
    setOnAnimation: (onAnimation: () => void) => void;
}

const useCursor = create<CursorStore>((set) => ({
    show: true,
    setShow: (show) => set({ show }),
    controlled: false,
    setControlled: (controlled) => set({ controlled }),
    controls: null,
    setControls: (controls) => set({ controls }),
    onAnimation: () => {},
    setOnAnimation: (onAnimation) => set({ onAnimation }),
}));

export default useCursor;
