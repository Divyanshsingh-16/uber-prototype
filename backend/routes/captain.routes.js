const express = require('express');
const captainController = require('../controllers/captian.controller');

const router = express.Router();
const{body} = require("express-validator");
const authMiddleware = require('../middlewares/auth.middleware')



router.post('/register',[

body('email').isEmail().withMessage('Invalid Email'),

body('fullname.firstname').isLength({min:3}).withMessage('firstname must be at least 3 3 character'),
body('password').isLength({min:6}).withMessage('password must be at least 6 character'),
body('vehicle.color').isLength({min:3}).withMessage('color must be at least 3 character'),
body('vehicle.plate').isLength({min:3}).withMessage('platenumber must be at least 3 character'),
body('vehicle.capacity').isLength({min:1}).withMessage(' capacity must be at least 1 character' ),
body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid type')
],

captainController.registerCaptain


)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 charcter'),
],

captainController.loginCaptain
)






router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);


router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)



module.exports = router;