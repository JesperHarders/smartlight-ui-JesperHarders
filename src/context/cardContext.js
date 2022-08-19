import { createContext, useState } from "react";

export const CardContext = createContext(null)

const CardProvider = ({children}) => {
    const [cardData, setCardData] = useState(null)
    return (
        <CardContext.Provider value={{cardData, setCardData}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardProvider