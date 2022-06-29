import { GoogleLogin } from 'react-google-login';
import { LoginGGCpn } from '../components/LoginGG';
import { client_id } from '../configs/google';
interface GoogleLoginProps {}

const GoogleLoginPage = (props: GoogleLoginProps) => {
  const onSuccess = (response: any) => {
    console.log({ response }, '%c<----');
  };

  const onFailure = (response: any) => {
    console.log({ response }, '%c<--onFailure--');
  };

  return (
    <div>
      {/* <GoogleLogin
        clientId={client_id}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      <LoginGGCpn /> */}
    </div>
  );
};

export default GoogleLoginPage;
