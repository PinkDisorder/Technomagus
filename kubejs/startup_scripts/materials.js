const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

function addExistingFluidToMaterial(material, fluid) {
  let mat = typeof material === "string" ? GTMaterials.get(material) : material;
  const prop = mat.getProperty(PropertyKey.FLUID);
  prop.getStorage().store($FluidStorageKeys.LIQUID, ()=> Fluid.getType(fluid), null);
}

const salammoniacColors = {
  primary: 0xc68ac9,
  secondary: 0xeeddef
}

const arcanumColors = {
  primary: 0x577fb8,
  secondary: 0xcdedfe
}

GTCEuStartupEvents.registry('gtceu:material', event => {

  event.create("arcanum")
    .ore(true)
    .gem()
    .color(arcanumColors.primary)
    .secondaryColor(arcanumColors.secondary)
    .components("60x cobalt", "15x iridium", "10x rhodium", "8x lanthanum", "7x osmium")
    .iconSet(GTMaterialIconSet.DIAMOND);

  event.create("sal_ammoniac")
    .ore(true)
    .gem()
    .color(salammoniacColors.primary)
    .secondaryColor(salammoniacColors.secondary)
    .liquid()
    .components("1x nitrogen", "4x hydrogen", "1x chlorine")
    .iconSet(GTMaterialIconSet.GEM_VERTICAL);

})

GTCEuStartupEvents.materialModification(event => {
  addExistingFluidToMaterial("sal_ammoniac", "theurgy:sal_ammoniac");
})


