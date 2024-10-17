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
// iconSets
// DULL
// METALLIC
// MAGNETIC
// SHINY
// BRIGHT
// DIAMOND
// EMERALD
// GEM_HORIZONTAL
// GEM_VERTICAL
// RUBY
// OPAL
// GLASS
// NETHERSTAR
// FINE
// SAND
// WOOD
// ROUGH
// FLINT
// LIGNITE
// QUARTZ
// CERTUS
// LAPIS
// FLUID
// RADIOACTIVE

/**
 * Arcanum Alloy Composition

    Cobalt (Co) – Forms the base metal, giving the alloy a bluish hue. Cobalt is already associated with strength and magnetic properties, which could tie into the magical aspects of the element.
        Role in magic system: Acts as a conduit for arcane energy, amplifying magic.

    Iridium (Ir) – This is an extremely rare and expensive metal with high corrosion resistance. Iridium is often used in platinum alloys and has no widespread applications due to its rarity.
        Role in magic system: Could make Arcanum magically stable under extreme conditions, enhancing its durability.

    Rhodium (Rh) – Another rare and expensive metal with brilliant reflectivity and chemical inertness. Adding this gives the alloy an almost otherworldly sheen, making it desirable and rare.
        Role in magic system: Rhodium’s reflective qualities could be tied to illusion-based magic, making Arcanum essential for spells that require deception or invisibility.

    Lanthanum (La) – Part of the rare earth metals, lanthanum is used in optics and some specialized materials. It's not super rare in a strict sense but has niche applications.
        Role in magic system: Lanthanum could enhance magical vision, acting as a focus for sight-based spells or augmenting a magician’s ability to "see" magic.

    Osmium (Os) – The densest naturally occurring element, osmium is very rare and expensive, with little practical use. It adds a sense of weight and density to the alloy.
        Role in magic system: Osmium’s extreme density could give Arcanum the property of absorbing and containing vast amounts of magical energy, which could be stored or released at will.
 */


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


