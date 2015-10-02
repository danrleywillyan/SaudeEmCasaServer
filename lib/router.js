Router.route('/habilitados',{
  name:"habilitados",
  template:"habilitados",
  waitOn:function(){
    return Meteor.subscribe("habilitados");
  },
  action: function(){
    this.render();
  }
  });

Router.route('/farmacia_popular_conveniada',{
  name:"farmacia_popular_conveniada",
  template:"farmacia_popular_conveniada",
  waitOn:function(){
    return Meteor.subscribe("farmacia_popular_conveniada");
  },
  action: function(){
    this.render();
  }
});

Router.route('/farmacia_popular',{
  name:"farmacia_popular",
  template:"farmacia_popular",
  waitOn:function(){
    return Meteor.subscribe("farmacia_popular");
  },
  farmacia_popular: function(){
    this.render();
  }
});

Router.route('/');
