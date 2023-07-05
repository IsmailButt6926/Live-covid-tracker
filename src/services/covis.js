import axios from "axios"

const covidApi = async () => {
    try {
        const response = await axios.get("https://data.covid19india.org/data.json")
        return response
    } catch (error) {
        console.log(error)
    }
}

export  {covidApi}