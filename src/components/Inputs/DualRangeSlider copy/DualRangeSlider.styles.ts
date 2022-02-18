import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const InputsWrapper = styled.span`
  display: inline-block;
  width: 100%;
  position: relative;
  height: 20px;

  &:before {
    content: '';
    width: 100%;
    height: 2px;
    background: red;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  input[type='range'] {
    position: absolute;
    appearance: none;
    width: 100%;
    margin: 0;
    border: 0;
    border-radius: 1px;
    outline: none;
    pointer-events: none;

    &:active,
    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: black;
      position: relative;
      cursor: pointer;
      pointer-events: all;
    }
  }
`;
