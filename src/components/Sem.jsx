import React from 'react'
import {Link} from 'react-router-dom'
import semData from '../data/semester.js'
import Footer from './Footer.jsx'
import IconLink from './miniComponents/iconLinks.jsx';
import DarkButton from './miniComponents/darkModeButton.jsx';

export default function Sem(props) {

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

    let currentSemData;

    for (const dataElement of semData) {
        if (dataElement.sem == props.sem) {
            currentSemData = dataElement;
            break;
        }
    }

    const qpLink = `/sem${props.sem}/quesPaper${props.sem}`
    const notesLink = `/sem${props.sem}/notes${props.sem}`
    const pracLink = `/sem${props.sem}/pracfiles${props.sem}`
    return (
        <>
        <div className='home--header flex semester--header'>
            <button className='back--button'>
                <Link to="/" className='back--button--link'>go back</Link>
            </button> 
                <h1>Semester {props.sem}</h1>

        </div>
        
        <DarkButton darkMode={props.darkMode} setDarkMode={props.setDarkMode} />

        <div className='home--main' style={props.darkMode ? darkStyleForMain : {}}>
            <header className='flex'><h1>Choose Content</h1></header>
            <main>
            <div className='home--main--main flex'>
                {/* <Link to={`/sem${props.num}/quesPapers`} */}
                
                <Link to={qpLink}>
                    <IconLink
                        caption="Question Papers"
                    />
                </Link>

                <Link to={notesLink}>
                    <IconLink
                        caption="Class Notes"
                    />
                </Link>

                <Link to={pracLink}>
                    <IconLink
                        caption="Practical Files"
                    />
                </Link>
            </div>
        </main>
        </div>

        <Footer />
        </>
    )
}