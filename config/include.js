express = require('express');
router = express.Router();
mongoose = require('mongoose');
Schema = mongoose.Schema;
passport = require('passport');
JwtStrategy = require('passport-jwt').Strategy;
ExtractJwt = require('passport-jwt').ExtractJwt;
bcrypt = require('bcrypt');
jwt = require('jwt-simple');
moment = require('moment');

config = require('./config');
require('./db');
message = require('./message');
token = require('./token');
controller = require('../controller/controller');