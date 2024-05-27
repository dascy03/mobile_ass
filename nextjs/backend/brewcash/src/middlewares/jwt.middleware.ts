import jwt from 'jsonwebtoken';

export function jwtMiddleware(accessTokens: string) {
  try {
    const decoded: any = jwt.verify(accessTokens, 'super-ultra-max-secret');
    return decoded._id;
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    return null; // Return null or handle error as per your requirement
  }
}
