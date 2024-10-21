//priority: 9001

ServerEvents.tags("item", event => {
  // Fix empty tags
  event.add("minecraft:stone", "#forge:stone");
  event.add("wizards_reborn:arcane_wood_slabs", "wizards_reborn:arcane_wood_slab");

  event.add("forge:raw_pasta",      "#forge:pasta/raw_pasta");

  event.add("forge:food/raw_pasta", "#forge:pasta/raw_pasta");
  event.add("forge:food/raw_pasta", "#forge:raw_pasta");

  event.add("forge:grain/barley", "#forge:barley");

  event.add("forge:foods/raw_rabbit", "minecraft:rabbit");

  event.add("forge:water_bucket", "#forge:buckets/water");

  // Would be so nice if the let's do dev was using forge tags
  event.add("c:sugar", "#forge:dusts/sugar");
  event.add("c:grain/oat", "#forge:grain/oat");
  event.add("c:bones", "#forge:bones");
  event.add("c:fruits/strawberries", "#forge:fruits/strawberries");

  // Because having one set of tags that makes sense is too much to ask for humble onions
  event.add("forge:vegetables/onion", "#forge:crops/onion");
  event.add("forge:crops/onion", "#forge:vegetables/onion");
  event.add("c:crops/onion", "#forge:crops/onion");

  event.add("c:crops/tomato", "#forge:crops/tomato");
  // what was wrong with #forge:tools/knives in the first place?
  event.add("lets_do_addon_compat:tools/knives", "#forge:tools/knives");



  // Ingredient.of("#forge:stone").itemIds.forEach(item => event.add(item, "minecraft:stone"));
})

ServerEvents.tags('fluid', event => {
  const fluids = [
    "iron", "gold", "copper", "lead", "silver", "nickel", "tin", "zinc",
    "platinum", "bronze", "electrum", "brass", "invar", "steel"
  ]

  event.add("gtceu:aluminium", "#forge:molten_aluminum");
  event.add("forge:molten_aluminum", "gtceu:aluminium");

  fluids.forEach(f => {
    event.add(`gtceu:${f}`, `#forge:molten_${f}`);
    event.add(`forge:molten_${f}`, `#gtceu:${f}`);
  });

});
