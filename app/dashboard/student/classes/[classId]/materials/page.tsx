import { exampleMaterials } from "@/lib/data";
import PESMaterialCard from "@/components/pes-custom/platform-components/PESMaterialCard";

const getMaterials = async () => {
  return exampleMaterials;
};

const Materials = async () => {
  const materials = await getMaterials();

  return (
    <div className="w-full flex gap-4 flex-wrap lg:flex-nowrap lg:overflow-x-scroll h-full pb-8">
      {materials.map((material) => (
        <PESMaterialCard key={material.id} material={material} />
      ))}
    </div>
  );
};

export default Materials;
