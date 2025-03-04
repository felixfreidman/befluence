import React, { useState } from 'react'
import classes from '../../../index.module.scss'

export default function Select(props) {

    const cls = [classes.Select]
    const [isSelectOpened, setisSelectOpened] = useState(false);

    function selectClickHandler() {
        setisSelectOpened(!isSelectOpened)
        cls.push(classes.Select__opened)
    }


    return (
        <div
            className={cls.join(' ')}
            onClick={selectClickHandler}
        >
            <span className={classes.Select__selectHeader}>{props.selectHeader}</span>
            <div
                className={classes.Select__selectContainer}
            >
                <span>{props.selectOptions[0].optionName}</span>
            </div>

            {
                isSelectOpened
                    ?
                    <div className={classes.Select__optionsContainer}>
                        {
                            props.selectOptions.map((option, index) => {
                                return (
                                    <span
                                        className={classes.Select__option}
                                        data-value={option.optionValue}
                                        key={index}
                                    >
                                        {option.optionName}
                                    </span>
                                )
                            })
                        }
                    </div>
                    : ''
            }
        </div >
    )
}


