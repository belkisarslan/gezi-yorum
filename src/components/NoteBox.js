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
            name:'note',
            color:'red',
            text:'Bir daha gidilmez'
        },
        {
            name:'note',
            color:'green',
            text:'Milyon kere gidilir'
        }
    ]
    const { boxPosition, setBoxVisible, setMode, notes, setNotes } = useContext(MainContext)
    const [color, setColor] = useState(types[0].color)
    const [note, setNote] = useState('')


   const changeColor = (e) => {
     setColor(e.target.value)
   }

   const addNote = (e) => {
    const currentNote = {
        note,
        number: notes.length + 1,
        color,
        position: {
            x: boxPosition.x,
            y: boxPosition.y
        }
    }
    setNotes([...notes, currentNote])
    setBoxVisible(false)
    setMode(false)
   }



    return (
        <div
        onMouseEnter={() => setMode(false)} 
        onMouseLeave={() => setMode(true)}
        className='note-box' 
        style={{'--color':color, position: 'absolute', top: boxPosition.y, left: boxPosition.x }}>
            <span className='note-box-number'>{notes.length + 1}</span>
            <select onChange={changeColor}>
                {types.map((type, key) => (
                <option key={key} value={type.color}>{type.text}</option>
                ))}
            </select>
            
            <textarea onChange={(e) => setNote(e.target.value)} cols="30" rows="5">
            </textarea>
            <button onClick={addNote} disabled={!note}>Ekle</button>
        </div>
    )
}
