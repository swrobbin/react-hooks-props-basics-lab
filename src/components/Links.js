import React from 'react'

export default function Links(props) {
    // console.log(props.linkedin, "here we go")
    return (
        <div>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
        </div>
    )
}
