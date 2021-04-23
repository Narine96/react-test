import './App.css';
import LeftMenu from './components/Menu/LeftMenu';
import Content from './components/Content/Content';
import { useState,useLayoutEffect } from 'react';

function App() {
  const [selected, setSelected] = useState(false);
  const [innerWidth, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function handleResize(){
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
})
if(innerWidth < 1025){
  return (
    <div className="App">
     <Content dark={selected} innerWidth={innerWidth} toggleSelected={() => {
          setSelected(!selected);
        }}/>
    </div>
  );
}
  return (
    <div className="App">
     <LeftMenu 
        dark={selected} 
        toggleSelected={() => {
          setSelected(!selected);
        }}/>
     <Content dark={selected}/>
    </div>
  );
}

export default App;
