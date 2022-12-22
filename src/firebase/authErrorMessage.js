export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi!';
      break;
    case 'auth/email-already-exists':
      return 'Kullanıcı kayıtlı!';
      break;
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';
      break;
    case 'auth/weak-password':
      return 'Parola çok zayıf';
      break;
    case 'auth/wrong-password':
      return 'Parola geçersiz';
      break;
    default:
      return errorCode;
      break;
  }
}
