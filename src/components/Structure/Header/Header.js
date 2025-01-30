import React from 'react'
import classes from '../../../index.module.scss'


export default function Header() {
    return (
        <header className={classes.Header}>
            <span className={classes.Header__name}>BeFluence dashboard</span>
        </header>
    )
}
