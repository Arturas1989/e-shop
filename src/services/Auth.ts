import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../db/firebase';
import { toast } from 'react-toastify';
import { type NavigateFunction } from 'react-router-dom';

export class Auth {
  private email;
  private password;
  private navigate;
  private redirect_to;
  private auth;

  constructor(email: string, password: string, navigate: NavigateFunction, redirect_to: string) {
    this.email = email;
    this.password = password;
    this.navigate = navigate;
    this.auth = getAuth();
    this.redirect_to = redirect_to;
  }

  register(name: string) {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.updateUser(name, user);
        
        this.navigate(this.redirect_to);
      })
      .catch((error) => {
        const emailExist =
          error.message.indexOf('auth/email-already-in-use') !== -1;
        if (emailExist) toast.error('email already exists');
        console.clear();
      });
  }

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        this.navigate(this.redirect_to);
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-login-credentials')
          toast.error('incorect email or password');
        if (error.code === 'auth/too-many-requests')
          toast.error('too many requests, please wait');
        console.clear();
      });
  }

  updateUser(name: string, user: User) {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        toast.error(error);
        console.clear();
      });
      setDoc(doc(db, 'users', user.uid), {
        name,
        email: this.email,
      });
  }
}
