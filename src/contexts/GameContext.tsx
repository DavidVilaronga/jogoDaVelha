import { createContext, ReactNode, useState } from "react";
import { OWinModal } from "../components/OWinModal";
import { XWinModal } from "../components/XWinModal";

interface GameContextData {
    activeX1: number;
    select1: () => void;
    activeX2: number;
    select2: () => void;
    activeX3: number;
    select3: () => void;
    activeX4: number;
    select4: () => void;
    activeX5: number;
    select5: () => void;
    activeX6: number;
    select6: () => void;
    activeX7: number;
    select7: () => void;
    activeX8: number;
    select8: () => void;
    activeX9: number;
    select9: () => void;
    activeO1: number;
    activeO2: number;
    activeO3: number;
    activeO4: number;
    activeO5: number;
    activeO6: number;
    activeO7: number;
    activeO8: number;
    activeO9: number;
    scoreX: number;
    scoreO: number;
    restart: () => void;
}

interface GameProviderProps {
    children: ReactNode
}

export const GameContext = createContext({} as GameContextData)

export function GameProvider({children}: GameProviderProps) {
    const [ playerX, setPlayerX ] = useState(true)
    const [ playerO, setPlayerO ] = useState(false)
    const [ activeX1, setActiveX1 ] = useState(0)
    const [ activeX2, setActiveX2 ] = useState(0)
    const [ activeX3, setActiveX3 ] = useState(0)
    const [ activeX4, setActiveX4 ] = useState(0)
    const [ activeX5, setActiveX5 ] = useState(0)
    const [ activeX6, setActiveX6 ] = useState(0)
    const [ activeX7, setActiveX7 ] = useState(0)
    const [ activeX8, setActiveX8 ] = useState(0)
    const [ activeX9, setActiveX9 ] = useState(0)
    const [ activeO1, setActiveO1 ] = useState(0)
    const [ activeO2, setActiveO2 ] = useState(0)
    const [ activeO3, setActiveO3 ] = useState(0)
    const [ activeO4, setActiveO4 ] = useState(0)
    const [ activeO5, setActiveO5 ] = useState(0)
    const [ activeO6, setActiveO6 ] = useState(0)
    const [ activeO7, setActiveO7 ] = useState(0)
    const [ activeO8, setActiveO8 ] = useState(0)
    const [ activeO9, setActiveO9 ] = useState(0)
    const [ isXWin, setIsXWin ] = useState(false)
    const [ isOWin, setIsOWin ] = useState(false)
    const [ scoreX, setScoreX ] = useState(0)
    const [ scoreO, setScoreO ] = useState(0)

    function select1() {
        if ( playerX ) {
            setActiveX1(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO1(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    function select2() {
        if ( playerX ) {
            setActiveX2(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO2(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    function select3() {
        if ( playerX ) {
            setActiveX3(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO3(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    function select4() {
        if ( playerX ) {
            setActiveX4(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO4(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    function select5() {
        if ( playerX ) {
            setActiveX5(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO5(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    function select6() {
        if ( playerX ) {
            setActiveX6(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO6(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    function select7() {
        if ( playerX ) {
            setActiveX7(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO7(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    function select8() {
        if ( playerX ) {
            setActiveX8(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO8(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    function select9() {
        if ( playerX ) {
            setActiveX9(1)
            setPlayerO(true)
            setPlayerX(false)
        }
        if ( playerO ) {
            setActiveO9(1)
            setPlayerX(true)
            setPlayerO(false)
        }
    }

    if ( activeX1==1 && activeX2==1 && activeX3==1 ||
         activeX4==1 && activeX5==1 && activeX6==1 ||
         activeX7==1 && activeX8==1 && activeX9==1 ||
         activeX1==1 && activeX4==1 && activeX7==1 ||
         activeX2==1 && activeX5==1 && activeX8==1 ||
         activeX3==1 && activeX6==1 && activeX9==1 ||
         activeX1==1 && activeX5==1 && activeX9==1 ||
         activeX3==1 && activeX5==1 && activeX7==1 
         ) {

             setTimeout(()=>{

                xWin()
                newGame()
             }, 500)
         }

    if ( activeO1==1 && activeO2==1 && activeO3==1 ||
        activeO4==1 && activeO5==1 && activeO6==1 ||
        activeO7==1 && activeO8==1 && activeO9==1 ||
        activeO1==1 && activeO4==1 && activeO7==1 ||
        activeO2==1 && activeO5==1 && activeO8==1 ||
        activeO3==1 && activeO6==1 && activeO9==1 ||
        activeO1==1 && activeO5==1 && activeO9==1 ||
        activeO3==1 && activeO5==1 && activeO7==1 
        ) {
            setTimeout(()=>{
                oWin()
                newGame()
            },500)
        }

    function xWin() {
        setIsXWin(true)
        setTimeout(() => {
            setIsXWin(false)
            setScoreX( scoreX + 1 )        
        },1500)
    }

    function oWin() {
        setIsOWin(true)
        setTimeout(()=>{
            setIsOWin(false)
            setScoreO( scoreO + 1 )
        },1500)
    }

    function newGame() {
        setActiveX1(0)
        setActiveX2(0)
        setActiveX3(0)
        setActiveX4(0)
        setActiveX5(0)
        setActiveX6(0)
        setActiveX7(0)
        setActiveX8(0)
        setActiveX9(0)
       setActiveO1(0)
       setActiveO2(0)
       setActiveO3(0)
       setActiveO4(0)
       setActiveO5(0)
       setActiveO6(0)
       setActiveO7(0)
       setActiveO8(0)
       setActiveO9(0)
    }

    function restart() {
        newGame()
        setScoreX(0)
        setScoreO(0)
    }

    return(
        <GameContext.Provider
            value={{
                activeX1,
                select1,
                activeX2,
                select2,
                activeX3,
                select3,
                activeX4,
                select4,
                activeX5,
                select5,
                activeX6,
                select6,
                activeX7,
                select7,
                activeX8,
                select8,
                activeX9,
                select9,
                activeO1,
                activeO2,
                activeO3,
                activeO4,
                activeO5,
                activeO6,
                activeO7,
                activeO8,
                activeO9,
                scoreX,
                scoreO,
                restart
            }}    
        >
            {children}

            {isXWin && <XWinModal/>}
            {isOWin && <OWinModal/>}
        </GameContext.Provider>
    )
}