import styled from 'styled-components';

const Fish = () => (
  <StyledFish 
    className="fish" 
    stroke="currentColor" 
    fill="currentColor" 
    stroke-width="0"
    viewBox="0 0 576 512" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d = "M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"
    >
    </path>
  </StyledFish>
)

const StyledFish = styled.svg`
  width: 3rem;
	height: 2rem;
	margin-left: 0%;
	position: absolute;
  overflow: hidden;

	-webkit-animation: swim 25s;
	animation: swim 25s;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
	animation-timing-function: linear;

  @keyframes swim {
    0% {
      margin-left: 0%;
      -webkit-transform: translateY(0);
      transform: translateY(0);  
    }
    25% {
      -webkit-transform: translateY(6px);
      transform: translateY(6px);
    }
    50% {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
    }
    75% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
      margin-left: 75%;
      opacity: 0.5;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      margin-left: 80%; 
      opacity: 0;
    }
  }
`;

export default Fish;