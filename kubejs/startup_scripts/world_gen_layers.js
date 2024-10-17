GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
  event.create('actual_stone_layer')
       .targets('#minecraft:stone_ore_replaceables')
       .dimensions('minecraft:overworld')
})