import { useMemo } from "react"
export const usePagination = (totalPages) => {
    const pagArray = useMemo(() => {
        let a = []
        for (let i = 0; i < totalPages; i++) {
            a.push(i+1)
        }
        return a
    }, [totalPages])
    return pagArray
}