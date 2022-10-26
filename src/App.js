import { useRef, useState, useEffect } from 'react';
import './App.css'
import MainContext from './MainContext';
import { LeaveCommentText } from './components/LeaveCommentText';

function App() {

  const screen = useRef(null)
  const [mode, setMode] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    screen.current.focus()
  }, [])

  const handleKeyUp = (e) => {
    if (e.key === 'c') {
      setMode(!mode)
    }
  }

  const handleMouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY })
  }

  const data = {
    position 
  }

  return (
    <MainContext.Provider value={data}>
      <div ref={screen} tabIndex={0} onMouseMove={handleMouseMove} onKeyUp={handleKeyUp} className={`screen ${mode && 'editable'}`}>
        
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Turkey_provinces_blank_gray.svg/800px-Turkey_provinces_blank_gray.svg.png?20180915025326' alt=''></img>
        
        {mode && <LeaveCommentText/>}
        
        {mode && (<div>Yorum modu aktif!</div>)}
      </div>
    </MainContext.Provider>
  );
}

export default App;
