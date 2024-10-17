//priority: 9001

ServerEvents.tags('fluid', event => {

  const fluidTagstoAdd = [
    { gtceu: 'gtceu:iron', tag: 'forge:molten_iron'},
    { gtceu: 'gtceu:gold', tag: 'forge:molten_gold'},
    { gtceu: 'gtceu:copper', tag: 'forge:molten_copper'},
    { gtceu: 'gtceu:lead', tag: 'forge:molten_lead'},
    { gtceu: 'gtceu:silver', tag: 'forge:molten_silver'},
    { gtceu: 'gtceu:nickel', tag: 'forge:molten_nickel'},
    { gtceu: 'gtceu:tin', tag: 'forge:molten_tin'},
    { gtceu: 'gtceu:aluminium', tag: 'forge:molten_aluminum'},
    { gtceu: 'gtceu:zinc', tag: 'forge:molten_zinc'},
    { gtceu: 'gtceu:platinum', tag: 'forge:molten_platinum'},
    { gtceu: 'gtceu:bronze', tag: 'forge:molten_bronze'},
    { gtceu: 'gtceu:electrum', tag: 'forge:molten_electrum'},
    { gtceu: 'gtceu:brass', tag: 'forge:molten_brass'},
    { gtceu: 'gtceu:invar', tag: 'forge:molten_invar'},
    { gtceu: 'gtceu:steel', tag: 'forge:molten_steel'}
  ];

  fluidTagstoAdd.forEach(
    tags => {
      event.add(tags.gtceu, tags.tag);
      event.add(tags.tag, tags.gtceu);
    }
  );
});

// ServerEvents.tags("item", event => {})