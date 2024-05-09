import React from 'react'
import folderIcon from '../../assets/folder.png'
export default function IconLink(props) {
    return (

        <figure className='folder--icon'>

            <img 
                src={folderIcon} 
                alt="folder icon" 
                onClick={props.onclick}
                className='folder--icon'
            />
            <figcaption>{props.caption}</figcaption>    

        </figure>

    )
}