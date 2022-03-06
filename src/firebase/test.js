import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('ImYAHQQBIKoyjh6esUSd').collection('cartItems').doc('cPlHVUw5MUaNxaaFRqcO');
firestore.doc('/users/ImYAHQQBIKoyjh6esUSd/cartItems/cPlHVUw5MUaNxaaFRqcO')
firestore.collection('/users/ImYAHQQBIKoyjh6esUSd/cartItems')