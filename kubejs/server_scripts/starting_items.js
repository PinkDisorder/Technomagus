// PlayerEvents.loggedIn(event => {

//   if (event.player.stages.has('starting_items')) return;

//   Utils.server.scheduleInTicks(10, callback =>{
//     event.player.inventory.clear();

//     startingItems.forEach(item => {
//       event.player.inventory.setStackInSlot(0, Item.of("heracles:quest_book").copy());
//     })

//     event.player.stages.add('starting_items');
//   })
// });