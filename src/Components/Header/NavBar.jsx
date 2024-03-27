import SearchIcon from "../../assets/SearchIcon"
import CartIcon from "../../assets/CartIcon"

export default function NavBar() {
    return (
        <div className="w-screen h-[64px]">
            {/* Navbar Heading */}
            <h1 className="font-bold text-3xl leading-10 absolute left-[3.5%] top-10">ECOMMERCE</h1>

            {/* Navbar Options/Pages */}
            <div className="w-2/6 absolute top-[55px] left-[35%] flex justify-evenly ">
                <p className="navOptions">Categories</p>
                <p className="navOptions">Sale</p>
                <p className="navOptions">Clearance</p>
                <p className="navOptions">New stock</p>
                <p className="navOptions">Trending</p>
            </div>

            {/* Navbar Button Icons */}
            <div className="flex justify-evenly w-[10%] absolute top-[52px] right-[1.25%]">
                <span className="navButtons"><SearchIcon /></span>
                <span className="navButtons"><CartIcon /> </span>
            </div>
        </div>
    );
}