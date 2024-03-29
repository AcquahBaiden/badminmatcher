import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }
  
  
  async user(){
    /**
     * Returns current user object
     * :return firebaseUser | null
     */
    return this.auth.currentUser
  }
}
