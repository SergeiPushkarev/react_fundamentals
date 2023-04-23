import { useMemo } from 'react'

export const useSortedPosts = (posts, sorting)=>{
    const sortedPosts = useMemo(()=>{
        if(sorting) {
            return [...posts].sort((a,b) => a[sorting].localeCompare(b[sorting]))
        } else return posts
        }, [sorting, posts]
    )
    return sortedPosts
}

export const usePosts = (posts, sorting, searched)=>{
    const sortedPosts = useSortedPosts(posts, sorting)
    const sortedAndSearhedPosts = useMemo(() =>{
        return sortedPosts.filter(a=> a.title.toLocaleLowerCase().includes(searched))
    }, [sortedPosts, searched])
    return sortedAndSearhedPosts
}