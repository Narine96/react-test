import React, { useState,useEffect } from 'react';
import './Table.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FirstCell from './FirstCell';


function TableView(props) {
    const { books } = props;
    const [data, setData] = useState([...books]);
    const [toggle, setToggle] = useState(false);
    const sorte = (param,t)=>{
        setToggle(t)
        if(t){
            const newData = data.sort((a,b) => (a[param] > b[param]) ? 1 : ((b[param] > a[param]) ? -1 : 0));
            setData(newData)
        }else{
            setData([...books])
        }      
     } 
useEffect(() => {
    setData([...books])
}, [books]);
  return (
    <div className={`table ${props.dark ? "table-dark" : ""}`}>
       <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    {
                        props.innerWidth <1025 ?
                        <>
                        <TableCell onClick={()=>sorte('title',!toggle)}>Book Title & Author</TableCell>
                        <TableCell onClick={()=>sorte('readed',!toggle)}>Reading Progress</TableCell>
                        </>
                        :
                        <>
                        <TableCell onClick={()=>sorte('title',!toggle)}>Book Title & Author</TableCell>
                        <TableCell onClick={()=>sorte('genre',!toggle)}>Genre</TableCell>
                        <TableCell onClick={()=>sorte('readed',!toggle)}>Reading Progress</TableCell>
                        <TableCell>Last Opened</TableCell>
                        </>
                    }
                    
                </TableRow>
                </TableHead>
                <TableBody>
                {
                props.innerWidth <1025 ?
                    data.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                        <FirstCell 
                            image={row.image}
                            title={row.title}
                            author={row.author}
                        />
                        </TableCell>
                        <TableCell>{row.readed}%</TableCell>
                        </TableRow>
                    ))
                :
                    data.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                        <FirstCell 
                            image={row.image}
                            title={row.title}
                            author={row.author}
                        />
                        </TableCell>
                        <TableCell><p className="table-row-genre">{row.genre}</p></TableCell>
                        <TableCell>{row.readed}%</TableCell>
                        <TableCell>12 Minutes Ago</TableCell>
                        </TableRow>
                    ))
                
               }
                </TableBody>
            </Table>
         </TableContainer>
    </div>
  );
}

export default TableView;
