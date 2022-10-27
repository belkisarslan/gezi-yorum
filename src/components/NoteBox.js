import React, { useContext, useState } from 'react'
import MainContext from '../MainContext'
import '../App.css'

export default function NoteBox() {
    const types = [
        {
            name:'note',
            color:'orange',
            text:'Not'
        },
        {
            name:'comment',
            color:'red',
            text:'Not22'
        }
    ]
    const { boxPosition, setMode, notes } = useContext(MainContext)
    const [color, setColor] = useState(types[0].color)


   



    return (
        <div
        onMouseEnter={() => setMode(false)} 
        onMouseLeave={() => setMode(true)}
        className='note-box' 
        style={{'--color':color, position: 'absolute', top: boxPosition.y, left: boxPosition.x }}>
            <span className='note-box-number'>{notes.length + 1}</span>
            <select>
                {types.map(type => (
                <option value={type.name}>{type.text}</option>
                ))}
            </select>
        </div>
    )
}
