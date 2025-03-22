import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(prevState => prevState + 1)
    }

    const handleDecrease = () => {
        setCount(prevState => prevState - 1)
    }
    return (
        <div style={{display: "flex"}}>
            <button onClick={handleDecrease}>Decrease</button>
            <div style={{marginRight: "20px", marginLeft: "20px"}}>{count}</div>
            <button  onClick={handleIncrease}>Increase</button>
        </div>
    )
}