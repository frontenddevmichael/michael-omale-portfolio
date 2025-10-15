

export default function Hero() {
    return (
        <>

            <section className="heroPage">
                {/* Background blobs */}
                <div className="heroBlob blob1"></div>
                <div className="heroBlob blob2"></div>

                {/* Hero content */}
                <div className="heroContent">
                    <div className="statBadge badge1">Emerging Frontend Talent</div>
                    <div className="statBadge badge2">10+ Real Projects</div>
                    <div className="statBadge badge3">Passion Meets Precision</div>

                    <div className="floatingElement elem1">React.js</div>
                    <div className="floatingElement elem2">UI/UX Design</div>
                    <div className="floatingElement elem3">Performance-Driven</div>
                    <div className="floatingElement elem4">Detail-Oriented</div>

                    <h1>Michael Omale</h1>
                    <div className="roles">
                        <span>Frontend Developer</span>
                        <span>UI/UX Designer</span>
                        <span>Creative Technologist</span>
                    </div>
                    <button>View My work</button>
                </div>
            </section>

        </>
    )
}