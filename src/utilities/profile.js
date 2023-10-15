import { useAuthState, useDbData } from "./firebase";

export const useProfile = () => {
  const [user] = useAuthState();
  // isAdmin is either null 
    // (useDbData is passed a bad path if signed in user is not an admin) 
  // or an object {uid: 'some-uid'} 
    // (useDbData is passed a good uid path)
  // or a boolean 
    // (useDbData is passed a good guest path if no one is signed in)
  const [isAdmin, error] =  useDbData(`/admins/${user?.uid || 'guest'}`);
//   console.log('useProfile', user, isAdmin);
  return [{ user, isAdmin }, error];
};