
import MoleculeStructure from "../components/MoleculeStructure/MoleculeStructure"

function CompountRenderer() {
  const caffeine = "Oc1ccc2CC(N3C)C4C=CC(O)C5Oc1c2C45CC3"
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