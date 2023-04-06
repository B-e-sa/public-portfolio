export interface ITheme {
    usingDarkMode?: boolean
}

export interface IStack extends ITheme {
    isShowing?: boolean
}

export interface IContext {
    usingDarkMode: boolean
    setUsingDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    displayedStack: string[]
    setDisplayedStack: React.Dispatch<React.SetStateAction<string[]>>,
    windowWidth: number
    setWindowWidth: React.Dispatch<React.SetStateAction<number>>
    isModalShowing: boolean
    setIsModalShowing: React.Dispatch<React.SetStateAction<boolean>>
};