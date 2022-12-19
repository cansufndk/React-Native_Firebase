import auth from '@react-native-firebase/auth';

export const createUserFb = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.error('createUserFb', error);
  }
};

export const getUserInfo = () => {
  const user = auth().currentUser.uid;
  return user;
};

export const userSignUp = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const userSignout = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

/*auth()
   .createUserWithEmailAndPassword(
     'jane.doe@example.com',
     'SuperSecretPassword!',
   )
   .then(() => {
   })
   .catch(error => {
     if (error.code === 'auth/email-already-in-use') {
       console.log('That email address is already in use!');
     }

     if (error.code === 'auth/invalid-email') {
       console.log('That email address is invalid!');
     }

     console.error(error);
   });*/
