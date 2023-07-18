var express = require('express');
var app = express();
require('dotenv').config()
// CORS module de sécurité --> active le cross-origin-resource-sharing
const cors = require("cors");

const PORT = process.env.PORT || 8080;
// initialisation cors
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

const { uploadImage } = require('./controller/upload.controller.js')
const { upload } = require('./service/upload.service.js')

var db = require('./models');
const destination = require('./models/destination');
const activity = require('./models/activity');
const bodyParser = require('body-parser');
var User = db.User;
var Post = db.Post;
var Destination = db.Destination;
var Activity = db.Activity;
var Review = db.Review;
var Follower = db.Follower;
var Like = db.Like;

// Routes
app.get('/', (request, response) => {
  // console.log('Hello');
  response.json({ message: "Ok" });
});

// Image post & get image url
app.post('/image', upload.single('image'), uploadImage)

// USERS
app.get('/users', function(req, res) {
  User.findAll({ include: [{ model: Post }, { model: Follower }]})
  .then(function (users) {
    res.json(users);
  })
  .catch((err) => {
    console.log(">> Error while fetching users: ", err);
    res.send(err);
  });
});

app.get('/users/:userId', function(req, res) { 
  User.findByPk(req.params.userId, { include: [{ model: Post }, { model: Follower }]})
  .then(user => {
    res.send(user);
  })
  .catch((err) => {
    console.log(">> Error while fetching user: ", "id:", req.params.id, err);
    res.send(err);
  });
});

app.post('/users', function(req, res) {
  User.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    description: req.body.description,
    profilImage: req.body.profilImage,
    pseudo: req.body.pseudo,
    password: req.body.password,
    email: req.body.email
  }).then(user => { 
    res.send(user);
  })
  .catch((err) => {
    console.log(">> Error while creating user: ", err);
    res.send(err);
  });
});

app.put('/users/:userId', function(req, res) {
  const id = req.params.userId;
  const currentUser = req.userId
  const Op = db.Sequelize.Op;
  
  User.update( { 
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    description: req.body.description,
    profilImage: req.body.profilImage,
    pseudo: req.body.pseudo,
    password: req.body.password,
    email: req.body.email
  }, 
    { where: {
      [Op.and]: [
        { id: id },
        // { userId: currentUser }
      ]
    },
    returning: true,
    plain: true
  },
  ).then( () => {
    res.status(200).send({ message: 'updated successfully a user with id = ' + id + "user:" + req.userId });
    
  })
  .catch((err) => {
    res.status(401).send(err);
  });
});

app.delete('/users/:userId', function(req, res) {
  const id = req.params.userId;
  User.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send({ message: 'deleted successfully a user with id = ' + id });
  })
  .catch((err) => {
    console.log(">> Error while deleting user with id: ", id, err);
    res.send(err);
  });
});

// FOLLOWERS
app.post('/followers', function(req, res) {
  Follower.create({
    follower: req.body.followerId,
    followed: req.body.followedId
  }).then(follower => { 
    res.send(follower);
  })
  .catch((err) => {
    console.log(">> Error while creating user: ", err);
    res.send(err);
  });
});

app.delete('/followers/followerId', function(req, res) {
  const id = req.params.followerId;
  Follower.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send({ message: 'deleted successfully a follower with id = ' + id });
  })
  .catch((err) => {
    console.log(">> Error while deleting follower with id: ", id, err);
    res.send(err);
  });
});

// POSTS
app.get('/posts', function(req, res) {
  Post.findAll({ include: [{ model: Like }]})
  .then(function (posts) {
    res.json(posts);
  })
  .catch((err) => {
    console.log(">> Error while fetching posts: ", err);
    res.send(err);
  });
});

app.get('/posts/:postId', function(req, res) { 
  Post.findByPk(req.params.postId, { include: [{ model: Like }]})
  .then(post => {
    res.send(post);
  })
  .catch((err) => {
    console.log(">> Error while fetching post: ", "id:", req.params.id, err);
    res.send(err);
  });
});

