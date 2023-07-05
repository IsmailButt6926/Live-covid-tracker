import React, { useState, useEffect } from 'react'
import styles from "./Covid.module.css"
import { covidApi } from '../services/covis'

const Covid = () => {

    const [covidData, setCovidData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await covidApi()
                setCovidData(response.data.statewise[0])
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    console.log("first", covidData)
    return (
        <>
            <div className={styles.main}>
                <h1 className='font-bold text-2xl '>LIVE</h1>
                <h2 className='font-bold text-2xl'>COVID-19 CORONAVIRUS TRACKER</h2>
            </div>

            <div className='flex flex-wrap'>
                <div class="flex flex-col items-center gap-8 mt-[25px] ml-[25px] w-[22rem] h-48 p-6 bg-[#a2a2ff] border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">OUR COUNTRY</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">PAKISTAN</p>
                </div>
                
               <div class="flex flex-col items-center gap-8 mt-[25px] ml-[25px]  w-[22rem] h-48 p-6 bg-green-500 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TOTAL RECOVERED</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{covidData.recovered}</p>
                    </div>

                    <div class="flex flex-col items-center gap-8 mt-[25px] ml-[25px]  w-[22rem] h-48 p-6 bg-orange-400 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TOTAL CONFIRMED</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{covidData.confirmed}</p>
                    </div>

                    <div class="flex flex-col items-center gap-8 mt-[25px] ml-[25px]  w-[22rem] h-48 p-6 bg-lime-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TOTAL DEATHS</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{covidData.deaths}</p>
                    </div>

                    <div class="flex flex-col items-center gap-8 mt-[25px] ml-[25px]  w-[22rem] h-48 p-6 bg-cyan-500 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TOTAL ACTIVE</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{covidData.active}</p>
                    </div>

                    <div class="flex flex-col items-center gap-8 mt-[25px] ml-[25px]  w-[22rem] h-48 p-6 bg-red-300 border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TOTAL UPDATE</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{covidData.lastupdatedtime}</p>
                    </div>
            </div>
        </>
    )
}

export default Covid