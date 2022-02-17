import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Track = styled.div`
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
`;

interface KnobProps {
  $knobWidth: number;
}

export const Knob = styled(motion.div)<KnobProps>`
  width: ${props => props.$knobWidth}px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 50%;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
