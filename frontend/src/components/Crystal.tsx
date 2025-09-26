// Crystal.tsx
import { forwardRef, useImperativeHandle, useRef } from "react";
import crystalImg from "../assets/crystal-px.png";

export interface CrystalRef {
    triggerShake: () => void;
}

const Crystal = forwardRef<CrystalRef>((_, ref) => {
    const imgRef = useRef<HTMLImageElement | null>(null);

    useImperativeHandle(ref, () => ({
        triggerShake() {
            if (!imgRef.current) return;
            const el = imgRef.current;

            el.classList.remove("shake");
            void el.offsetWidth;
            el.classList.add("shake");

            el.addEventListener(
                "animationend",
                () => el.classList.remove("shake"),
                { once: true }
            );
        },
    }));

    return (
        <div className="crystal-wrapper">
            <img ref={imgRef} className="crystal" src={crystalImg} alt="crystal" />
        </div>
    );
});

export default Crystal;
