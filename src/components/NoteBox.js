import React, { useContext, useState } from 'react'
import MainContext from '../MainContext'
import '../App.css'

export default function NoteBox() {
    const types = [
        {
            name:'note',
            color:'orange',
            text:'Bir daha gidilir'
        },
        {
            name:'comment',
            color:'red',
            text:'Bir daha gidilmez'
        }
    ]
    const { boxPosition, setMode, notes } = useContext(MainContext)
    const [color, setColor] = useState(types[0].color)
    const [note, setNote] = useState('')


   const changeColor = (e) => {
     setColor(e.target.value)
   }



    return (
        <div
        onMouseEnter={() => setMode(false)} 
        onMouseLeave={() => setMode(true)}
        className='note-box' 
        style={{'--color':color, position: 'absolute', top: boxPosition.y, left: boxPosition.x }}>
            <span className='note-box-number'>{notes.length + 1}</span>
            <select onChange={changeColor}>
                {types.map(type => (
                <option value={type.color}>{type.text}</option>
                ))}
            </select>
            <textarea onChange={(e) => setNote(e.target.value)} cols="30" rows="5"/>
        </div>
    )
}
