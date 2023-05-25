import { useRef, useEffect } from "react"

export const useObserver = (ref, isLoading, canLoad, func) =>{
    const pageObserver = useRef()
    useEffect(() => {
        if (isLoading) return;
        if (pageObserver.current) pageObserver.current.disconnect();
        var paginate = function (entries,observer) {
          if (entries[0].isIntersecting && canLoad) {
            func()
          }
        };
        pageObserver.current = new IntersectionObserver(paginate);
        pageObserver.current.observe(ref.current)
      }, [isLoading])
}