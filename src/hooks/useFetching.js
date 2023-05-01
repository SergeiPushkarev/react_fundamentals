import { useState } from "react";
export function useFetching (clbk){
    const [isLoading, setIsLoading] = useState(false)
    const [err, setError] = useState('')
    const fetching = async (...arg) =>{
        try {
            setIsLoading(true)
            await clbk(...arg)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, err]
}