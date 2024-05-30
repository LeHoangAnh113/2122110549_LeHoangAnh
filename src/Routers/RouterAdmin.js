import Product from "../pages/backend/Product/index";
import Catelory from "../pages/backend/index"
import Brand from "../pages/backend/Brand/index";
import User from "../pages/backend/User/index";
import Contact from "../pages/backend/Contact/index";
import Banner from "../pages/backend/Banner/index";
import Topic from "../pages/backend/Topic/index";
import Menu from "../pages/backend/Menu/index";
import Order from "../pages/backend/Order/index";
import Orderdetail from "../pages/backend/Orderdetail/index";
import Post from "../pages/backend/Post/index";
const RouterAdmin=[
    {
        path: "product",
        element: <Product />,
      },
      { 
        path: "category",
        element: <Catelory/>
      },
      { 
        path: "brand",
        element: <Brand/>
      },
      { 
        path: "user",
        element: <User/>
      },
      { 
        path: "contact",
        element: <Contact/>
      },
      { 
        path: "product",
        element: <Product/>
      },
      { 
        path: "banner",
        element: <Banner/>
      },
      { 
        path: "topic",
        element: <Topic/>
      },
      { 
        path: "menu",
        element: <Menu/>
      },
      { 
        path: "order",
        element: <Order/>
      },
      { 
        path: "orderdetail",
        element: <Orderdetail/>
      },
      { 
        path: "post",
        element: <Post/>
      },
];
export default RouterAdmin;