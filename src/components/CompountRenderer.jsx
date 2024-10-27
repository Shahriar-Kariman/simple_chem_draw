
import MoleculeStructure from "../components/MoleculeStructure/MoleculeStructure"

function CompountRenderer() {
  const caffeine = "CN1C=NC2=C1C(=O)N(C(=O)N2C)"
  return (
    <div>
      <MoleculeStructure
        id="structure-example-svg-caffeine"
        structure={caffeine}
        width={350}
        height={300}
        svgMode
      />
    </div>
  )
}

export default CompountRenderer