app.post('/posts', function(req, res) {
  Post.create({
    title: req.body.title,
    imageName: req.body.imageName,
    views: 0,
    likes: 0,
    hashtags: req.body.hashtags,
    createdAt: Date(),
    updatedAt: Date(),
    userId: req.body.userId,
  }).then(message => { 
    res.send(message);
  })
  .catch((err) => {
    console.log(">> Error while creating post: ", err);
    res.send(err);
  });
});

app.put('/posts/:postId', function(req, res) {
  const id = req.params.postId;
  const currentUser = req.params.userId
  const Op = db.Sequelize.Op;
  
  Post.update( { 
    title: req.body.title,
    imageName: req.body.imageName,
    hashtags: req.body.hashtags,
    // userId: req.body.userId
  }, 
    { where: {
      [Op.and]: [
        { id: id },
        // { userId: currentUser }
      ]
    },
    returning: true,
    plain: true
  },
  ).then( () => {
    res.status(200).send({ message: 'updated successfully a post with id = ' + id + "user:" + req.userId });
    
  })
  .catch((err) => {
    res.status(401).send(err);
  });
});

app.delete('/posts/:postId', function(req, res) {
  const id = req.params.postId;
  Post.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send({ message: 'deleted successfully a post with id = ' + id });
  })
  .catch((err) => {
    console.log(">> Error while deleting post with id: ", id, err);
    res.send(err);
  });
});

// LIKES
app.post('/likes', function(req, res) {
  Like.create({
    postId: req.body.postId,
    userId: req.body.userId
  }).then(like => { 
    res.send(like);
  })
  .catch((err) => {
    console.log(">> Error while creating like: ", err);
    res.send(err);
  });
});

app.delete('/likes/:likeId', function(req, res) {
  const id = req.params.likeId;
  Like.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send({ message: 'deleted successfully a like with id = ' + id });
  })
  .catch((err) => {
    console.log(">> Error while deleting like with id: ", id, err);
    res.send(err);
  });
});

// REVIEWS
app.get('/reviews', function(req, res) {
  Review.findAll({ include: [{ model: Activity }, { model: User }]})
  .then(function (reviews) {
    res.json(reviews);
  })
  .catch((err) => {
    console.log(">> Error while fetching reviews: ", err);
    res.send(err);
  });
});

app.get('/reviews/:reviewId', function(req, res) { 
  Review.findByPk(req.params.reviewId, { include: [{ model: Activity }, { model: User }]})
  .then(review => {
    res.send(review);
  })
  .catch((err) => {
    console.log(">> Error while fetching review: ", "id:", req.params.id, err);
    res.send(err);
  });
});

app.post('/reviews', function(req, res) {
  Review.create({
    content: req.body.content,
    rating: req.body.rating,
    createdAt: Date(),
    updatedAt: Date(),
    userId: req.body.userId,
    activityId: req.body.activityId
  }).then(message => { 
    res.send(message);
  })
  .catch((err) => {
    console.log(">> Error while creating review: ", err);
    res.send(err);
  });
});

app.put('/reviews/:reviewId', function(req, res) {
  const id = req.params.reviewId;
  const currentUser = req.userId
  const Op = db.Sequelize.Op;
  
  Review.update( { 
    content: req.body.content,
    rating: req.body.rating,
    userId: req.body.userId,
    activityId: req.body.activityId
  }, 
    { where: {
      [Op.and]: [
        { id: id },
        // { userId: currentUser }
      ]
    },
    returning: true,
    plain: true
  },
  ).then( () => {
    res.status(200).send({ message: 'updated successfully a review with id = ' + id + "user:" + req.userId });
    
  })
  .catch((err) => {
    res.status(401).send(err);
  });
});

app.delete('/reviews/:reviewId', function(req, res) {
  const id = req.params.reviewId;
  Review.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send({ message: 'deleted successfully a review with id = ' + id });
  })
  .catch((err) => {
    console.log(">> Error while deleting review with id: ", id, err);
    res.send(err);
  });
});

