var postsData = [
  {
    title: 'Introducing TelescopeZZZZZ',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'MeteorZZZZ',
    author: 'Tom Coleman',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor BookZZZZ',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  }
];

Template.postsList.helpers({
  posts: function() {
    return Posts.find();
  }
});
