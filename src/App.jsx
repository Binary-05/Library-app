
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookList from './pages/bookList'
import AddBook from './pages/addBook'
import BookDetails from './pages/bookDetails'
import EditBook from './pages/editBook'



function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BookList />
    },
    {
      path: '/add-new',
      element: <AddBook />
    },
    {
      path: '/books/:id',
      element: <BookDetails />
    },
    {
      path: '/edit-book',
      element: <EditBook />
    }
  ])


  return <RouterProvider router={router}/>;
    
};

export default App;
