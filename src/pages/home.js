import Nav from '../components/nav'
import Features from '../components/features'
import Footer from '../components/footer'
import Landing from '../components/landing'
import Numbers from '../components/numbers'
import Reviews from '../components/reviews'


const Home = () => {
    return (
        <div className="home">
            <Nav />
            <Landing />
            <Features />
            <Numbers />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Home