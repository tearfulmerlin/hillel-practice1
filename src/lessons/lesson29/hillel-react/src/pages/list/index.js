import Card from 'components/card';
import Loader from 'components/loader';
import usePizzaList from 'hooks/usePizzaList';
import React from 'react'


export default function List(props) {
  const { data, isLoading, error } = usePizzaList();
  
  return (
    <Loader isLoading={isLoading} fallback={'Loading...'} error={error} >
      <div className='container pizzas'>
        {data?.map?.((item) => <Card key={item.title} data={item} />)}
      </div>
    </Loader>
  );
}
