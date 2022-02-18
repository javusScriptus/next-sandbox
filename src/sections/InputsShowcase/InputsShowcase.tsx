import React, { useState } from 'react';

import { DualRangeSlider } from 'components/Inputs/DualRangeSlider/DualRangeSlider';

import * as S from './InputsShowcase.styles';

export const InputsShowcase = () => {
  const minValue = 1800;
  const maxValue = 2022;

  const [sliderUpper, setSliderUpper] = useState(maxValue);
  const [sliderLower, setSliderLower] = useState(minValue);

  return (
    <>
      <S.Wrapper>
        <DualRangeSlider
          setSliderUpper={setSliderUpper}
          setSliderLower={setSliderLower}
          sliderUpper={sliderUpper}
          sliderLower={sliderLower}
          maxValue={maxValue}
          minValue={minValue}
        />
      </S.Wrapper>
    </>
  );
};
