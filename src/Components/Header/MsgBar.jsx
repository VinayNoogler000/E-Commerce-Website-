import LeftArrow from '../../assets/LeftArrow';
import RightArrow from '../../assets/RightArrow';

export default function MsgBar() {
    return (
        <div className="w-screen h-9 bg-[#F4F4F4] absolute top-[100px] ">
            <div className="w-[290px] h-[18px] absolute top-2.5 left-[42%] flex justify-evenly">
                <LeftArrow />
                <p className="font-medium text-sm leading-4">Get 10% off on business sign up</p>
                <RightArrow />
            </div>
        </div>
    );
}