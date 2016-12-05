import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import config from '../config';

export const signup = async function(req, res, next) {
  const credentials = req.body;
  let user;

  try {
    user = await User.create(credentials)
  } catch ({message}) {
    console.log(message)
    return next({
      status: 403,
      message: message
    })
  }

  console.log(user)
  res.json(user)
}

export const signin = async function(req, res, next) {
  const {login, password} = req.body;
  const user = await User.findOne({login});

  if(!user) {
    return next({
      status:  404,
      message: 'User not Found'
    })
  }

  try {
    const result = await user.comparePassword(password);
  } catch ({message}) {
    return next({
      status: 403,
      message: 'Bad credentials'
    })
  }

  const token = jwt.sign({_id: user._id}, config.secret);
  res.json(token);

}
