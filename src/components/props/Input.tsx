import { InputProps } from "./personProps"

export const Input = (prop: InputProps) => {

    // ? you can change prop to {value, handleChange} in this State you will change prop.value to value and else handelChange 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return <input placeholder="test" type='text' value={prop.value} onChange={handleInputChange} />
}