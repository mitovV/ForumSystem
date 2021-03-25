const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const register = (email, password) => {
    let user = new User({ email, password });

    return user.save();
};

const login = async(email, password) => {
    let user = await User.findOne({ email });
    const errorObj = { message: 'Invalid username or password' };

    if (!user) {
        throw errorObj;
    }

    let areEqual = await bcrypt.compare(password, user.password);

    if (!areEqual) {
        throw errorObj;
    }

    let token = jwt.sign({ _id: user._id, email: user.email }, SECRET, { expiresIn: '1h' });
    return token;
};

module.exports = {
    register,
    login,
}