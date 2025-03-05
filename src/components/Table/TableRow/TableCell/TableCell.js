import React from 'react'
import classes from '../../../../index.module.scss'
import linkImage from '../../../../images/icons/link.svg'
import newIcon from '../../../../images/icons/new.svg'

export default function TableCell(props) {
    return (
        props.isLink
            ?
            <div className={classes.TableRow__cellContainer}>
                <a className={props.class} href={props.link} rel="noreferrer" target='_blank'>
                    <img src={linkImage} alt="" />
                </a>
            </div>
            :
            <div className={classes.TableRow__cellContainer}>
                <span className={props.class}>
                    {
                        typeof (props.value) !== 'boolean'
                            ?
                            props.value
                            :
                            props.value
                                ?
                                'Yes'
                                :
                                'No'
                    }
                    {
                        props.isNew
                            ?
                            <span className={classes.TableRow__newInfo}>
                                <img src={newIcon} alt="" />New
                            </span>
                            :
                            ''
                    }
                </span>
            </div>
    )
}
