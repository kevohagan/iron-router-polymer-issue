if (Meteor.isClient) {

  Router.configure({
    layoutTemplate: 'layout',
  });


  Router.route('home',{
    path: '/',
    template: 'home'
  });


  Router.route('polymer',{
    path: '/issue/:n',
    template: 'polymer',
    data: function(){
      return this.params.n;
    }
  })


Template.polymer.rendered = function () {
  console.log(this);
};


}

