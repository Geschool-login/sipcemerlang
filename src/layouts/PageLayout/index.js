
//NOT EDITABLE!!!
import Topography from "../../components/Topography"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

// EDITABLE
import background from "../../assets/img/background.jpg" //Background
import logo from '../../assets/img/logo/logo.png'; //Logo


function pageLayout( props ) {
    //EDITABLE
    const deskripsi = "Selamat datang kembali di"
    const title = "SIP Cemerlang"
    const slogan = "Pupuklah selalu kepercayaan diri yang ada dalam dirimu. Karena sebenarnya kamu benar-benar mampu dan tidak ada seorangpun yang membatasimu untuk mecari ilmu."
    const copyright = "2021 SIP Cemerlang - Didukung oleh geschool"

    return (
        <div>
            <Topography />
            <Hero 
                logo={logo}
                background={background}
                deskripsi={deskripsi}
                title={title}
                slogan={slogan}
                appName={props.appName}
            >
                { props.children }
            </Hero>
            <Footer
                copyright={copyright}
            />
        </div>
    );
}


export default pageLayout;