import React from 'react'

function Info({ height }) {
  return (
    <div style={{ height: `${height}px`, padding: '12px' }}>
      <h1 id="simple-chem-draw">Simple Chem Draw</h1>
      <p>Simple Chem Draw is a program that uses SMILES to draw molecular diagrams fast and efficiently</p>
      <h1 id="what-is-smiles">What is SMILES?</h1>
      <p>SMILES is short for Simplified Molecular Input Entry System. SMILES is a chemical notation that can represent chemical structures on a computer. It is very flexible and has five key rules to use:</p>
      <ol type="1">
        <li>Atoms and Bonds - represents single bonds = represents double bonds # represents triple bonds * represents aromatic bonds . represents disconnected structures</li>
        <li>Simple Chains - Combining atomic symbols and bond symbols can represent a chain structure</li>
        <li>Branches - Placing an atomic symbol inside a ( ) will represent a branch</li>
        <li>Rings - To represent a ring structure, place the ring number (ring #1 = 1) behind the first and last atomic symbol in the structure.</li>
      </ol>
      <ul>
        <li>If the molecule contains multiple rings, trace the molecular backbone clockwise from the first numbered atomic symbol in the structure, adding numbers to represent the beginning and end of additional rings as required</li>
        <li>Note: a single carbon may be numbered for multiple rings if it is positioned at their connection point (e.g. c12)</li>
      </ul>
      <ol start="5" type="1">
        <li>Charged Atoms At the end of an atomic symbol, place a charge inside a [ ] and that will represent a charged atom</li>
      </ol>
      <p>For further information on SMILES, here are a few external links:</p>
      <ul>
        <li>https://archive.epa.gov/med/med_archive_03/web/html/smiles.html</li>
        <li>https://www.epa.gov/sites/default/files/2015-05/documents/appendf.pdf</li>
        <li>https://chemicbook.com/2021/02/13/smiles-strings-explained-for-beginners-part-1.html</li>
      </ul>
    </div>
  )
}

export default Info