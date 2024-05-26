import jwt from 'jsonwebtoken';

export function jwtMiddleware(accessTokens: string) {
  try {
    const decoded: any = jwt.verify(accessTokens, 'your_jwt_secret_key_here');
    const userId = decoded.userId; // Assuming userId is part of your JWT payload
    // Add other properties if needed

    return userId ; // Return decoded data
  } catch (error) {
    console.error('JWT verification failed:', error.message);
    return null; // Return null or handle error as per your requirement
  }
}
