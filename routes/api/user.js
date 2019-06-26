const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const localStrategy = passport.authenticate("local", { session: false });
// const userController = require("../../controllers/userController");

const tokenizer = user => {
    return "Bearer " + jwt.sign({
        sub: user.id
    },
        keys.secretOrKey
    )
}

// Load input validation
const validateRegisterInput = require("../../config/validation/register");
const validateLoginInput = require("../../config/validation/login");

const User = require("../../models").User;


// @route POST api/user/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                description: req.body.description
            });
            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json({ token: tokenizer(user) }))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});


router.post("/login", localStrategy, function (req, res) {
    res.json({ token: tokenizer(req.user) });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
// router.post("/login", (req, res) => {
//     // Form validation
//     const { errors, isValid } = validateLoginInput(req.body);
//     // Check validation
//     if (!isValid) {
//         return res.status(400).json(errors);
//     }
//     const email = req.body.email;
//     const password = req.body.password;
//     // Find user by email
//     User.findOne({ email }).then(user => {
//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({ emailnotfound: "Email not found" });
//         }
//         // Check password
//         bcrypt.compare(password, user.password).then(isMatch => {
//             if (isMatch) {
//                 // User matched
//                 // Create JWT Payload
//                 const payload = {
//                     id: user.id,
//                     name: user.name
//                 };
//                 // Sign token
//                 jwt.sign(
//                   payload,
//                   keys.secretOrKey,
//                   {
//                     expiresIn: 31556926 // 1 year in seconds
//                   },
//                   (err, token) => {
//                     res.json({
//                       success: true,
//                       token: "Bearer " + token
//                     });
//                   }
//                 );
//             }
//             else {
//               return res
//                 .status(400)
//                 .json({ passwordincorrect: "Password incorrect" });
//             }
//         });
//     });
// });

// router
//   .route("/:id")
//   .put(userController.update)

// router.put("/userUpdate/:id" , function(req, res) {
//     db.moonlight.update(
//         {
//             _id: mongojs.ObjectID(req.params.id)
//         },
//         {
//             $set: {
//                 name: req.body.name,
//                 phone: req.body.phone,
//                 description: req.body.description
//             }
//         },
//         function(error, edited) {
//             if (error) {
//                 console.log(error);
//                 res.send(error);
//             }
//             else {
//                 console.log(edited);
//                 res.send(edited);
//             }
//         }
//     );
// });

module.exports = router;