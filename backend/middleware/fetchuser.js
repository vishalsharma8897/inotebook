const jwt = require('jsonwebtoken');
const secretKey = 'VishalKOG_Developer'; //with your own secret key

const fetchuser=(req,res,next)=>{
  // get the auth-token from user and apppend it into the req body ;

  const token = req.header("auth-token");
  if(!token)
  {
    res.status(401).json({error:"please authenticate yourself with a token"});
  }
  try {
    const data = jwt.verify(token , secretKey);
    req.userId = data;

  } catch (error) {
    res.status(401).json({error:"please authenticate yourself with a token"});
  }

 next();
}


module.exports= fetchuser;