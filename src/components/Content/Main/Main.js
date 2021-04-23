import './Main.css';
import Card from './Card';
import TableView from './Table';

function Main(props) {
  const books = [
    {id:1,title:'Faith',author:'David Adams',image:'img1.jpeg',genre:'Fiction',readed:72},
    {id:2,title:'The World of Ice & Fire',author:'Georg R.R. Martin',image:'img2.jpeg',genre:'Fantasy',readed:42},
    {id:3,title:'The Power of Habit',author:'Charles Duhigg',image:'img3.jpg',genre:'Education',readed:12},
    {id:4,title:'Wild Wisdom',author:'Neil Douglas-Klotz',image:'img4.jpg',genre:'Adventure',readed:100},
    {id:5,title:'The Sky at Night: How to aaaaaaa',author:'Chris North & Paul Abel',image:'img5.jpg',genre:'Science',readed:54},
    {id:6,title:'Into Thin Air',author:'Jon Krakauer',image:'img6.jpeg',genre:'Nature',readed:30},
    {id:7,title:'Humans',author:'Brandon Stanton',image:'img7.jpg',genre:'Fantasy',readed:6},
    {id:8,title:'Wonders of the World',author:'Lonely Planet',image:'img8.jpeg',genre:'Education',readed:90},
    {id:9,title:'paint a New Scene',author:'Deirdre O`Dare',image:'img9.jpg',genre:'Romance',readed:54},
    {id:10,title:'Along the Enchanted Way',author:'William Blacker',image:'img10.jpeg',genre:'Travel',readed:18},
    {id:11,title:'A Court of Silver Flames',author:'Sarah J. Maas',image:'img11.png',genre:'Fantasy',readed:36},
    {id:12,title:'The Sporades Sailing Pilot',author:'David Nairn',image:'img12.jpg',genre:'Travel',readed:12},
    {id:13,title:'Empower Yourself',author:'Xenia Tchoumi',image:'img13.jpeg',genre:'Health & Bell-Being',readed:100},
    {id:14,title:'Artistic Places',author:'Susie Hodge',image:'img14.jpg',genre:'Adventure',readed:36},
    {id:15,title:'Fireheart Tiger',author:'Aliette De Bodard',image:'img15.jpg',genre:'Fiction',readed:0},
  ];
  var filteredBooks = books.filter((book)=>book.title.toLowerCase().indexOf(props.searchword.toLowerCase()) > -1);

  if(props.display === 'card'){
    return (
      <div className="main">
          {
            filteredBooks.map((book) => 
            <Card 
              title={book.title}
              author={book.author}
              image={book.image}
              genre={book.genre} 
              readed={book.readed}
              key={book.id}
            />
          )
        }
      </div>
    );
  }else{
    return (
      <div>
          {
           <TableView books={filteredBooks} dark={props.dark} searchword={props.searchword} innerWidth={props.innerWidth}/>
        }
      </div>
    );
  }
 
}

export default Main;
