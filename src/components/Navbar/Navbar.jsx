const Navbar = () => {
    return (



        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand" href="#">
                {/* <img src="" height="35px" alt="LOGO" /> */}
                <p>AUCTION</p>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacts</a>
                    </li>

                </ul>
                <ul className="navbar-nav flex-row">

                    <li className="nav-item  me-4 ">
                        <a className="nav-link" href="#">
                            <span className="icon"><i className="fas fa-search"></i></span>
                        </a>
                    </li>

                    <li className="nav-item  me-4">
                        <a className="nav-link" href="#">
                            <span className="icon"><i className="far fa-user "></i></span>
                        </a>
                    </li>

                    <li className="nav-item  me-4">
                        <a className="nav-link" href="#">
                            <span className="icon"><i className="fas fa-shopping-bag"></i></span>
                        </a>
                    </li>

                </ul>
            </div>
        </nav>);
}

export default Navbar;