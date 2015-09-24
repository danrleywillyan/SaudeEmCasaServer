Template.farmacia_popular.helpers({
  farmacia_popular: function () {
    var json = Farmacia_popular.find().fetch();
    return JSON.stringify(json);
  }
});
