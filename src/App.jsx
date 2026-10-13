import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import './App.css'
import ScrollToTop from "./routes/ScrollToTop";
function App() {
  

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
