import "./Page500.scss";

const Page500 = () => {

    const handleLogin = () => {
        window.location.href = 'https://vladnet.dev';
    }

    return (
        <div className="st-page-not-found st-flex-center text-center">
            <div className="container">
                <h3>5<span>0</span>0</h3>
                <h4>Website update is underway</h4>
                <p>oops, you caught me updating my website.. Please try again later</p>
                <div className="st-social-hero-info">
                    <button
                        className="st-btn st-style2 st-color1 st-size-large"
                        onClick={handleLogin}
                    >try again
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page500
