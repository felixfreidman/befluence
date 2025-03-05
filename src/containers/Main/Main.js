import React from 'react'
import classes from '../../index.module.scss'
import FilterSection from '../../components/FilterSection/FilterSection'
import Table from '../Table/Table'

export default function Main() {
    return (
        <div className={classes.MainPage}>
            <FilterSection />
            <Table />
        </div>
    )
}
