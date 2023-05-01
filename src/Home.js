// import Carousel from "./Carousel";

const Home = () => {
    
    return ( 
        <div className="home">
            <br></br>
            <br></br>
            <div className="Greece">
                <div className="Components">
                    <div className="image">
                        <img className="Image" src="https://images.unsplash.com/photo-1526315337991-2ea805e212a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"></img>
                    </div>
                    <div className="Intro">
                        <p className="Location"><a href="https://www.google.co.in/maps/place/Santorini/@36.4070721,25.2805477,11z/data=!3m1!4b1!4m6!3m5!1s0x1499ce86adfd9ff7:0xb2a761f740d68afc!8m2!3d36.3931562!4d25.4615092!16zL20vMDcwdDk">View on Google Maps</a></p>
                        <h2 className="Heading"><u>Santorini, Greece</u></h2>
                        <br></br>
                        <p className="Date"> 19th July,2023</p>
                        <br></br>
                        <p className="Full">Santorini is an island in the southern Aegean Sea, about 200 km southeast from the Greek mainland. It is the largest island of a small circular archipelago, which bears the same name and is the remnant of a caldera. Santorini is known for its sunsets, volcano, caldera, and iconic whitewashed architecture. It is also famous for its incredible exceptional wine and ancient history that will thrill history buffs from all over the globe.</p>
                    </div>
                </div>
            </div>

            <div className="San Francisco">
                <div className="Components">
                    <div className="image">
                        <img className="Image" src="https://images.unsplash.com/photo-1533087053677-60bb97f0b3bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"></img>
                    </div>
                    <div className="Intro">
                        <p className="Location"><a href="https://www.google.co.in/maps/place/San+Francisco,+CA,+USA/@37.7576948,-122.4726194,13z/data=!3m1!4b1!4m6!3m5!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155!16zL20vMGQ2bHA">View on Google Maps</a></p>
                        <h2 className="Heading"><u>San Francisco</u></h2>
                        <br></br>
                        <p className="Date"> 28th December,2022</p>
                        <br></br>
                        <p className="Full">Once called "the bridge that couldn't be built," today the Golden Gate Bridge is one the seven wonders of the modern world. This magnificent bridge, perhaps San Francisco's most famous landmark, opened in 1937 after a four-year struggle against relentless winds, fog, rocks, and treacherous tides. The Exploratorium is a home-grown, hands-on museum igniting curiosity and inspiring creativity in people of all ages.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;