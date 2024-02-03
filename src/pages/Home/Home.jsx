import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Rooms/Rooms'
import Banner from '../../components/Banner/Banner'
import Container from '../../components/Shared/Container'
// import Landingpage from '../../components/LandingPage/LandingPAge'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Hoteliana | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <Container>
        {/* <Landingpage/> */}
      <Banner/>
      {/* Categories section  */}
      <Categories />
      {/* Rooms section */}
      <Rooms />

      </Container>
      
    </div>
  )
}

export default Home
