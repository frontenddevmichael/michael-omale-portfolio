import aboutImg from './assets/aboutImg.png';


export default function About() {
    return (
        <>
            {/* About Page */}
            <section className="aboutPage">
                <h1>About Me</h1>
                <p>Get to Know more about my expertise</p>
                <div className="aboutContent">
                    <div className="aboutTxt">
                        <h2>Hello, i'm <strong>Omale Micaehel</strong></h2>
                        <p>I'm a passionate Frontend Developer and the founder of OCM Devs, based in Lagos, Nigeria. Currently pursuing a degree in Computer Science, I’m dedicated to learning and mastering JavaScript and React to build beautiful, functional, and user-centered digital experiences.</p><br />
                        <p>I have a growing interest in  <strong>AI development</strong>and actively explore tools like Loveable, MGX, and other AI platforms to integrate intelligent solutions into web projects.</p><br />
                        <p>As a developer, I aim to create responsive web applications that not only look great but also provide seamless and engaging user experiences across all devices.

                        </p>
                    </div>
                    <div className="aboutImg">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}