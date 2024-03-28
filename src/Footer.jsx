import LogoHosler from "./assets/logos/logo-hosler-white.svg"

export default function Footer() {
    return(
        <div id="footer">
            <img className="footer-logo-hosler" src={LogoHosler} alt="" />
            <div className="footer-infos">
                <div>logos</div>
                <div>email@gmail.com</div>
                <div>+33666666666</div>
            </div>
        </div>
    )
}