import styled from 'styled-components'
 
export const StyledItem = styled.div`
  width: 800px;
  background-color: #none;
  margin: 12px auto;
  padding: 12px 9px;
  border-radius:6px;
  border: 1px solid #cecece;
  .label{
    color:#6e6e6e;
    font-weight: 600;
  }
  .price{
    font-size:24px;
  }
  .description{
    line-height:20px;
  }
  img{
    float:right;
  }
  ul{
    list-style-type:none;
    li{
      line-height:30px;
    }
  }
`

export const ItemWrapper = styled.div`
  width: 812px;
  margin: 12px auto;
`


