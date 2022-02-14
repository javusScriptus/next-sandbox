import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import { DomRectSSR } from 'utils/sharedTypes';

type ElRef = React.RefObject<HTMLDivElement>;

interface Size {
  clientRect: DomRectSSR;
  offsetTop: number;
  offsetLeft: number;
  isReady: boolean;
}

const EmptySSRRect: DomRectSSR = {
  bottom: 1,
  height: 1,
  left: 1,
  right: 1,
  top: 1,
  width: 1,
  x: 1,
  y: 1,
};

const emptySize: Size = {
  clientRect: EmptySSRRect,
  offsetTop: 1,
  offsetLeft: 1,
  isReady: false,
};

export const useElementSize = (elRef: ElRef) => {
  const [size, setSize] = useState<Size>(emptySize);

  const onResize = useCallback(() => {
    if (!elRef.current) return;
    const rect = elRef.current.getBoundingClientRect();

    return setSize({
      clientRect: rect,
      isReady: true,
      offsetTop: elRef.current.offsetTop, //Retruns offset to relative element (not to the whole page)
      offsetLeft: elRef.current.offsetLeft,
    });
  }, [elRef]);

  useEffect(() => {
    const onResizeDebounced = debounce(onResize, 100);

    window.addEventListener('resize', onResizeDebounced);
    onResize();

    return () => {
      window.removeEventListener('resize', onResizeDebounced);
    };
  }, [onResize]);

  return {
    onResize,
    size,
  };
};
