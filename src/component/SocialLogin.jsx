import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImGithub } from 'react-icons/im';

const SocialLogin = () => {
  return (
    <div>
      <p className="font-bold mb-6">Login With</p>
      <button className="btn bg-base-100 w-full">
        <FcGoogle size={20} />
        Login with google
      </button>
      <button className="btn bg-base-100 w-full mt-2">
        <ImGithub size={20}/>
        Login with github
      </button>
    </div>
  );
};

export default SocialLogin;