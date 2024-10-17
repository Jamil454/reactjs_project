import Footer from './Footer.js';
import Header from './Header.js';
import { data } from './News.js';
import myList from './List.js';

function App() {
  return (

    <header>
      <Header />

      <p>The strike hit the al-Aqsa Hospital compound in Deir al-Balah, central Gaza,
        in the early hours of Monday, igniting a fire that burned makeshift shelters for displaced people.</p>

      <h3>{data.title}</h3>
      <p>{data.datails}</p>

      <h1> All News</h1>
      <ul>
        {myList.map(function (item) {
          return (
          <li>
           <h1>{item.title}</h1> 
           <p><b>Author:</b>{item.author}</p>
           <p><b>URL:</b>{item.url}</p>
           <p><b>Comments Number:</b>{item.num_comments}</p>
            
            </li>);
        })}
        </ul>
      

      <Footer />
    </header>

  );
}

export default App;