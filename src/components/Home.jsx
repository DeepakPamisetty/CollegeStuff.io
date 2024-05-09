import React from 'react'
import semData from '../data/semester.js'
import IconLink from './miniComponents/iconLinks.jsx'
import {Link} from 'react-router-dom'
import Footer from './Footer.jsx'
import DarkButton from './miniComponents/darkModeButton.jsx'

export default function Home(props) {
    
    let semCount = 1;
    let semesterData = semData.map(prev => {
        return (
            <Link to={`sem${prev.sem}`}>
                <IconLink 
                    caption={`Semester ${semCount++}`}
                />
            </Link>
        )
    })

    const darkStyleForMain = {
        backgroundColor: "gray",
        "boxShadow": "none" 
    }

    React.useEffect(() => {
        if (props.darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [props.darkMode])

    return (
        <>
            <div className='home--header flex'>
                <h1>
                    CollegeMaterial.io
                </h1>
                Get all your Class Notes, Question Papers and Practical files 
                <DarkButton darkMode={props.darkMode} setDarkMode={props.setDarkMode} />

            </div>

            <main className='home--main' style={props.darkMode ? darkStyleForMain : {}}>

                <header className='flex'>
                    <h2>
                        Choose your semester
                    </h2>
                </header>

                <main className='home--main--main flex'> 
                    {semesterData}
                </main>

            </main>
            <Footer></Footer>
        </>
    )
}