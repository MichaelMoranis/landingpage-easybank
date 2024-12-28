import Articles from './components/Articles'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import WhyChoose from './components/WhyChoose'

function App() {

  return (
    <main className='flex flex-col items-center justify-center content-center max-w-screen'>
      <Header />
      <Banner />
      <WhyChoose />
      <Articles />
      <Footer />
    </main>
  )
}

export default App
