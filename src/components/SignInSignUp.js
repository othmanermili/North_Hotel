import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './SignInSignUp.css';
import image from '../asseets/hotel-bg.png';

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const formAnimation = useSpring({
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? 'translate3d(50%,0,0)' : 'translate3d(0%,0,0)',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      setIsSignUp(!isSignUp);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div>
      <img src={image} alt="" className='img-bg'/>
      <animated.div style={formAnimation}>
      <form onSubmit={handleSubmit} className='content'>
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        {isSignUp && (
          <input type="password" placeholder="Confirm Password" required />
        )
        }
        <button className='btn' type="submit">Submit</button>
        <button className='btn' type="button" onClick={handleSubmit}>
          Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      </animated.div>
    </div>
  );
};

export default SignInSignUp;
