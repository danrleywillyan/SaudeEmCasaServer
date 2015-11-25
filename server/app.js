HTTP.methods({
  '/habilitados':{
    get: function(){
      var json = Habilitados.find().fetch();
      return JSON.stringify(json);
    }
  },
  '/habilitados/uf/:uf':{
    get: function(){
      var json = Habilitados.find().fetch();
      return JSON.stringify(json);
    }
  },
  '/farmacia_popular':{
    get: function(){
      var json = Farmacia_popular.find().fetch();
      return JSON.stringify(json);
    }
  },
  '/farmacia_popular_conveniada':{
    get: function(){
      var json = Farmacia_popular_conveniada.find().fetch();
      return JSON.stringify(json);
    }
  }
});
