/* eslint-disable */

import React from 'react';
import Iconhuifumoren from './Iconhuifumoren';
import Iconhome from './Iconhome';
import Iconwode from './Iconwode';
import Iconricheng from './Iconricheng';

const IconFont = ({ name, ...rest }) => {
  switch (name) {
    case 'huifumoren':
      return <Iconhuifumoren {...rest} />;
    case 'home':
      return <Iconhome {...rest} />;
    case 'wode':
      return <Iconwode {...rest} />;
    case 'richeng':
      return <Iconricheng {...rest} />;

  }

  return null;
};

export default IconFont;
