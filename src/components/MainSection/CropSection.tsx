import React, { useEffect, useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import html2canvas from 'html2canvas';
import colors from '@src/utils/colors';
import { Modal, CropSaveButton } from './MainSectionStyle';

const CropSection = () => {
  const [url, setUrl] = useState('');
  const [cropData, setCrop] = useState({});
  const [imageRef, setImageRef] = useState();
  const [cropUrl, setCropUrl] = useState('');
  const ref = useRef();
  const { mathQuillContainer } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  let imageUrl;
  const onChangeHandler = (crop: any, percentCrop: any) => {
    setCrop(crop);
  };
  const getCroppedImg = (image: any, crop: any) => {
    const canvas = document.createElement('canvas'); // document 상에 canvas 태그 생성
    // 캔버스 영역을 크롭한 이미지 크기 만큼 조절
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    // 화면에 크롭된 이미지를 그린다
    ctx.drawImage(
      // 원본 이미지 영역
      image, // 원본 이미지
      crop.x * scaleX, // 크롭한 이미지 x 좌표
      crop.y * scaleY, // 크롭한 이미지 y 좌표
      crop.width * scaleX, // 크롭한 이미지 가로 길이
      crop.height * scaleY, // 크롭한 이미지 세로 길이
      // 캔버스 영역
      0, // 캔버스에서 이미지 시작 x 좌표
      0, // 캔버스에서 이미지 시작 y 좌표
      crop.width, // 캔버스에서 이미지 가로 길이
      crop.height //  캔버스에서 이미지 세로 길이
    );
    return new Promise((resolve) => {
      resolve(canvas.toDataURL());
    });
  };
  const makeClientCrop = async (crop: any) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageUrl = (await getCroppedImg(imageRef, crop)) as string;
      setCropUrl(croppedImageUrl);
    }
  };

  const onComplateHandler = (crop: any, percentCrop: any) => {
    makeClientCrop(crop);
  };
  const onImageLoaded = (image: any) => {
    setImageRef(image);
  };
  const onClickSaveHandler = () => {
    const aTag = document.createElement('a');
    document.body.appendChild(aTag);
    aTag.download = '수식 저장.gif';
    aTag.href = cropUrl;
    aTag.click();
    document.body.removeChild(aTag);
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
        <CropSaveButton onClick={onClickSaveHandler}>저장하기</CropSaveButton>
        <ReactCrop
          src={url}
          crop={cropData}
          ruleOfThirds
          onChange={onChangeHandler}
          onComplete={onComplateHandler}
          onImageLoaded={onImageLoaded}
          ref={ref}
        />
      </Modal>
    </>
  );
};

export default CropSection;
