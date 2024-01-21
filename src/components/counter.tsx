import {useState} from "react";
import classes from './counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return <>
        <p>{count}</p>
        <button className={classes.btn} children={'increment'} onClick={() => setCount(prev => prev + 1)}/>
    </>
}