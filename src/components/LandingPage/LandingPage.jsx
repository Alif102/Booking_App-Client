import './LandingPage.css'

const Landingpage = () => {
    return (
        <div className="landingpage">

            <video src='https://player.vimeo.com/video/764583290?h=f22aa1cc78&background=1&controls=0&mute=1&playsinline=1&loop=1' autoPlay muted loop className="video-bg" />
            <div className="bg-overlay"></div>

            <div className="navbar">
                <div className="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="home-text">
                <h1>The Bubu Island</h1>
                <p>Come live out your ideal vacation with us</p>
            </div>

            <div className="home-btn">Explore</div>

        </div>
    )
}

export default Landingpage;