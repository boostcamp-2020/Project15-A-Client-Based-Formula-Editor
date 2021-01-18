/* eslint-disable react/destructuring-assignment */
import React from 'react';

const AlertComponent = (props: any) => {
  return (
    <>
      <strong>
        {props.messageType}
        <span role="img" aria-label={props.label} />
      </strong>
    </>
  );
};

export default AlertComponent;
