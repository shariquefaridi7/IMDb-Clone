"use client"
import { useEffect } from "react";

const error = ({ error, reset }) => {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <div className="text-center">
            <h1>Something went wrong !!</h1>
            <button onClick={() => reset()}> TRY AGAIN </button>

        </div>
    )
}

export default error;
