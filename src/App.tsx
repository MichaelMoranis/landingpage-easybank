import Articles from './components/Articles'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import TextGeneration from './components/TextGeneration'
import WhyChoose from './components/WhyChoose'

function App() {

  return (
    <main className='flex flex-col items-center'>
      <Header />
      <Banner />
      <TextGeneration />
      <WhyChoose />
      <Articles />
      <Footer />
    </main>
  )
}

export default App
