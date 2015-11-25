// // given the url: "/post/5?q=s#hashFrag"
// Router.route('/post/:_id', function () {
//   var id = this.params._id;
//   var query = this.params.query;
//   console.log("this.params.query = " + query);
//   console.log("this.params._id = " + id);
//   console.log("this.params.query.q = " + query.q);
//   // query.q -> "s"
//   var hash = this.params.hash; // "hashFrag"
//   console.log("this.params.hash = " + hash);
// });
//
// Router.route('/habilitados/:_id',{
//   name:"habilitados",
//   template:"habilitados",
//   waitOn:function(){
//     return Meteor.subscribe("habilitados");
//   },
//   action: function(){
//     this.render();
//   }
// });
//
//
// Router.route('/habilitados',{
//   name:"habilitados",
//   template:"habilitados",
//   waitOn:function(){
//     return Meteor.subscribe("habilitados");
//   },
//   action: function(){
//     this.render();
//   }
//   });
//
// Router.route('/farmacia_popular_conveniada',{
//   name:"farmacia_popular_conveniada",
//   template:"farmacia_popular_conveniada",
//   waitOn:function(){
//     return Meteor.subscribe("farmacia_popular_conveniada");
//   },
//   action: function(){
//     this.render();
//   }
// });
//
// Router.route('/farmacia_popular',{
//   name:"farmacia_popular",
//   template:"farmacia_popular",
//   waitOn:function(){
//     return Meteor.subscribe("farmacia_popular");
//   },
//   farmacia_popular: function(){
//     this.render();
//   }
// });
//
// Router.route('/');
