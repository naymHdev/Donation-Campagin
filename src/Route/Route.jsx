import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Components/Errror/Error";
import Home from "../Components/Home/Home";
import Donation from "../Components/Donation/Donation";
import Statistics from "../Components/Statistics/Statistics";

const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch('./donete.json')
      },
      {
        path: "donation",
        element: <Donation></Donation>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
]);

export default createRouter


// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout/MainLayout";
// import Home from "../../Pages/Home";
// import Favorites from "../../Pages/Favorites";
// import Login from "../../Pages/Login";
// import Error from "../../Pages/Error";
// import MyPhone from "../../Pages/MyPhone";
// const createRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     errorElement: <Error></Error>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//         loader: () => fetch("/phone.json"),
//       },
//       {
//         path: "favorite",
//         element: <Favorites></Favorites>,
//       },
//       {
//         path: "login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/phone/:id",
//         element: <MyPhone></MyPhone>,
//         loader: () => fetch("/phone.json"),
//       },
//     ],
//   },
// ]);

// export default createRouter;
