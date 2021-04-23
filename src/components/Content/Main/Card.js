import './Card.css';
import {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';

function Card(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  }
  const body = (
    <div className="modal">
     <div className="close-modal">
      <HighlightOffIcon onClick={handleClose} color={'disabled'}/>
     </div>
     <div className="modal-book">
       <img className="modal-img" src={props.image} alt={props.title}/>
     </div>  
     <div className="modal-content">
       <h1 className="modal-title">{props.title}</h1>
       <p className="modal-author">{props.author}</p>
       <p className="modal-description"> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </p>
     </div>
     <div className="modal-footer">
        <Button variant="contained" onClick={handleClose}>Close</Button>
        <Button variant="contained" color="primary" onClick={handleClose}>Continue Reading</Button>
     </div>
    </div>
  );
  return (
    <div className="cardBooks">
    <div className="book-content" onClick={handleOpen}>
      <div className="card">
        <div className="book-readed">{props.readed}%</div>
        <img className="book-cover" src={props.image} alt={props.title}/>
        <div className="book-genre">{props.genre}</div>
      </div>
      <div className="book-footer">
        <h2>{props.title}</h2>
        <p>{props.author}</p>
      </div>
    </div>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    </div>
  );
}

export default Card;
