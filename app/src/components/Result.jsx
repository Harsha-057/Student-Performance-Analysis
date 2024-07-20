import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Result(props){
  const nav= useNavigate();
return (
  <Modal {...props}>
      <Modal.Body className="custom-modal-body">
        <Modal.Header className="custom-close-button" closeButton />
      
        <div className="image-container">
        <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 55.5C36.9035 55.5 43.1535 52.7018 47.6776 48.1776C52.2018 43.6535 55 37.4035 55 30.5C55 23.5965 52.2018 17.3465 47.6776 12.8223C43.1535 8.29822 36.9035 5.5 30 5.5C23.0965 5.5 16.8465 8.29822 12.3223 12.8223C7.79822 17.3465 5 23.5965 5 30.5C5 37.4035 7.79822 43.6535 12.3223 48.1776C16.8465 52.7018 23.0965 55.5 30 55.5Z" fill="white" stroke="#043873" stroke-width="4" stroke-linejoin="round"/>
        <path d="M20 30.5L27.5 38L42.5 23" stroke="#043873" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </div>
        <div className='botmar'>
          Successfully accepted!
        </div>
        <div className='botmari'>
          {props.res}
        </div>
     
        <div className="d-grid gap-2">
          <Button
            variant="primary"
            size="lg"
            className="custom-button-lg custom-button-home" 
            onClick={()=>{nav("/auth")}}
          >
            HOME
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="custom-button-lg custom-button-generate"
            onClick={props.onHide}
          >
            Generate again
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default Result;
