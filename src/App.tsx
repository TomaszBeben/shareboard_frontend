import Header from './components/header/Header'
import Sidebar from './components/middleSection/sidebar/Sidebar';
import Content from './components/middleSection/content/Content';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <div className='middle-section-wrapper'>
        <Sidebar/>
        <Content/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
