
GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
  // idk why the default stone layer doesn't work so i made this to force it to. hopefully that does it.
  event.create("actual_stone_layer").targets('#minecraft:stone_ore_replaceables').dimensions('minecraft:overworld')

})