// DESTINATIONS
app.get('/destinations', function(req, res) {
  Destination.findAll({ include: [{ model: Activity }]})
  .then(function (destinations) {
    res.json(destinations);
  })
  .catch((err) => {
    console.log(">> Error while fetching destinations: ", err);
    res.send(err);
  });
});

app.get('/destinations/:destinationId', function(req, res) { 
  Destination.findByPk(req.params.destinationId, { include: [{ model: Activity }]})
  .then(destination => {
    res.send(destination);
  })
  .catch((err) => {
    console.log(">> Error while fetching destination: ", "id:", req.params.id, err);
    res.send(err);
  });
});

app.post('/destinations', function(req, res) {
  Destination.create({
    country: req.body.country,
    city: req.body.city,
    imageName: req.body.imageName,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }).then(destination => { 
    res.send(destination);
  })
  .catch((err) => {
    console.log(">> Error while creating review: ", err);
    res.send(err);
  });
});

app.put('/destinations/:destinationId', function(req, res) {
  const id = req.params.destinationId;
  const currentUser = req.userId
  const Op = db.Sequelize.Op;
  
  Destination.update( { 
    country: req.body.country,
    city: req.body.city,
    imageName: req.body.imageName,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }, 
    { where: {
      [Op.and]: [
        { id: id },
        // { userId: currentUser }
      ]
    },
    returning: true,
    plain: true
  },
  ).then( () => {
    res.status(200).send({ message: 'updated successfully a destination with id = ' + id + "user:" + req.userId });
    
  })
  .catch((err) => {
    res.status(401).send(err);
  });
});

app.delete('/destinations/:destinationId', function(req, res) {
  const id = req.params.destinationId;
  Destination.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send({ message: 'deleted successfully a destination with id = ' + id });
  })
  .catch((err) => {
    console.log(">> Error while deleting destination with id: ", id, err);
    res.send(err);
  });
});

// ACTIVITIES
app.get('/activities', function(req, res) {
  Activity.findAll({ include: [{ model: Destination }]})
  .then(function (activities) {
    res.json(activities);
  })
  .catch((err) => {
    console.log(">> Error while fetching activities: ", err);
    res.send(err);
  });
});

app.get('/activities/:activityId', function(req, res) { 
  Activity.findByPk(req.params.activityId, { include: [{ model: Destination }, { model: Review }]})
  .then(activity => {
    res.send(activity);
  })
  .catch((err) => {
    console.log(">> Error while fetching activity: ", "id:", req.params.id, err);
    res.send(err);
  });
});

app.post('/activities', function(req, res) {
  Activity.create({
    category: req.body.category,
    name: req.body.cinamety,
    imageName: req.body.imageName,
    link: req.body.link,
    price: req.body.price,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    rating: req.body.rating,
    destinationId: req.body.destinationId
  }).then(activity => { 
    res.send(activity);
  })
  .catch((err) => {
    console.log(">> Error while creating activity: ", err);
    res.send(err);
  });
});

app.put('/activities/:activityId', function(req, res) {
  const id = req.params.activityId;
  const currentUser = req.userId
  const Op = db.Sequelize.Op;
  
  Activity.update( { 
    category: req.body.category,
    name: req.body.cinamety,
    imageName: req.body.imageName,
    link: req.body.link,
    price: req.body.price,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    description: req.body.description,
    rating: req.body.rating,
    destinationId: req.body.destinationId
  }, 
    { where: {
      [Op.and]: [
        { id: id },
        // { userId: currentUser }
      ]
    },
    returning: true,
    plain: true
  },
  ).then( () => {
    res.status(200).send({ message: 'updated successfully a activity with id = ' + id + "user:" + req.userId });
    
  })
  .catch((err) => {
    res.status(401).send(err);
  });
});

app.delete('/activities/:activityId', function(req, res) {
  const id = req.params.activityId;
  Activity.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send({ message: 'deleted successfully a activity with id = ' + id });
  })
  .catch((err) => {
    console.log(">> Error while deleting activity with id: ", id, err);
    res.send(err);
  });
});


app.listen(PORT, function() {
  db.sequelize.sync(
    // {force: true}
    );
});