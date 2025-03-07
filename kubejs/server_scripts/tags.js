//priority: 9001

ServerEvents.tags("item", event => {
  // Fix empty tags
  event.add("minecraft:stone", "#forge:stone");
  event.add("wizards_reborn:arcane_wood_slabs", "wizards_reborn:arcane_wood_slab");

  event.add("forge:raw_pasta", "#forge:pasta/raw_pasta");

  event.add("forge:food/raw_pasta", "#forge:pasta/raw_pasta");
  event.add("forge:food/raw_pasta", "#forge:raw_pasta");

  event.add("forge:grain/barley", "#forge:barley");

  event.add("forge:foods/raw_rabbit", "minecraft:rabbit");

  event.add("forge:water_bucket", "#forge:buckets/water");

  event.add("forge:vegetables/onion", "#forge:crops/onion");
  event.add("forge:crops/onion", "#forge:vegetables/onion");
  event.add("c:crops/onion", "#forge:crops/onion");

  event.add("c:crops/tomato", "#forge:crops/tomato");

  event.add("forge:nuts", "dynamictrees:dark_oak_seed")
  event.add("forge:nuts", "dynamictrees:oak_seed")
  event.add("forge:nuts", "dtterralith:ancient_seed")
  event.add("forge:nuts", "dtterralith:mirage_seed")

  event.add("forge:nuts/acorn", "dynamictrees:dark_oak_seed")
  event.add("forge:nuts/acorn", "dynamictrees:oak_seed")
  event.add("forge:nuts/acorn", "dtterralith:ancient_seed")
  event.add("forge:nuts/acorn", "dtterralith:mirage_seed")
})

ServerEvents.tags("block", event => {
  event.add("forge:ores", "create_new_age:thorium_ore");
  event.add("forge:ores/thorium", "create_new_age:thorium_ore");

  event.add("forge:ores", "rpgsmw:mineral_ore")
  event.add("forge:ores/arpegium", "rpgsmw:mineral_ore")

  event.add("forge:ores", "rpgsmw:miphrildeepslateore")
  event.add("forge:ores/miphril", "rpgsmw:miphrildeepslateore")
})

// ServerEvents.tags('fluid', event => {});
