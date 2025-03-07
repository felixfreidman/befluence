import { FETCH_TABLEDATA_START, FETCH_TABLEDATA_ERROR, FETCH_TABLEDATA_SUCCESS } from "./actionTypes"


const response = [
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
]

export function fetchTableData() {
    // return async dispatch => {
    //     dispatch(fetchQuizesStart())
    //     try {
    //         const response = await axios.get('quizes.json');
    //         const quizes = [];
    //         Object.keys(response.data).forEach((key, index) => {
    //             quizes.push({
    //                 id: key,
    //                 name: `Test ${index + 1}`
    //             })
    //         })
    //         dispatch(fetchQuizesSuccess(quizes))
    //     } catch (error) {
    //         console.log(error);
    //         dispatch(fetchQuizesError(error))
    //     }
    // }

    return dispatch => {
        dispatch(fetchTableDataStart())
        const tableData = [];
        Object.values(response).forEach((value, index) => {
            tableData.push(value)
        })
        dispatch(fetchTableDataSuccess(tableData))

    }
}

export function fetchTableDataStart() {
    return {
        type: FETCH_TABLEDATA_START
    }
}

export function fetchTableDataSuccess(tableData) {
    return {
        type: FETCH_TABLEDATA_SUCCESS,
        tableData
    }
}

export function fetchTableDataError(error) {
    return {
        type: FETCH_TABLEDATA_ERROR,
        error
    }
}