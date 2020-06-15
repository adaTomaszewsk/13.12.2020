import * as jwt_decode from 'jwt-decode';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class JwtResolver {
    public getDecodedAccessToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch
            (Error) {
            return null;
        }
    }
}
