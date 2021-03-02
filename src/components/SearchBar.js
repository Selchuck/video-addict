import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
     };
 
     const onSubmit = (event) => {
         event.preventDefault();

         onTermSubmit(term);
     };

     return (
        <div style={{marginTop: "15px"}} className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field"> 
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
};

export default SearchBar;