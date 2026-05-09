import Nav from './components/nav'
import SideBar from './components/sideBar'
import Features from './components/features'
import Footer from './components/footer'
import Landing from './components/landing'
import Numbers from './components/numbers'
import Reviews from './components/reviews'

const Home = () => {
    return (
        <>
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/sideBar" element={<SideBar />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/numbers" element={<Numbers />} />
        <Route path="/reviews" element={<Reviews />} />
         <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
        </>
    )
}
export default Home