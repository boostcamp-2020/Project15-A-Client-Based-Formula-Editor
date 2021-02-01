import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import * as StyleComponent from './style';
import AlertComponent from './AlertComponent';
import magicNumber from './magicNumber';

const Alert = () => {
  const { mode, toggle } = useSelector(
    (state: RootState) => state.alertReducer
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (mode !== magicNumber.INFO) {
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 2500);
    }
  }, [toggle]);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 1000);

    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return (
    <>
      <StyleComponent.MiddleHolder visible={visible}>
        {(function () {
          if (mode === magicNumber.INFO) {
            return (
              <div className="alert alert-info">
                <AlertComponent messageType="Info" label="bulb" />
                Try drag and drop here!
              </div>
            );
          }
          if (mode === magicNumber.ERROR) {
            return (
              <div className="alert alert-error">
                <AlertComponent messageType="sorry" label="hands" />
                This feature is still being prepared.
              </div>
            );
          }
          if (mode === magicNumber.SUCCESS) {
            return (
              <div className="alert alert-success">
                <AlertComponent messageType="Well done!" label="hansUp" />
                You have successfully saved.
              </div>
            );
          }
          return undefined;
        })()}
      </StyleComponent.MiddleHolder>
    </>
  );
};

export default Alert;
