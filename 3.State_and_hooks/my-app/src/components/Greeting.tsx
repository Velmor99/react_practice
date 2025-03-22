import { useState, useEffect } from "react"

export const Greeting = () => {
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
        setGreeting("Hello Roman")
    }, [])

    return (
        <div>{greeting}</div>
    )
}