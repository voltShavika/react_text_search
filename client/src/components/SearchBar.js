import React, { useState } from 'react'
import useAdSearch from '../useAdSearch';

function Ad(props){
    return (
        <div className='col-sm-6 col-md-3 mb-4'>
            <div className="card">
                <img src={props.data.imageUrl} className='card-img-top' />
                <div className="card-body">
                    <h6 className="card-title">{props.data.headline}</h6>
                    <p className="card-subtitle mb-2 text-muted">{props.data.primaryText}</p>
                    <p className="card-text">{props.data.description}</p>
                    <a className="btn btn-primary">{props.data.CTA}</a>
                </div>
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
            <div className='row'>
                {
                    ads.map((ad, i) => <Ad data={ad} key={i} />)
                }
            </div>
        </>
    ) 
}
