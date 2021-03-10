import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const Loading = () =>(
    <div className="loading">
        <FontAwesomeIcon icon={faSpinner} size="lg" fixedWidth spin />
    </div>
);

export default Loading;