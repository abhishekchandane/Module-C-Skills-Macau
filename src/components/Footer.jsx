function Footer() {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-dark text-white py-4 mt-5">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">
                            © 2026 Skills Macau. All rights reserved.
                        </p>
                    </div>

                    <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">

                        <button
                            type="button"
                            className="btn btn-outline-light"
                            onClick={goToTop}
                        >
                            Back to Top
                        </button>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;