import { createContext, useEffect, useState } from "react";
import { IContext } from "./types";
import stacks from "./utils/stacks";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const Context = createContext({} as IContext);

const ContextProvider = ({ children }: { children: JSX.Element }) => {
    const [usingDarkMode, setUsingDarkMode] = useState(true);
    const [displayedStack, setDisplayedStack] = useState(stacks[0].stack);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [isModalShowing, setIsModalShowing] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('usingDarkMode') == 'false')
            setUsingDarkMode(!usingDarkMode);

        const resizeTracker = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', resizeTracker);

        return () => window.removeEventListener('resize', resizeTracker);
    }, [])

    useEffect(() => {

        if (isModalShowing)
            return disableBodyScroll(document.body);

        enableBodyScroll(document.body)
        
    }, [isModalShowing])

    return (
        <Context.Provider value={{
            usingDarkMode,
            setUsingDarkMode,
            displayedStack,
            setDisplayedStack,
            windowWidth,
            setWindowWidth,
            isModalShowing,
            setIsModalShowing
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;