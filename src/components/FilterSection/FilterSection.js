import React, { useState } from 'react'
import filterIcon from '../../images/icons/filter.svg'
import classes from '../../index.module.scss'
import Input from '../UI/Input/Input'
import Select from '../UI/Select/Select'

export default function FilterSection() {

    const platformOptions = [
        {
            optionValue: 'twitch',
            optionName: 'Twitch'
        },
        {
            optionValue: 'instagram',
            optionName: 'Instagram'
        },
        {
            optionValue: 'tiktok',
            optionName: 'TikTok'
        },
        {
            optionValue: 'kick',
            optionName: 'Kick'
        },
        {
            optionValue: 'telegram',
            optionName: 'Telegram'
        },
        {
            optionValue: 'youtube',
            optionName: 'YouTube'
        },
    ]

    const genderOptions = [
        {
            optionValue: 'male',
            optionName: 'Male'
        },
        {
            optionValue: 'female',
            optionName: 'Female'
        },
    ]

    const countryOptions = [
        {
            optionValue: 'germany',
            optionName: 'Germany'
        },
        {
            optionValue: 'brazil',
            optionName: 'Brazil'
        },
        {
            optionValue: 'portugal',
            optionName: 'Portugal'
        },
        {
            optionValue: 'sweden',
            optionName: 'Sweden'
        },
    ]

    const [platOptions, updatePlatOptions] = useState(platformOptions)
    const [genOptions, updateGenOptions] = useState(genderOptions)
    const [countOptions, updateCountOptions] = useState(countryOptions)

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
                <Select
                    selectOptions={countOptions}
                    selectHeader='Category'
                />
                <Select
                    selectOptions={platOptions}
                    selectHeader='Platforms'
                />
                <Select
                    selectOptions={countOptions}
                    selectHeader='Country'
                />
                <Select
                    selectOptions={countOptions}
                    selectHeader='Ready to bet'
                />
            </div>
        </div>
    )
}
