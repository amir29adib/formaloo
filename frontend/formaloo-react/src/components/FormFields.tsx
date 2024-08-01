import { mockData } from "../MockData/mockData"


export default function FormInput() {


    const inputFields = mockData.map((inputField) => {
        return (
            <label> {inputField.label}
                <input
                type={inputField.type}
                placeholder={inputField.placeholder}
                value={inputField.value}
                />
            </label>
        )
    })


    return (
        <div className="dynamicInput">
            {inputFields}
        </div>
    )

}