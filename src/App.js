import './App.css';
import Navbar from './components/Navbar';
import Travel from './components/Travel';
import Footer from './components/Footer';
import data from './travel-data'

function App() {
  const travels = data.map(item => {
    return (
        <Travel 
          key={item.id}
          maplink= {item.maplink}
          {...item}
        />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className='body-content'>
          {travels}
      </section>
      <Footer />
    </div>
  );
}

export default App;
