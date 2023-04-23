export const getTotalPages = (totalPosts, limitPage) => {
    return Math.ceil(totalPosts/limitPage)
}