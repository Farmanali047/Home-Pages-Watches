
const Nav2 = ({isVisible}) => {

    return (
        <div className={`nav2 ${isVisible ? "visible" : "hidden"}`}>
            <nav>
                <ul className="nav2-links">
                    <li><a href="#catalogue">CATALOGUE</a></li>
                    <li><a href="#personalisation">PERSONALISATION</a></li>
                    <li><a href="#maison-goyard">MAISON GOYARD</a></li>
                    <li><a href="#boutiques">BOUTIQUES</a></li>
                    <li><a href="#maison-goyard">MAISON GOYARD</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav2;
