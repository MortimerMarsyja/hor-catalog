import styled from 'styled-components'

export const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 0 1px 6px 0 rgba(32,32,36,0.30);
  height:34px;
  width:100%;
  display:flex;
  flex-wrap:nowrap;
  line-height:3px;
  a{
    position:absolute;
    right: 50%;
  }
  svg{
    margin: 5px auto;
  }
  p{
    text-transform:uppercase;
    font-weight:600;
    margin-left:30px;
    justify-content:flex-start;
  }
`