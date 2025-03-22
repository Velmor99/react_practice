import { useState } from "react"

export const MyForm = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name)
        setName(e.target.value)
    }

    const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name)
        setLastName(e.target.value)
    }
    return (
        <>
        <form>
            <input onChange={handleChangeName} name="name" />
            <input onChange={handleChangeLastName} name="last name" />
        </form>

        <div>
            <h2>Result</h2>
            <p>Name: {name}</p>
            <p>Last name: {lastName}</p>
        </div>
        </>
    )
}