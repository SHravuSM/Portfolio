// import React from 'react';
// import styled from 'styled-components';
// import { STORE } from '../context/AppContext';

// const DarkLight = () => {
//   const { setLight, light } = STORE();
//   return (
//     <StyledWrapper className='flex items-center font-any2 border border-red-500'>
//       <label className="theme-switch" htmlFor="checkbox" id="themeswitch">
//         <input onChange={e => setLight(pre => !pre)} type="checkbox" id="checkbox" />
//         <div className="slider round" />
//         <span className="name" />
//         <div className="back" />
//       </label>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .theme-switch {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     width: 5em;
//     height: 2.5em;
//     font-size: 17px;
//     // radius: 50px;
//     // font-family: sans;
//     font-weight: 600;
//     color: black;
//     background-color: white;
//     padding: 0em;
//     border: 1px solid black;
//     box-shadow: 6px 6px 0px black;
//     transition: .4s;
//     z-index: 1;
//   }

//   .name::before {
//     color: black;
//     content: "Dark";
//     margin-right: 2em;
//     transition: .2s ease-in-out;
//   }

//   .name::after {
//     color: black;
//     content: "Light";
//     margin-right: 1.7em;
//     transition: .2s ease-in-out;
//     display: none;
//   }

//   .theme-switch .slider {
//     position: absolute;
//     background-color: #222;
//     margin-left: 3.2em;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     border: 4px solid #222;
//     transform: rotate(-120deg);
//     box-shadow: inset 0px 6px #999, inset 0px 6px 1px 1px #999;
//     -moz-box-shadow: inset 0px 6px #999, inset 0px 6px 1px 1px #999;
//   }

//   .theme-switch:hover {
//     color: white;
//     cursor: pointer;
//     box-shadow: none;
//     transform: translateX(6px) translateY(6px);
//     background-color: black;
//     border: none;
//   }

//   .theme-switch:hover .name::before {
//     color: white;
//   }

//   .theme-switch:hover .name::after {
//     color: white;
//   }

//   .theme-switch input[type=checkbox]:checked + .slider {
//     transform: rotate(360deg);
//     box-shadow: none;
//     border: 4px solid #F28C38;
//     background-color: #F28C38;
//   }

//   .theme-switch input[type=checkbox]:checked ~ .name::before {
//     display: none;
//   }

//   .theme-switch input[type=checkbox]:checked ~ .name::after {
//     display: block;
//   }

//   .theme-switch input[type=checkbox] {
//     position: absolute;
//     visibility: hidden;
//   }

//   .slider {
//     transition: 300ms ease;
//   }`;

// export default DarkLight;

import React from 'react';
import styled from 'styled-components';
import { STORE } from '../context/AppContext';

const DarkLight = () => {
  const { setLight, light } = STORE();

  return (
    <StyledWrapper>
      <label className="theme-switch" htmlFor="checkbox" id="themeswitch" aria-label="Toggle dark/light mode">
        <input
          type="checkbox"
          id="checkbox"
          checked={light}
          onChange={() => setLight(prev => !prev)}
        />
        <span className="slider" />
        <span className="mode-label">{light ? 'Light' : 'Dark'}</span>
        <span className="background" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .theme-switch {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6em;
    height: 2.5em;
    background-color: white;
    border: 1px solid black;
    border-radius: 0.25em;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 6px 6px 0px black;
    transition: 0.4s;
    padding: 0 1em;
    gap: 0.5em;
  }

  .theme-switch:hover {
    color: white;
    background-color: black;
    border: none;
    transform: translateX(6px) translateY(6px);
    box-shadow: none;
  }

  .theme-switch input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .slider {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #222;
    border: 4px solid #222;
    transform: rotate(-120deg);
    transition: 300ms ease;
    box-shadow: inset 0 6px #999, inset 0 6px 1px 1px #999;
  }

  input[type="checkbox"]:checked + .slider {
    transform: rotate(360deg);
    background-color: #F28C38;
    border-color: #F28C38;
    box-shadow: none;
  }

  .mode-label {
    color: black;
    transition: color 0.3s ease;
  }

  .theme-switch:hover .mode-label {
    color: white;
  }

  .background {
    display: none;
  }
`;

export default DarkLight;