import React from 'react';
import * as StyleComponent from './style';

const Alert = () => {
  return (
    <StyleComponent.MiddleHolder>
      <div className="alert alert-error">
        <strong>Oh snap! </strong>
        Change a few things up and try submitting again.
      </div>
      <div className="alert alert-success">
        <strong>Well done! </strong>
        You successfully read this important alert message.
      </div>
      <div className="alert alert-info">
        <strong>Heads up! </strong>
        This alert needs your attention, but its not super important.
      </div>
    </StyleComponent.MiddleHolder>
  );
};

export default Alert;
