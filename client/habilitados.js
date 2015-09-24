Template.habilitados.helpers({
  habilitados: function () {
    var json = Habilitados.find().fetch();
    return JSON.stringify(json);
  }
});
