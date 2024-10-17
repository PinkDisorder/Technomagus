GTCEuServerEvents.oreVeins(event => {

  event.add('kubejs:zinc', vein => {
    vein.weight(80).clusterSize(35).density(0.2).discardChanceOnAirExposure(0)
    .layer("stone").layer("deepslate")
    .dimensions("minecraft:overworld")
    .heightRangeTriangle(-63, 70)
    .layeredVeinGenerator((gen)=> {
      return gen.buildLayerPattern((pat)=> {
        return pat.layer(l => l.weight(4).mat(GTMaterials.get("zinc")).size(3, 4))
                  .layer(l => l.weight(4).mat(GTMaterials.Iron).size(3, 4))
      });
    })
  });

  event.add('kubejs:magic_vein_in_stone', vein => {
    vein.weight(80).clusterSize(15).density(0.2).discardChanceOnAirExposure(0)
    .layer("stone")
    .dimensions("minecraft:overworld")
    .heightRangeTriangle(8, 70)
    .layeredVeinGenerator((gen)=> {
      return gen.buildLayerPattern((pat)=> {
        return pat.layer(l => l.weight(3).mat(GTMaterials.get("arcanum")).size(3, 4))
                  .layer(l => l.weight(3).mat(GTMaterials.get("sal_ammoniac")).size(3, 4))
                  .layer(l => l.weight(1).mat(GTMaterials.Gold).size(3, 4));
      });
    })
  });

  event.add('kubejs:magic_vein_in_stone', vein => {
    vein.weight(80).clusterSize(15).density(0.2).discardChanceOnAirExposure(0)
    .layer("deepslate")
    .dimensions("minecraft:overworld")
    .heightRangeTriangle(-64, 7)
    .layeredVeinGenerator((gen)=> {
      return gen.buildLayerPattern((pat)=> {
        return pat.layer(l => l.weight(3).mat(GTMaterials.get("arcanum")).size(3, 4))
                  .layer(l => l.weight(3).mat(GTMaterials.get("sal_ammoniac")).size(3, 4))
                  .layer(l => l.weight(1).mat(GTMaterials.Gold).size(3, 4));
      });
    })
  });


});
