import type { Request } from 'express';
import type IJWTPayload from './JWTPayload.js';

export default interface IUserAuthRequest extends Request { 
  user: IJWTPayload
}
