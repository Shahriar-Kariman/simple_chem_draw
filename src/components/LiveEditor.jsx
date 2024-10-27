import React, { useState, useEffect } from 'react'

import SplitPane, { Pane } from 'split-pane-react'
import 'split-pane-react/esm/themes/default.css'

import CompountRenderer from './CompountRenderer'

function LiveEditor() {

  const [sizes, setSizes] = useState([100, '12%', 'auto'])
  
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
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ height: `${height-64}px` , overflow: 'hidden'}}>
      <SplitPane
        split='vertical'
        sizes={sizes}
        onChange={setSizes}
      >
        <Pane minSize={300} maxSize='60%' >
          <div style={{ ...layoutCSS, background: '#a1a5a9' }}>
            left
          </div>
        </Pane>
        <div style={{ ...layoutCSS, background: '#ddaadd' }}>
          <CompountRenderer />
        </div>
      </SplitPane>
    </div>
  )
}

export default LiveEditor