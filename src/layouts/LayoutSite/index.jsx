import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../../assets/logo_01.webp"
import ChinhSachItem from "../../components/ChinhSachItem"
import ProductItem from "../../components/ProductItem"
import Slider from "../../components/Slider"
import { FaShoppingBag } from 'react-icons/fa'
import { MdOutlineAccountCircle } from 'react-icons/md'
import Database from '../../data_fake.json'
const LayoutSite = () => {
  return (
    <div>
    <>
      <header className='bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <img src={logo} width= "142px" height="122px" alt='logo'/>
            </div>
            <div className='col-md-7'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid ">
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
            <div className='col-md-2'>
              <FaShoppingBag/>
              <MdOutlineAccountCircle/>
              </div>
          </div>
      </div>
      </header>
      <main>
        <div className='lag'>
          <Slider/>
        </div>
        <div className="section_chinhsach">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <ChinhSachItem imge="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_2.jpg?1712652027135" title="MIỄN PHÍ VẬN CHUYỂN" des="với tất cả các đơn hàng trên 10 triệu"/>
              </div>
              <div className="col-md-3">
                <ChinhSachItem  imge="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_2.png?1712652027135" title="TRẢ HÀNG, BẢO HÀNH" des="trả lại hàng hoặc đổi hàng miễn phí trong 30 ngày"/>
              </div>
              <div className="col-md-3">
                <ChinhSachItem imge="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_3.png?1712652027135" title="THÀNH VIÊN" des="ưu đãi trên từng cấp bật hạng thành viên. Sinh nhật quà tặng thành viên"/>
              </div>
              <div className="col-md-3">
                <ChinhSachItem imge="https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_4.png?1712652027135" title="CHÍNH HÃNG" des="sản phẩm chính hãng được nhập khẩu 100%"/>
              </div>
            </div>
          </div>
        </div>
        <div className="section_flash_sale">
          <div className="container">
            {/* <div className="row">
              {listproduct.map((pt,index)=>{

                return(
                  <div className="col-md" key={index}>
                    <ProductItem product={pt}/>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>

</main>
<footer className="bg-dark"></footer>

    </>
      <Outlet/>
      FOOTER
    </div>
  )
}

export default LayoutSite