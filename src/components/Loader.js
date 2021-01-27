import React from 'react';
import loaderGif from './Images/loader_v2.gif';

const Loader = () => {
    return (
        <div className={"loader-container"}>
            <img src={loaderGif} className={"loader"} alt="loading..."/>
        </div>
    )
}

export default Loader;
