import { createBrowserRouter,RouterProvider} from "react-router-dom";
import FirstPage from './front/firstpage';
import Find from './front/find';
import Entrepreneur from './front/entrepreneur';
import Investor from './front/investor';
import Ideas from './front/ideas';
import AddInvestor from './front/addinvestordata';
import Profile from'./front/profile'
function App() {
  const router = createBrowserRouter([
    {path:'/',children:[

        {index:true,element :<FirstPage /> },

        {path : "find" ,children:[

          {index:true,element :<Find /> },

          {path : ":role" ,children:[

            {index:true,element :<Entrepreneur /> },
            {path:":name",children :[
                {index : true,element : <Ideas />},
                {path : "addinvestordata",element : <AddInvestor />},
                {path: "profile" ,element : <Profile />}
            ]}

          ]},
        ]}
    ]}
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
