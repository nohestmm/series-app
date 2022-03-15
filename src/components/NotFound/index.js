import React from 'react';
import Message from '../Common/Message';
import ButtonChange from '../Common/ButtonChange';

const NotFound = () => (
    <>
    <Message title="404: URL Not Found" />
    <ButtonChange type="back" to="/" />
  </>
)

export default NotFound
