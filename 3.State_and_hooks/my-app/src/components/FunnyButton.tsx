import { useEffect, useState } from "react"

const randomTexts = [
    "hello",
    "Hi",
    "Bonjorno",
    "good morning",
    "greeting"
]

export const FunnyButton = () => {
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
        setGreeting(chooseGreeting())
    }, [])

    function chooseGreeting() {
        const randomId = Math.floor(Math.random() * 5)
        console.log(randomId)
        return randomTexts[randomId]
    }

    const handleChooseGreeting = () => {
        setGreeting(chooseGreeting())
    }
    return (
        <button onClick={handleChooseGreeting} style={{width: "200px", height: "40px", textAlign: "center"}}>{greeting}</button>
    )
}