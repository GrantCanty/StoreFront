import { useEffect } from "react";

function useOnHover(ref: React.RefObject<HTMLInputElement>, handler: () => void) {
    useEffect(
        () => {
            const listener = (event: any) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return
                }
                handler()
            }
            document.addEventListener("mouseover", listener)
            return () => {
                document.removeEventListener("mouseout", listener)
            }
        },
        [ref, handler]
    )
}

export default useOnHover;