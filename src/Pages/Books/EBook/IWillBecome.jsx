import React, { useState } from 'react';
import {Component} from 'react';

import { FaArrowCircleLeft} from 'react-icons/fa';
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from './ControlPanel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function IWB(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className = "IWillBecomeContainer" style={{height: "100%"}}>
        <FaArrowCircleLeft onClick = {props.setScreen} id = "backbutton" color="rgb(233, 135, 178)" size="50"/>
        <Document
        file="\images\Book\I Will Become\I Will Become.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
        >
        <Page pageNumber={pageNumber} />
        </Document>
        <ControlPanel pageNumber = {pageNumber} numPages = {numPages} setPageNumber = {setPageNumber}/>
    </div>
  );
}