Router.route('/habilitados',{
  name:"habilitados",
  template:"habilitados",
  habilitados: function(){
    return Habilitados.find();
  }
});

Router.route('/farmacia_popular_conveniada',{
  name:"farmacia_popular_conveniada",
  template:"farmacia_popular_conveniada",
  farmacia_popular_conveniada: function(){
    return Farmacia_popular_conveniada.find();
  }
});

Router.route('/farmacia_popular',{
  name:"farmacia_popular",
  template:"farmacia_popular",
  farmacia_popular: function(){
    return Farmacia_popular.find();
  }
});

Router.route('/');
