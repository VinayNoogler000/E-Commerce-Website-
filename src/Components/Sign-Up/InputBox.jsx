export default function InputBox({ fieldName, inpObj, updateInpObj }) {
    let fName = fieldName.toLowerCase(); //stores fieldName in lower case.

    let handleInput = event => { //Handler for Change event, defined on Input element
        let newVal = event.target.value;
        updateInpObj((prevInpObj) => { //Updating 
            return { ...prevInpObj, [fName]: newVal };
        });
    }

    return (
        <div className="w-[456px] h-[74px] mb-9 mt-8 ml-14">
            <label htmlFor={fName} className="text-base leading-5 font-medium">{fieldName}</label>
            <input
                id={fName}
                placeholder="Enter"
                className="w-full h-12 pl-3 border-[1px] rounded-md border-[#C1C1C1] mt-2 placeholder:text-[#848484]"
                value={inpObj[fName]}
                onChange={handleInput}
                required
            >
            </input>
        </div>
    );
}