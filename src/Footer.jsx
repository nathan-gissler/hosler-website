import LogoHosler from "./assets/logos/logo-hosler-white.svg"

export default function Footer({ content }) {
    return(
        <div id="footer">
            <img className="footer-logo-hosler" src={LogoHosler} alt="" />
            <div className="footer-infos">
                <div>logos</div>
                <div>{content.email}</div>
                <div>{content.phoneNumber}</div>
            </div>
        </div>
    )
}