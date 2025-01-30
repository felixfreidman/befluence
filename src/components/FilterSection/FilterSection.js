import React from 'react'
import filterIcon from '../../images/icons/filter.svg'
import classes from '../../index.module.scss'
import Input from '../UI/Input/Input'
import Select from '../UI/Select/Select'

export default function FilterSection() {
    return (
        <div className={classes.FilterSection}>
            <div className={classes.FilterSection__headerSection}>
                <img src={filterIcon} alt='Filter Icon' />
                <span className={classes.FilterSection__header}>Filters</span>
            </div>
            <div className={classes.FilterSection__inputsSection}>
                <Input
                    inputId="searchEngine"
                    inputBigWidth="true"
                    type="text"
                    name="searchEngine"
                    placeholder="Search by name or platform link..."
                    isSearch="true"
                >
                    Search
                </Input>
                <Select />
            </div>
        </div>
    )
}
