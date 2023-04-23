import { useState } from "react";
export function useFetching (clbk){
    const [isLoading, setIsLoading] = useState(false)
    const [err, setError] = useState('')
    const fetching = async () =>{
        try {
            setIsLoading(true)
            await clbk()
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, err]
}