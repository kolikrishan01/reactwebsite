import Aboutus from './Aboutus';
import './App.css';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Header from './Header';
import HowitWorks from './HowitWorks';
import Navbar from './Navbar';
import Services from './Services';

function Home() {
  return (
    <>
  <Navbar />
<Header />
<HowitWorks />
<Aboutus />
<Services />
<ContactUs />
<Footer />
    </>
  );
}

export default Home;
