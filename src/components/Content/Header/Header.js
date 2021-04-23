import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import './Header.css';

const useStyles = makeStyles({
  input: {
    borderRadius: '12px !important',
    height: '50px',
  },
  darkInput: {
    background:'white',
    borderRadius: '12px !important',
    height: '50px',
  }
});

function Header(props) {
  const [search,setSearch] = useState(false)
  let searchIcon = <SearchIcon onClick={()=>setSearch(true)}/>
  const classes = useStyles();
  let customInputStyle = classes.input
  if(props.dark){
    customInputStyle = classes.darkInput
  }
  if(search){
    searchIcon = <TextField
    id="filled-start-adornment"
    InputProps={{
      startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
      className:customInputStyle
    }}
    variant="outlined"
    onChange={props.handleChange}
  />
  }
  if(props.innerWidth < 1025){
    searchIcon= <></>
  }

    return (
      <div className="header">
          <div className="library">
            <h1>Book Library</h1>
            <div className="icons-action">
              <MoreHorizIcon/>
            </div>
          </div>
          <div className={`icons-section ${search ? "icons-section-expand" : ""}`}>
            <div id="card" className="icons-action" onClick={() => props.setDisplay('card')}>
              <ViewModuleIcon />
            </div>
            <div id="table" className="icons-action" onClick={() => props.setDisplay('table')}>
              <FormatAlignCenterIcon/>
            </div>
            <div className={`${search ? "icons-search-input" : "icons-section"}`}>
              {
                searchIcon
              }
            </div>
          </div>
      </div>
    );
  }
  
  export default Header;