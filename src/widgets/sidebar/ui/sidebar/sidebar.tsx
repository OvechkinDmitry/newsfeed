import React, {useState} from 'react';
import styles from './sidebar.module.scss'
import {cx} from "shared/lib/class-names";

interface Props {
    className?: string;
}

export const Sidebar = (props: Props) => {
    const [collapsed, setCollapsed] = useState(() => false)
    const { className} = props
    return (
        <div className={cx(styles.root, collapsed && styles.collapsed  , className)}>
            <button onClick={() => setCollapsed(prev => !prev)}>collapse</button>
        </div>
    );
};