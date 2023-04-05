import Loader from 'components/loader';
import usePizzaData from 'hooks/usePizzaData';
import React from 'react'
import { useParams } from 'react-router-dom';


export default function PizzaDetail(props) {
  const { id } = useParams();
  const { data, isLoading, error } = usePizzaData(id);

  return (
    <Loader isLoading={isLoading} fallback={'Loading...'} error={error} >
      <div>
        <img src={data.imgSrc} alt={data.title} />
      </div>
      <h1>{data.title}</h1>
      {data?.ingredients?.map?.((item) => <div>{item}</div>)}
    </Loader>
  )
}
