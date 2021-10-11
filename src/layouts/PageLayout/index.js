
//NOT EDITABLE
import Topography from "../../components/Topography"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

// EDITABLE
import background from "../../assets/img/bg-jogja.jpg" //Background
import logo from '../../assets/img/logo/jogja.png'; //Logo


function pageLayout( props ) {
    //EDITABLE
    const deskripsi = "Selamat datang kembali di"
    const title = "Yogyakarta Blended Learning"

    return (
        <div>
            <Topography />
            <Hero 
                logo={logo}
                background={background}
                deskripsi={deskripsi}
                title={title}
                appName={props.appName}
            >
                { props.children }
            </Hero>
            <Footer />
        </div>
    );
}


export default pageLayout;