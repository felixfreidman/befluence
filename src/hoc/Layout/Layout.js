import React from 'react'
import classes from '../../index.module.scss'
import Header from '../../containers/UI/Header/Header'
import Footer from '../../containers/UI/Footer/Footer'

console.log(classes)

export default function Layout(props) {

    return (
        <div className={classes.Layout}>
            <Header />
            <main className={classes.MainSection}>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}