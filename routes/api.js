// // routes/api.js

// const User = require('../models/user');
// const Movie = require('../models/movie');
// const express = require('express');
// const path = require('path');
// const crypto = require('crypto');
// const multer = require('multer');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// //login
// router.post('/sessions', (req, res) => {
//     const user = { id: 3};
//     // , (err, user) => {
//     //     if (err) {
//     //         console.log('RETRIEVE error: ' + err);
//     //         res.status(500).send('Error');
//     //     } else if (user) {
//     //         res.status(200).json( {message: 'You are logged'});
//     //     }
//     // })
//     const token = jwt.sign({user}, 'my_secret_key');
//     res.json({
//         token: token
//     });
// })

// router.get('/sessions/user', (req, res) => {

// })

// router.get('/user/:userId', async (req, res) => {
//    try {
//        console.log(req.params.userId);
//        const user = await User.findById(_id: req.params.userId);
//        res.json(user);
//    }catch(err) {
//        res.json({message: err});
//    }
// });

// router.get('/users', (req, res) => {
//     const users = User.find({}, (err, users) => {
//         if (err) {
//             console.log('RETRIEVE error: ' + err);
//             res.status(500).send('Error');
//         } else if (users) {
//             res.status(200).json(users);
//         }
//     })
// })

// router.put('/user/:id', async (req, res) => {
//   let id = req.params.id;

//   User.findOne({_id: id}, function(err, foundObject) {
//     if (err) {
//         console.log(err);
//         res.status(500).send('Error');
//     } else {
//         res.status(200).json(users);
//     }
// })
// });

// router.delete('/user/:userId', async (req, res) => {
//     try {
//         console.log(req.params.userId);
//         const removeUser = await User.deleteOne({_id: req.params.userId});
//         res.json(removeUser);
//     }catch(err) {
//         res.json({message: err});
//     }
//  });

// //Movies


// module.exports = router;
