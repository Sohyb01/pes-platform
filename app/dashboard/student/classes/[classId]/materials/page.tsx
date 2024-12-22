import { exampleMaterials } from "@/lib/data";
import PESMaterialCard from "@/components/pes-custom/platform-components/PESMaterialCard";

const getMaterials = async () => {
  return exampleMaterials;
};

const Materials = async () => {
  const materials = await getMaterials();

  return (
    <div className="w-full grid gap-4 md:grid-cols-2">
      {materials.map((material) => (
        <PESMaterialCard key={material.id} material={material} />
      ))}
    </div>
  );
};

export default Materials;
