import Header from './Header/Header';
import Main from './Main/Main';
import {useState} from 'react';
import TonalityIcon from '@material-ui/icons/Tonality';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import './Content.css';

const useStyles = makeStyles({
  input: {
    borderRadius: '12px !important',
    height: '50px',
    width:'100%'
  },
  darkInput: {
    background:'white',
    borderRadius: '12px !important',
    height: '50px',
    width:'100%'
  }
});

function Content(props) {
  const [display, setDisplay] = useState('card');
  const [searchword, setSearchword] = useState('');
  const classes = useStyles();
  let customInputStyle = classes.input
  if(props.dark){
    customInputStyle = classes.darkInput
  }
  const handleChange = (event) => {
    setSearchword(event.target.value)
  };

  return (
    <div className={`content ${props.dark ? "content-dark" : "content-light"}`}>
          <div className="mobile-theme" onClick={props.toggleSelected}><TonalityIcon /></div>
            <Header setDisplay={setDisplay} handleChange={handleChange} dark={props.dark} innerWidth={props.innerWidth}/>
            {props.innerWidth < 1025 && <TextField
              id="filled-start-adornment"
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                className:customInputStyle
              }}
              variant="outlined"
              onChange={handleChange}
            />}
        <Main display={display} searchword={searchword} dark={props.dark} innerWidth={props.innerWidth}/>
    </div>
  );
}

export default Content;
