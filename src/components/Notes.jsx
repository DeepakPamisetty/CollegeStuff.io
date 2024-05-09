import React from 'react'
import semData from '../data/semester'
import downloadIcon from '../assets/downloadIcon.webp'
import { Link } from 'react-router-dom';
export default function Notes(props) {

    let notes;

    for (const element of semData) {
        if (element.sem == props.sem) {
            notes = element.notes
            break
        }
    }

    return (
        <>
            
            <div className='home--header flex semester--header'>
                <button className='back--button'>
                    <Link to={`/sem${props.sem}`} className='back--button--link'>go back</Link>
                </button> 
                    <h1>Class Notes</h1>
            </div>

            <div className='home--main '>
            <header className='flex'><h2>Download</h2></header>
                <main>

                {Object.keys(notes).map( key => {
                    return (
                        
                        <a href={notes[key]} download>
                            <img src={downloadIcon} alt="download" className='downloadIcon'/>
                            {key}
                        </a>
                        
                    )
                })}
                </main>
            </div>
        </>
    )
}