import React from 'react'
import semData from '../data/semester'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import downloadIcon from '../assets/downloadIcon.webp'
// store sem number in a var, then run for of loop in semdata, match 

export default function QuesPaper(props) {

    let quesPapers;

    for (const element of semData) {
        if (element.sem == props.sem) {
            quesPapers = element.quesPapers
        }
    } 

    return (
        <>
        <div className='home--header flex semester--header'>
            <button className='back--button'>
                <Link to={`/sem${props.sem}`} className='back--button--link'>go back</Link>
            </button> 
                <h1>Question Papers</h1>
        </div>

        <div className='home--main'>
        <header className='flex'><h2>Download</h2></header>
           <main>
            {Object.keys(quesPapers).map( key => {
                return (
                    
                    <a href={quesPapers[key]} download className='download--link'>
                        <img src={downloadIcon} alt="download" className='downloadIcon'/>
                        {key}
                    </a>
                    
                )
            })}
            </main>
        </div>
        
            <Footer />
        </>
    )
}