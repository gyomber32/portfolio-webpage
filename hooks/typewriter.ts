import { useCallback, useState } from "react"

export const useTypewriterEffect = (text: string, idSelector: string, speed: number = 100) => {
    let i = 0;
    const typewriterEffect = useCallback(() => {
        if (!text.length || !idSelector) {
            return null;
        }
        const domElement = document.getElementById(idSelector);
        if (!domElement) {
            return null;
        }
        if (i < text.length) {
            domElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriterEffect, speed);
        }
    }, [text, idSelector, speed]);
    return typewriterEffect;
}