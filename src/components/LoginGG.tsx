// import { gapi, loadAuth2 } from 'gapi-script';
import { useEffect } from 'react';
import { client_id } from '../configs/google';

interface LoginGGProps {}

export const LoginGGCpn = () => {
  useEffect(() => {
    const setAuth2 = async () => {
      const { gapi, loadAuth2 } = await import('gapi-script');
      const auth2 = await loadAuth2(gapi, client_id, '');
      if (auth2.isSignedIn.get()) {
        console.log(auth2.currentUser.get());
      } else {
        // attachSignin(document.getElementById('customBtn'), auth2);
      }
    };
    setAuth2();
  }, []);
  return <div>this is hello</div>;
};
