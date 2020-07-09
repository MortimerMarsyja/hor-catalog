import React, { useEffect,useState } from 'react';
import {Link} from "react-router-dom";
//hooks
import { useDispatch, useSelector } from 'react-redux';
//actions
import {fetchPhones} from '../../03-actions/catalog-actions';
//services
import {FetchCatalogCall} from '../../07-services/index';
//styles
import StyledCatalog from './catalog.style';


const phoneParser = (catalog) => {
  return catalog.map(phone => 
    <li>
      <Link to={`/catalog/${phone['id']}`}>
        {phone['name']} [{phone['manufacturer']}]
      </Link>
    </li>
  )
}

const getPhonesFromStore = () => (store) => store.catalog || {};

function Catalog(){
  const phoneList = useSelector(getPhonesFromStore());
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
    {isLoading === true ? (<p>loading catalog...</p>) : <StyledCatalog><ul>{phoneParser(phoneList)}</ul></StyledCatalog>}
  </div>
  )
}

export default Catalog;