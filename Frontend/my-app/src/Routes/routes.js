import AdminRoot from "../pages/admin/AdminRoot";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Product from "../pages/admin/Product/Product";
import SiteRoot from "../pages/site/SiteRoot";
import Home from "../pages/site/Home/Home"
import Shop from "../pages/site/Shop/Shop";
const ROUTES = [
    {
        path : "/",
        element: <SiteRoot/>,
        children : [{
            path : "",
            element : <Home/>
        },{
            path : "shop",
            element : <Shop/>
        }]
    },{
        path : "/admin",
        element : <AdminRoot/>,
        children : [{
            path : "",
            element : <Dashboard/>
        },{
            path : "product",
            element : <Product/>
        }]
    }
]

export default ROUTES