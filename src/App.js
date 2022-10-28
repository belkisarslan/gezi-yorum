import { useRef, useState, useEffect } from 'react';
import './App.css'
import MainContext from './MainContext';
import { LeaveCommentText } from './components/LeaveCommentText';
import Note from './components/Note';
import NoteBox from './components/NoteBox';

function App() {

  const screen = useRef(null)
  const [mode, setMode] = useState(false)
  const [notes, setNotes] = useState([
    {
      id:'1',
      note:'deneme notu',
      color:'red',
      position:{x:350, y:300}
    }
  ])
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [boxPosition, setBoxPosition] = useState({ x:0, y:0 })
  const [boxVisitable, setBoxVisitable] = useState(false)

  useEffect(() => {
    screen.current.focus()
  }, [])

  const handleKeyUp = (e) => {
    if (e.key === 'c') {
      setMode(!mode)
      setBoxVisitable(false)
    }
  }

  const handleMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY })
  }

  const handleClick = (e) => {
   if(mode){
    setBoxPosition({x:position.x, y:position.y})
    setBoxVisitable(true)
   }
  }

  const data = {
    position,
    boxPosition,
    setMode,
    notes 
  }

  return (
    <MainContext.Provider value={data}>
      <div ref={screen} tabIndex={0} onClick={handleClick} onMouseMove={handleMouseMove} onKeyUp={handleKeyUp} className={`screen ${mode && 'editable'}`}>
        
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Turkey_provinces_blank_gray.svg/800px-Turkey_provinces_blank_gray.svg.png?20180915025326' alt=''></img>
        
        {mode && <LeaveCommentText/>}

        {notes && notes.map(note => <Note {...note}/>)}

        {boxVisitable && <NoteBox/>}

      </div>
    </MainContext.Provider>
  );
}

export default App;
