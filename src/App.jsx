import { Outlet } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: 'animated',
});


function App() {

  return (
    <div className="max-w-[1300px] mx-auto">
      <MainLayout>
        <Outlet></Outlet>
      </MainLayout>
      
    </div>
  )
}

export default App
