import React from 'react';
import Logo from '../Logo';
//styles
import {StyledHeader} from './header.style';

const Header = () => {
  return(
    <StyledHeader>
      <p>Phone Catalog</p>
      <a href="/"><Logo/></a>
      <p>&nbsp;</p>
    </StyledHeader>
  )
}

export default Header;