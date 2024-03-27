export default function AccountOptions() {
    return (
        <div className="w-[10%] bg-white z-10 fixed top-[50px] left-[90%] hidden peer-hover:block ">
            <h3 className="text-sm font-semibold mb-3">Account</h3>
            <h5 className="text-[#848484] mb-1.5">Profile</h5>
            <div className="h-9 bg-[#F4F4F4] mb-1"></div>
            <h5 className="text-[#848484] mb-4">Payment Method</h5>
            <h5 className="text-[#848484] mb-4">Account Settings</h5>
            <h5 className="text-[#848484] mb-4 font-light">Log Out</h5>
        </div>
    );
}