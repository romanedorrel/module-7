import { useState, createContext, useContext } from "react";
// Create the context
const UserContext = createContext();
// Custom provider component for this context.

export const UserProvider = (props) => {
// store the emoji in state at the top level
    const [currentEmoji, setCurrentEmoji] = useState({});
    // sets emoji in state, shared via context
    const handleUpdateEmoji = (emoji) => {
    setCurrentEmoji(emoji);
    }

    
    // Send both the current emoji and an update function
    return (
    <UserContext.Provider value={{currentEmoji, handleUpdateEmoji}}>
    {props.children}
    </UserContext.Provider>
);
}
// Custom hook allows easy access
// of this particular context from any child component
export const useUserContext = () => {
return useContext(UserContext);
}
