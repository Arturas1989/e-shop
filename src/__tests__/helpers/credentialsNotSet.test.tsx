import { credentialsNotSet } from '../../utils/helpers';
import { type FirebaseOptions } from '@firebase/app';

describe('credentialsNotSet firebase config', () => {
  test('apiKey not set', () => {
    const firebaseConfig: FirebaseOptions = {
      apiKey: undefined,
      authDomain: 'abc',
      projectId: 'abc',
      storageBucket: 'abc',
      messagingSenderId: 'abc',
      appId: 'abc',
    };
    const result = credentialsNotSet(firebaseConfig);
    expect(result).toBeTruthy();
  });
  test('authDomain not set', () => {
    const firebaseConfig: FirebaseOptions = {
      apiKey: 'abc',
      authDomain: undefined,
      projectId: 'abc',
      storageBucket: 'abc',
      messagingSenderId: 'abc',
      appId: 'abc',
    };
    const result = credentialsNotSet(firebaseConfig);
    expect(result).toBeTruthy();
  });
  test('projectId not set', () => {
    const firebaseConfig: FirebaseOptions = {
      apiKey: 'abc',
      authDomain: 'abc',
      projectId: undefined,
      storageBucket: 'abc',
      messagingSenderId: 'abc',
      appId: 'abc',
    };
    const result = credentialsNotSet(firebaseConfig);
    expect(result).toBeTruthy();
  });
  test('storageBucket not set', () => {
    const firebaseConfig: FirebaseOptions = {
      apiKey: 'abc',
      authDomain: 'abc',
      projectId: 'abc',
      storageBucket: undefined,
      messagingSenderId: 'abc',
      appId: 'abc',
    };
    const result = credentialsNotSet(firebaseConfig);
    expect(result).toBeTruthy();
  });
  test('messagingSenderId not set', () => {
    const firebaseConfig: FirebaseOptions = {
      apiKey: 'abc',
      authDomain: 'abc',
      projectId: 'abc',
      storageBucket: 'abc',
      messagingSenderId: undefined,
      appId: 'abc',
    };
    const result = credentialsNotSet(firebaseConfig);
    expect(result).toBeTruthy();
  });
  test('appId not set', () => {
    const firebaseConfig: FirebaseOptions = {
      apiKey: 'abc',
      authDomain: 'abc',
      projectId: 'abc',
      storageBucket: 'abc',
      messagingSenderId: 'abc',
      appId: undefined,
    };
    const result = credentialsNotSet(firebaseConfig);
    expect(result).toBeTruthy();
  });

  test('all is set', () => {
    const firebaseConfig: FirebaseOptions = {
      apiKey: 'abc',
      authDomain: 'abc',
      projectId: 'abc',
      storageBucket: 'abc',
      messagingSenderId: 'abc',
      appId: 'abc',
    };
    const result = credentialsNotSet(firebaseConfig);
    expect(result).toBeFalsy();
  });
  
});