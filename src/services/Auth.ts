import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../db/firebase';
import { toast } from 'react-toastify';
import { type NavigateFunction } from 'react-router-dom';


export class Auth {
  private email;
  private password;
  private navigate;
  private auth;

  constructor(email: string, password: string, navigate: NavigateFunction){
    this.email = email;
    this.password = password;
    this.navigate = navigate
    this.auth = getAuth();
  }

 register(name: string){
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, 'users', user.uid), {
          name,
          email: this.email,
        });
        this.navigate('/');
      })
      .catch((error) => {
        const emailExist =
          error.message.indexOf('auth/email-already-in-use') !== -1;
        if (emailExist) toast.error('email already exists');
        console.clear()
      });
  }

 login(){
    signInWithEmailAndPassword(this.auth, this.email, this.password)
    .then(() => {
      this.navigate('/');
    })
    .catch((error) => {
      if(error.code === 'auth/invalid-login-credentials') toast.error('incorect email or password');
      if(error.code === 'auth/too-many-requests') toast.error('too many requests, please wait');
      console.clear()
    });
  }
}