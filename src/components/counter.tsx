import {useState} from "react";
import './counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return <>
        <p>{count}</p>
        <button children={'increment'} onClick={() => setCount(prev => prev + 1)}/>
    </>
}