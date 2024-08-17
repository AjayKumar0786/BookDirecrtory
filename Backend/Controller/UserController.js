import {User} from '../model/UserModel.js'
//controller for create a new user
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const saltRounds = 10;
export const Register = async (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }

      const newUser = new User({
        Name: req.body.username,
        email: req.body.email,
        phone: req.body.number,
        password: hash,
       
      });
      let token  = jwt.sign({email:req.body.email},process.env.SECRET);
      newUser.token = token;
      const doc = await newUser.save();
      const Token = doc.token;

      // console.log(doc);
      // console.log('Successfully Registered');
      res.json({ success: true ,Token});
    

   
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


//code for login user

export const login = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ Name: username });
 
    if (!user) {
      // User not found
 
      return res.json({ success: false, message: 'Invalid username or password' });
   
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (result === true) {
        // Passwords match
       const token = user.token;
     
     

        res.json({ success: true, message: 'Successfully logged in',token});
      
      } else {
        // Passwords do not match
        console.log('Login failed');
        res.json({ success: false, message: 'Invalid username or password' });
        // res.redirect('/');
      }
    });
  } catch (err) {
    console.error(err);
   
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


