import {FETCH_CATALOG} from './endpoints';

export async function FetchCatalogCall()
{
  return await fetch(
    FETCH_CATALOG,
    ).then((response) => response.json());
};