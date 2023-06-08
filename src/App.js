
import imag from './designer_1.png' ;

function App() {
  return (
    <div className="App">
        <div className="navBare">

            <div className="nav">
                <ul>
                    <li><a href="/home" className="nav-barlink" >Home</a></li>
                    <li><a href="/about" className="nav-barlink">About</a></li>
                    <li><a href="/contact" className="nav-barlink">Contact</a></li>
                </ul>
            </div>
            <div className="logo">Landing</div>
            <div> <button className="button-dark"> Buy Now </button></div>
        </div>
        <div className="container">
            <img src={imag} className="imag" alt="aaa"/>
            <div className="div1">
                <h1 className="Title1">Introduce Your Product </h1>
                <h1 className="Title1">Quickly & Effectively</h1>
                <p className="p1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem delectus dolorum facere ipsum laudantium molestiae necessitatibus obcaecati porro! Asperiores autem culpa deleniti doloremque enim ex illum minima qui, rem voluptatum.
                    <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit Aliquid amet asperiores dolor eaque earum</p>
               <div className="button-group">
                    <button className="button-dark">Purchase UI Kit</button>
                    <button className="button-light">Learn More</button>
               </div>
            </div>
        </div>



    </div>
  );
}

export default App;
