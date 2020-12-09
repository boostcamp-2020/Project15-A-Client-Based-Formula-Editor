import { useEffect, MutableRefObject } from 'react';
import { useDispatch } from 'react-redux';

const outsideClick = (
  ref: MutableRefObject<HTMLDivElement>,
  state: boolean,
  action: any
) => {
  const dispatch = useDispatch();
  const click = (e: MouseEvent) => {
    if (ref && !ref.current.contains(e.target as Element)) {
      if (state) dispatch(action());
    }
  };
  useEffect(() => {
    document.addEventListener('click', click);
    return () => {
      document.removeEventListener('click', click);
    };
  });
};
export default outsideClick;
