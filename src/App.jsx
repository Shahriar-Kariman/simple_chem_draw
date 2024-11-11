import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router'
import Home from './components/Info'
import LiveEditor from './components/LiveEditor'
import SplitPane, { Pane } from 'split-pane-react'
import 'split-pane-react/esm/themes/default.css'

import CompountRenderer from './components/CompountRenderer'

function App() {

  const [sizes, setSizes] = useState([100, '12%', 'auto'])

  const [split, setSplit] = useState('vertical')
  
  const layoutCSS = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
      if(window.innerWidth<900){
        setSplit('horizontal')
      }
      else if(split.localeCompare('horizontal')){
        setSplit('vertical')
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [mol,setMol] = useState('')

  return (
    <div style={{ height: `${height}px` }}>
      <SplitPane
        split={split}
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane minSize={300} maxSize='60%' >
          <LiveEditor setMol={setMol} getMol={()=>{return mol}} />
          {/* <div style={{background: '#505050' }}>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home height={height} />} />
              <Route path='Live Editor' element={<LiveEditor height={height} setMol={setMol} />} />
              <Route path='Home' element={<Home height={height} />} />
            </Routes>
          </div> */}
        </Pane>
        <div style={{ ...layoutCSS, background: '#ddaadd' }}>
          <CompountRenderer mol={mol} />
        </div>
      </SplitPane>
    </div>
  )
}

export default App
