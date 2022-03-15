import React, {useContext} from 'react';
import Message from '../Common/Message';
import { SeriesContext } from '../../context/SeriesContext';
import SeriesList from './SeriesList';
import SearchSeries from './SearchSeries';
import { Provider } from './Provider';
import { Loader } from '../Common/Loader';


const Series = () => {
    const { doneFetch, title, series, query, provider, doneFetchProvider, validateTerm, getSeriesNetwork, active} = useContext(SeriesContext)
    return (
    <>
    <div className='search-bar-content'>
    {
      doneFetchProvider ? provider.length ? <Provider provider={provider} getSeriesNetwork={getSeriesNetwork} active={active} /> : "": <Loader/>
    }

    
    <SearchSeries validateTerm={validateTerm}/>
    </div>
   
    {doneFetch ? (series.length ? (<SeriesList title={title} series={series} query={query}/>) : (<Message title={title} query={query} />)) : <Loader/>}
      
    </>
    )
}

export default Series
