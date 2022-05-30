import styled from 'styled-components';

import { media } from 'utils/media';
import { underline, s1 } from 'utils/sharedStyled';

export const GithubWrapper = styled.div`
  display: initial;
  position: fixed;
  z-index: 20;
  bottom: 0px;
  left: 0px;
  color: black;
  transform-origin: bottom left;
  transform: rotate(-90deg) translateY(calc(100% + 16px)) translateX(15px);

  ${media.tablet} {
    transform: none;
    bottom: 20px;
    left: 30px;
  }
`;

export const AuthorWrapper = styled.h1`
  position: fixed;
  z-index: 20;
  bottom: 10px;
  right: 20px;
  display: flex;
  align-items: center;
  color: black;
  ${s1};

  ${media.tablet} {
    bottom: 20px;
    right: 30px;
  }
`;

export const GithubLink = styled.span`
  display: inline-block;
  position: relative;
  ${s1};
  ${underline};
`;

export const AuthorLink = styled.span`
  display: inline-block;
  font-weight: 800;
  position: relative;
  ${underline};
  margin-left: 5px;
`;

export const InspirationWrapper = styled.h1`
  display: none;

  ${media.tabletLand} {
    display: initial;
    position: fixed;
    z-index: 20;
    display: flex;
    align-items: center;
    color: black;
    ${s1};
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const InspirationLink = styled.span`
  display: inline-block;
  font-weight: 800;
  position: relative;
  ${underline};
  margin-left: 5px;
`;
