import React, { useEffect, useState } from 'react';
import ReactCrop from 'react-image-crop';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import html2canvas from 'html2canvas';
import { Modal } from './MainSectionStyle';

const CropSection = () => {
  const [url, setUrl] = useState('');
  const [cropData, setCrop] = useState({});

  const { mathQuillContainer } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  let imageUrl;
  const onChangeHandler = (crop: any, percentCrop: any) => {
    setCrop(crop);
  };
  useEffect(() => {
    const getHtml = async () => {
      const src = mathQuillContainer.current;
      const canvas = await html2canvas(src);
      imageUrl = canvas.toDataURL('image/gif');
      setUrl(imageUrl);
      setCrop({ width: 30, height: 30, unit: 'px' });
    };
    getHtml();
  }, []);
  return (
    <>
      <Modal display="block">
        <ReactCrop
          src={url}
          crop={cropData}
          ruleOfThirds
          onChange={onChangeHandler}
        />
      </Modal>
    </>
  );
};

export default CropSection;
