import { MutableRefObject, useRef, useState, useEffect } from 'react'

export type useInfiniteScrollType = {
    containerRef: MutableRefObject<HTMLDivElement | null>
    items: {
        name: string;
        date: string;
    }[]
}

const NUMBER_OF_ITEMS = 4

const useInfiniteScroll = function (
    items: {
        name: string;
        date: string;
    }[]

): useInfiniteScrollType {

    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
        null,
    )
    const [count, setCount] = useState<number>(1)

    const observer: IntersectionObserver = new IntersectionObserver(
        (entries, observer) => {
            if (!entries[0].isIntersecting) return;

            setCount(value => value + 1);
            observer.disconnect()
        }
    )

    useEffect(() => {
        if (
            NUMBER_OF_ITEMS * count >= items.length ||
            containerRef.current === null ||
            containerRef.current.children.length === 0
        )
            return

        observer.observe(
            containerRef.current.children[containerRef.current.children.length - 1])
    }, [count]
    )

    return {
        containerRef,
        items: items.slice(0, count * NUMBER_OF_ITEMS)
    }
}


export default useInfiniteScroll

