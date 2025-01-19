import React from 'react';
import styled from 'styled-components';

interface Props {
    name: string;
  }

const TrackName: React.FC<Props> = ( {name} ) => {
  return (
    <StyledWrapper>
      <h2 className="btn-shine">{name}</h2>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');

  .btn-shine {
    word-wrap: break-word;
    overflow-wrap: break-word; 
    white-space: normal;
    height: auto;
    text-align: center;

    color: rgba(76, 45, 253, 1);
    background: linear-gradient(to right, #130c25 0, rgb(22, 92, 93) 10%, #130c25 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 10s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    font-weight: 900;
    font-size: 2.5rem;
    text-decoration: none;
    font-family: "Exo 2", serif;
  }

  @-moz-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 800px;
    }
    100% {
      background-position: 800px;
    }
  }
  @-webkit-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 800px;
    }
    100% {
      background-position: 800px;
    }
  }
  @-o-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 800px;
    }
    100% {
      background-position: 800px;
    }
  }
  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 800px;
    }
    100% {
      background-position: 800px;
    }
  }`;

export default TrackName;
