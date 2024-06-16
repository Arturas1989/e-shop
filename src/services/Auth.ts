import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type User,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../db/firebase';
import { toast } from 'react-toastify';
import { type NavigateFunction, Location } from 'react-router-dom';
import { DBUser, FormFields } from '../types';

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
        
        if (error.message) toast.error(error.message);
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
        currentCartId: ''
      } as DBUser);
  }
}

export const logout = () => {
  const auth = getAuth();
    signOut(auth).then(() => {

    }).catch((error) => {
      console.log(error);
    });
}

export const loginAsGuest = (navigate: NavigateFunction, location: Location) => {
  const redirect_to = location.state ? location.state : '/';
  const auth = new Auth('guest@guest.com', 'guestguest', navigate, redirect_to);
  auth.login();
}

export const login = (e: React.FormEvent<HTMLFormElement>, navigate: NavigateFunction, location: Location) => {
  const form = e.target as EventTarget & Omit<FormFields, 'name'>;
  const { email, password } = form;
  const redirect_to = location.state ? location.state : '/';
  const auth = new Auth(email.value, password.value, navigate, redirect_to);
  auth.login();
}

export const register = (e: React.FormEvent<HTMLFormElement>, navigate: NavigateFunction) => {
  const form = e.target as EventTarget & FormFields;
    const { name, email, password } = form;

    const auth = new Auth(email.value, password.value, navigate, '/');
    auth.register(name.value);
}
