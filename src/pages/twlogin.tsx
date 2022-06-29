import TwitterLogin from 'react-twitter-login';
import { TwitterKey } from '../configs/google';

const TwitterLoginPage = () => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };
  return (
    <div>
      <TwitterLogin
        authCallback={authHandler}
        consumerKey={TwitterKey.api_key}
        consumerSecret={TwitterKey.secret_key}
        callbackUrl="http://localhost:3000/twlogin"
      />
    </div>
  );
};

export default TwitterLoginPage;
