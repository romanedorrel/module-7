import { useState } from "react";
import { useUserContext } from "../context/EmojiContext";
function Emojis() {
    const [mood, setMood] = useState('😊');
    
    const {currentEmoji, handleUpdateEmoji} = useUserContext();
    // Calls setMood with a conditional state value
    const handleEmoji = () => {
    let newMood = '😊';
    if (mood === '😊') newMood = '😢';
    else if( mood === '😢') newMood = '😫';
    setMood(newMood)
    handleUpdateEmoji({emoji: newMood});
    }
    
    return (

    <div className="Emojis">
        Current Mood: {mood}
        {/* Using custom event handler functions */}
        <button onClick={handleEmoji}>Change Mood</button>
    </div>
    )
    }
export default Emojis;    