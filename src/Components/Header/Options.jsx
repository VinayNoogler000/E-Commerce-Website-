import AccountOptions from "./AccountOptions";

export default function Options() {
    return (
        <div className="w-screen h-9 peer">
            <div className="w-56 h-{13px} mt-3 text-xs leading-none flex justify-evenly absolute end-5">
                <p className="headerOptions">Help</p>
                <p className="headerOptions">Orders & Returns</p>
                <p className="headerOptions peer">Hi, John</p>
                <AccountOptions />
            </div>
        </div>
    );
}