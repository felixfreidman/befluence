import React from 'react'
import classes from '../../../index.module.scss'
import search from '../../../images/icons/search.svg'

export default function Input(props) {
    const cls = [classes.Input];
    const inputWidth = props.inputBigWidth ? classes.Input__bigWidth : '';
    cls.push(inputWidth)

    const inputCode = (
        <input
            type={props.type}
            name={props.name}
            id={props.inputId}
            value={props.inputValue}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onInput={props.onInput}
            className={classes.Input__input}
        />
    )

    return (
        <label
            className={cls.join(' ')}
            htmlFor={props.inputId}
        >
            <span className={classes.Input__labelHeader}>{props.children}</span>
            {
                props.isSearch
                    ? <div className={classes.Input__inputContainer}>
                        <img
                            src={search}
                            alt='Search icon'
                            className={classes.Input__icon}
                        />
                        {inputCode}
                    </div>
                    : inputCode
            }

        </label>
    )
}
