import React from 'react'
import classes from '../../index.module.scss'
import Header from '../../components/Structure/Header/Header'
import Footer from '../../components/Structure/Footer/Footer'

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