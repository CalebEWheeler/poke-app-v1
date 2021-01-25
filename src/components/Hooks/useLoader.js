import React, {useState} from 'react';
import Loader from '../Loader';

const useLoader = () => {
    const [isLoading, setIsLoading] = useState(false);
    return [
        isLoading ? <Loader/> : null,
        () => setIsLoading(true), //showLoader
        () => setIsLoading(false) //hideLoader
    ]
}

export default useLoader;