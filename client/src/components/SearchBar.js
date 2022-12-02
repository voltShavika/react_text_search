import React, { useState } from 'react'
import useAdSearch from '../useAdSearch';
import Masonry from 'react-masonry-css';
import '../masonry.css'

function Ad(props){
    return (
        <div className="card m-1">
            <img src={props.data.imageUrl} className='card-img-top' />
            <div className="card-body">
                <h6 className="card-title">{props.data.headline}</h6>
                <p className="card-subtitle mb-2 text-muted">{props.data.primaryText}</p>
                <p className="card-text">{props.data.description}</p>
                <a className="btn btn-primary">{props.data.CTA}</a>
            </div>
        </div>
    )
}

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const {loading, error, ads} = useAdSearch(query);
    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <>
            <div className='row'>
                <input value={query} onChange={handleQueryChange} className='form-control' placeholder='Search Company, Headline, Description....' />
            </div>
            <br/>
            <hr />
            {
                loading && <p>Loading....</p>
            }
            <Masonry breakpointCols={4} className="my-masonry-grid" columnClassName='my-masonry-grid-column'>
                {
                    ads.map((ad, i) => <Ad data={ad} key={i} />)
                }
            </Masonry>
            
        </>
    ) 
}
