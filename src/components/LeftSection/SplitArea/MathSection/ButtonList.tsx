import React from 'react';
import Loading from '@src/utils/svg/loading.svg';
import * as StyleComponent from './style';

interface Props {
  loading: boolean;
  latexContentList: JSX.Element[];
}
const LatexContentList = ({ loading, latexContentList }: Props) => {
  return (
    <>
      {loading === true ? (
        <StyleComponent.LoadingContainer>
          <Loading />
        </StyleComponent.LoadingContainer>
      ) : (
        latexContentList
      )}
    </>
  );
};

export default LatexContentList;
