import './Menu.css';
import ToggleButton from './Toggle';
import { useState } from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import TonalityIcon from '@material-ui/icons/Tonality';

function LeftMenu(props) {
  const [isActive, setActive] = useState('1');
  const onClickMethod = (event) => {
    setActive(event.target.id);
  }
  return (
    <div className={`leftMenu ${props.dark ? "menu-dark" : "menu-light"}`}>
      <h1 className={`menu-heading ${props.dark ? "heading-dark" : "heading-light"}`}>Library</h1>
      <ul>
        <li id='1' className={`menu-list ${props.dark ? "li-dark" : "li-light"} ${isActive === '1' ? 'active': ''}`} onClick={onClickMethod} >
            <span className="my_books">
              <PlayCircleOutlineIcon/>
              My Books 
            </span>
            <span 
              className={`book-count ${props.dark ? "book-count-dark" : "book-count-light"}`}>
                15
            </span>
        </li>
        <li id='2' className={`menu-list ${props.dark ? "li-dark" : "li-light"} ${isActive === '2' ? 'active': ''}`} onClick={onClickMethod}>
            <span className="add_books">
              <AddCircleOutlineOutlinedIcon/>
              Add New Books
            </span>
          </li>
      </ul>
      <h1 id='settings' className={`menu-heading ${props.dark ? "heading-dark" : "heading-light"}`}>Settings</h1>
      <ul>
        <li id='3' className={`menu-list ${props.dark ? "li-dark" : "li-light"} ${isActive === '3' ? 'active': ''}`} onClick={onClickMethod}>
          <span className="mode">
            <TonalityIcon />
            Dark Mode 
          </span>
          <ToggleButton selected={props.dark}
            toggleSelected={props.toggleSelected}
          />
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
