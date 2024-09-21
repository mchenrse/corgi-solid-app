import { createSignal } from "solid-js";

const [isSignedIn, _setSignedIn] = createSignal(false)

if (typeof window !== 'undefined') {
    _setSignedIn(localStorage.getItem("isSignedIn") == "true");
}

function setSignedIn(value: boolean) {
    if (value) {
        localStorage.setItem("isSignedIn", "true");
    } else {
        localStorage.removeItem("isSignedIn");
    }
    _setSignedIn(value);
}

export {
    isSignedIn,
    setSignedIn
}