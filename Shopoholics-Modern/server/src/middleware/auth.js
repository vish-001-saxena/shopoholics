import jwt from 'jsonwebtoken';
export function auth(req,res,next){
  try { const token=req.cookies.token; if(!token) return res.status(401).json({success:false,message:'Please log in first.'}); const decoded=jwt.verify(token,process.env.JWT_SECRET); req.userId=decoded.id; next(); }
  catch { return res.status(401).json({success:false,message:'Session expired. Please log in again.'}); }
}
