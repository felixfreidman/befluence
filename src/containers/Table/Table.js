import React from 'react'
import classes from '../../index.module.scss'
import TableRow from '../../components/Table/TableRow/TableRow'

export default function Table() {

    const tableData = [
        {
            infName: 'SlicerSSH',
            infSex: 'Male',
            infCategory: 'Gambling',
            infCountry: 'Germany',
            infPlatform: 'Twitch',
            infLink: 'https://twitch.com',
            isNew: false,
            isBet: true,
        },
        {
            infName: 'SlicerSSL',
            infSex: 'Male',
            infCategory: 'Gambling',
            infCountry: 'France',
            infPlatform: 'Kick',
            infLink: 'https://twitch.com',
            isNew: true,
            isBet: true,
        },
        {
            infName: 'SlicerSSX',
            infSex: 'Female',
            infCategory: 'Gambling',
            infCountry: 'Brazil',
            infPlatform: 'Instagram',
            infLink: 'https://twitch.com',
            isNew: false,
            isBet: true,
        },
        {
            infName: 'SlicerSSX',
            infSex: 'Female',
            infCategory: 'Gambling',
            infCountry: 'Brazil',
            infPlatform: 'YouTube',
            infLink: 'https://twitch.com',
            isNew: false,
            isBet: false,
        },
        {
            infName: 'SlicerSSX',
            infSex: 'Female',
            infCategory: 'Gambling',
            infCountry: 'Brazil',
            infPlatform: 'TikTok',
            infLink: 'https://twitch.com',
            isNew: false,
            isBet: false,
        },
        {
            infName: 'SlicerSSX',
            infSex: 'Female',
            infCategory: 'Gambling',
            infCountry: 'Brazil',
            infPlatform: 'Telegram',
            infLink: 'https://twitch.com',
            isNew: false,
            isBet: false,
        },
    ]

    return (
        <div className={classes.Table}>
            <div className={classes.TableHead}>
                <span className={classes.TableHead__value}>Sex</span>
                <span className={classes.TableHead__value}>Name</span>
                <span className={classes.TableHead__value}>Category</span>
                <span className={classes.TableHead__value}>Location</span>
                <span className={classes.TableHead__value}>Platform</span>
                <span className={classes.TableHead__value}>Links</span>
                <span className={classes.TableHead__value}>Ready <br />to bet</span>
            </div>
            {
                tableData.map((row, index) => (
                    <TableRow
                        sex={row.infSex[0]}
                        name={row.infName}
                        category={row.infCategory}
                        country={row.infCountry}
                        platform={row.infPlatform}
                        link={row.infLink}
                        isNew={row.isNew}
                        isBet={row.isBet}
                        key={`${Math.floor(Math.random * 10)}Row${index}`}
                    />
                ))
            }
        </div>
    )
}
