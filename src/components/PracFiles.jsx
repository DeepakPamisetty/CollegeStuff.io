import React from 'react'
import semData from '../data/semester'
import downloadIcon from '../assets/downloadIcon.webp'
import { Link } from 'react-router-dom';

export default function PracFiles(props) {

    let pracFiles;

    for (const element of semData) {
        if (element.sem == props.sem) {
            pracFiles = element.pracFile
            console.log(pracFiles) 
            break;
        }
    } 


    return (
        <>

        <div className='home--header flex semester--header'>
            <button className='back--button'>
                <Link to={`/sem${props.sem}`} className='back--button--link'>go back</Link>
            </button> 
                <h1>Practical Files</h1>
        </div>

            <div className='home--main'>
            <header className='flex'><h2>Download</h2></header>
            <main>

            {Object.keys(pracFiles).map( key => {
                return (
                    
                    <a href={pracFiles[key]} download className='download--link'>
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