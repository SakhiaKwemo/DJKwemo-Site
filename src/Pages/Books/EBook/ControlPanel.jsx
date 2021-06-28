import React, {Component} from 'react';

import {FaBackward, FaForward} from 'react-icons/fa';

const ControlPanel = (props) => {

    const {pageNumber, numPages, setPageNumber} = props; 

    const isFirstPage = pageNumber == 1; 
    const isLastPage = pageNumber == numPages; 

    const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
    const lastPageClass = isLastPage ? 'disabled' : 'clickable';

    const goBackPage = () => {
        if(!isFirstPage) setPageNumber(pageNumber - 1);
    };

    const goNextPage = () => {
        if(!isLastPage) setPageNumber(pageNumber + 1)
    }

    const onPageChange = (e) => {
        const {value} = e.target; 
        setPageNumber(Number(value)); 
    }

        return (
            <div className = "controlPanel">
                <div class = "controllerBox">
                    <FaBackward onClick = {goBackPage} className = {`${firstPageClass}`} size = "30"/>
                    <span>
                        Page <input name="pageNumber" type ="number" min={1} max={94} value={pageNumber} onChange={onPageChange}/> of {numPages}
                    </span>
                    <FaForward onClick = {goNextPage} className = {`${lastPageClass}`} size = "30"/>
                </div>
            </div>
        )
}

export default ControlPanel;
