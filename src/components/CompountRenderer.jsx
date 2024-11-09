
import MoleculeStructure from "../components/MoleculeStructure/MoleculeStructure"

function CompountRenderer({ mol }) {
  const caffeine = "CN1C=NC2=C1C(=O)N(C(=O)N2C)C"
  return (
    <div>
      <MoleculeStructure
        id={mol ? mol : caffeine}
        structure={mol ? mol : caffeine}
        width={350}
        height={300}
        svgMode
      />
    </div>
  )
}

export default CompountRenderer