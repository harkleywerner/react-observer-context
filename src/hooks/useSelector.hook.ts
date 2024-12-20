import { ContextStore } from "@/context/ObserverStore.context";
import { ObserverCallback } from "@/utils/observer.utils";
import { Context, useContext, useEffect, useState } from "react";


const useSelector = <T, ReturnCallback>(context: Context<ContextStore<T>>, selector: ObserverCallback<T, ReturnCallback>) => {

    const { observer, store } = useContext(context)

    const [notify, setNotify] = useState<ReturnCallback | undefined>(() => selector(store))

    useEffect(() => {
        if (!selector) return
        const listener = (store: T) => {
            const res = selector(store)

            if (!Object.is(res, notify)) {
                setNotify(res)
            }
        }
        observer?.subscribe(listener)
        return () => observer?.unsubscribe(listener)
    }, [notify])

    return notify

};

export default useSelector