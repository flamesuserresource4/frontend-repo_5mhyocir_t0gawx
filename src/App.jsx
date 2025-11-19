import NavbarHero from './components/NavbarHero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <NavbarHero />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
