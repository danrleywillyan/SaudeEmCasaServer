Template.farmacia_popular_conveniada.helpers({
  farmacia_popular_conveniada: function () {
    var json = Farmacia_popular_conveniada.find().fetch();
    return JSON.stringify(json);
  }
});
