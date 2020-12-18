import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import * as StyleComponent from './style';

const Alert = () => {
  const { mode, toggle } = useSelector(
    (state: RootState) => state.alertReducer
  );
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (mode !== 0) {
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
    }, 7000);
  }, []);

  return (
    <>
      <StyleComponent.MiddleHolder visible={visible}>
        {(function () {
          if (mode === 0) {
            return (
              <div className="alert alert-info">
                <strong>
                  Info
                  <span role="img" aria-label="bulb">
                    💡
                  </span>
                </strong>
                Try drag and drop here!
              </div>
            );
          }
          if (mode === 1) {
            return (
              <div className="alert alert-error">
                <strong>
                  sorry
                  <span role="img" aria-label="hands">
                    🙏
                  </span>
                </strong>
                This feature is still being prepared.
              </div>
            );
          }
          if (mode === 2) {
            return (
              <div className="alert alert-success">
                <strong>
                  Well done!
                  <span role="img" aria-label="hansUp">
                    👐
                  </span>
                </strong>
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
