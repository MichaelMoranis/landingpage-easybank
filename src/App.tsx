import { useState } from "react";
import Articles from "./components/Articles";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhyChoose from "./components/WhyChoose";
import Sidebar from "./components/SideBar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleSideBar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <main className="flex flex-col items-center justify-cefter content-center w-full overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} onMenuClick={toggleSideBar} />
      {sidebarOpen && <Sidebar onClose={toggleSideBar} sidebarOpen={sidebarOpen}/>}
      <Banner />
      <WhyChoose />
      <Articles />
      <Footer />
    </main>
  );
}

export default App;
