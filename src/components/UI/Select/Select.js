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
            <div
                className={classes.Select__selectContainer}
            >
                {/* {props.selectOptions[0]} */}
                <span>Option 1</span>
            </div>

            {
                isSelectOpened
                    ? <div className={classes.Select__optionsContainer}>
                        <span className={classes.Select__option}>Hello World</span>
                        <span className={classes.Select__option}>Hello World</span>
                    </div>
                    : ''
            }
        </div>
    )
}


