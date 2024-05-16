import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./layoutStyle.css"
import logo from "./assets/slider_1.webp"
import { MdAccountBalance } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import Slider from "./components/Slider.jsx"
import ChinhSachItem from "./components/ChinhSachItem"
import Database from "./data_fake.json"
import ProductItem from"./components/ProductItem"

function App() {
  const listproduc=Database.products;
  const hoten="LeHoangAnh";
  return (
    <>
      <header className='bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <img src={logo} alt='logo'/>
            </div>
            <div className='col-md-7'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-divider"></a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
            <div className='col-md-2 d-flex justify-content-end'></div>
            <MdAccountBalance className='me-2'/>
            <MdAddShoppingCart className='me-2' />
            <FaRegCircleUser className='me-2'/>
          </div>
      </div>
      </header>
      <main>
      <div className='Slider' >
    <div id="carouselExampleIndicators" class="carousel slide">
<div class="carousel-indicators">
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>
<div class="carousel-inner">
<div class="carousel-item active">
  <img src={logo} class="d-block w-100" alt="slider_1.webp"></img>
</div>
<div class="carousel-item">
<img src={logo} class="d-block w-100" alt="slider_1.webp"></img>
</div>
<div class="carousel-item">
<img src={logo} class="d-block w-100" alt="slider_1.webp"></img>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
      
    </div>

      {/* <div className="Slider">
        <Slider/>
     </div> */}
     <div className="section_chinhsach">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <ChinhSachItem image="https://bizweb.dktcdn.net/thumb/small/100/383/804/themes/903003/assets/policy1.png?1680769128132"
            title="FREESHIP" des="Miễn phí vận chuyển"/>
          </div>
          <div className="col-md-3">
           <ChinhSachItem image="https://bizweb.dktcdn.net/thumb/small/100/383/804/themes/903003/assets/policy2.png?1680769128132x"
             title="HOÀN TRẢ" des="Trong 30 ngày miễn phí"/>
          </div>
          <div className="col-md-3">  
           <ChinhSachItem image="https://bizweb.dktcdn.net/thumb/small/100/383/804/themes/903003/assets/policy3.png?1680769128132"
            title="THANH TOÁN" des="Hỗ trợ nhiều hình thức"/>
          </div>
          <div className="col-md-3">   
          <ChinhSachItem image="https://bizweb.dktcdn.net/thumb/small/100/383/804/themes/903003/assets/policy4.png?1680769128132"
           title="HỖ TRỢ" des="24/7"/>
          </div>
        </div>
        <hr/>
      </div>
     </div>
     <div className="section_flash_sale">
      <div className="container">
      <div className="row">
        {listproduc.map((pt,index)=>{
          return(  
          <div className="col-md" key={index}>
            <ProductItem product={pt}/>
            </div>
        );

        })}
    
        </div>
        <hr/>
      </div>
     </div>
      </main>
    </>
);
}
export default App;