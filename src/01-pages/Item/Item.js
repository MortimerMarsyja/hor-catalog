import React, { useEffect,useState } from 'react';
//hooks
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
//actions
import {fetchPhones} from '../../03-actions/catalog-actions';
//services
import {FetchCatalogCall} from '../../07-services/index';
//styles
import {StyledItem,ItemWrapper} from './item.style';

const imageSource = "https://raw.githubusercontent.com/guidesmiths/interview-code-challenges/master/react/phone-catalogue/images/"
const getPhoneById = (id) => (store) => store.catalog[id] || {};
const itemRenderer = (phone) => {
  return(
    <ItemWrapper>
      <a href="/">back</a>
      <StyledItem>
        <img src={imageSource + `${phone.imageFileName}`} alt={`${phone.name}`} width="500"/>
        <p className='label'>Model</p>
        <p>{phone.name}</p>
        <p className='label'>Manufacturer</p>
        <p>{phone.manufacturer}</p>
        <p className='label'>Description</p>
        <p className='description'>{phone.description}</p>
        <p className='label'>Price</p>
        <p className='price'>${phone.price}</p>
        <p className='label'>Processor</p>
        <p>{phone.processor}</p>
        <p className='label'>Ram</p>
        <p>{phone.ram}</p>
        <p className='label'>Screen</p>
        <p>{phone.screen}</p>
        <p className='label'>Color</p>
        <p>{phone.color}</p>
      </StyledItem>
    </ItemWrapper>
  )
}

function Item(){
  const idPhone = Number(useParams().id);
  const phone = useSelector(getPhoneById(idPhone));
  const [isLoading,setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    FetchCatalogCall()
      .then((data)=>{
      dispatch(
        fetchPhones(data)
      )
    })
    .catch((err)=>{console.log(err)})
    .finally(()=>{
      setLoading(false)
    })}, [dispatch]);
  return(
    <div>
      {isLoading === true ? (<p>loading catalog...</p>) : itemRenderer(phone)}
    </div>
  )
}

export default Item;