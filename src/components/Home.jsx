import React from 'react'

function Home({ height }) {
  return (
    <div style={{ height: `${height}px`, padding: '12px' }}>
      <h1 id="simple-chem-draw">Simple Chem Draw</h1>
        <p>Simple Chem Draw is a program that uses SMILES to draw molecular diagrams fast and efficiently</p>
      <h2 id="what-is-smiles">What is SMILES?</h2>
        <p>SMILES is short for Simplified Molecular Input Entry System. SMILES is a chemical notation that can represent chemical structures on a computer. It is very flexible and has five key rules to use:</p>
      <ol type="1">
        <li>Atoms and Bonds</li>
          <ul>
            <li>represents single bonds = represents double bonds # represents triple bonds</li>
            <li>represents aromatic bonds . represents disconnected structures</li>
          </ul>
          <li>Simple Chains Combining atomic symbols and bond symbols can represent a chain structure</li>
          <li>Branches Placing an atomic symbol inside a ( ) will represent a branch</li>
          <li>Rings To represent a ring structure, place a 1 behind the first and last atomic symbol in the structure</li>
          <li>Charged Atoms At the end of an atomic symbol, place a charge inside a {`{ }`} and that will represent a charged atom</li>
      </ol>
      <p>For further information on SMILES, here are a few external links: https://archive.epa.gov/med/med_archive_03/web/html/smiles.html https://www.epa.gov/sites/default/files/2015-05/documents/appendf.pdf</p>
    </div>
  )
}

export default Home