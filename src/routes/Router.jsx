import { createBrowserRouter } from "react-router";

const router =createBrowserRouter(
  [
    {
      path:'/',
      element:<h1>This is Home </h1>
    },
    {
      path:'/auth',
      element:<h1>Authentication</h1>
    },
    {
      path:'/news',
      element:<h1>this is news</h1>
    },
    {
      path:'/*',
      element:<h1>Eorror this  page  in not found</h1>
    }
  ]
);

export default router;