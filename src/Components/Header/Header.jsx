import Options from "./Options";
import NavBar from "./NavBar";
import MsgBar from "./MsgBar";

export default function Header() {
    return (
        <div>
            <Options />
            <NavBar />
            <MsgBar />
        </div>
    );
}