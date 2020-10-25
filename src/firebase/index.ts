import * as firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig } from './firebase.config';

const app = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = app.auth();
