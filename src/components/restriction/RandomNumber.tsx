import { useState } from "react";
import { RandomNumberProps } from ".";

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
    const [valueInput, setValueInput] = useState<any>(null)
    const handelChange = (event: { target: { value: any; }; }) => {
        setValueInput(event.target.value * 1)
    }

    if (valueInput > 0) {
        value = valueInput;
        isPositive = true;
        isNegative = false;
        isZero = false;
    } else if (valueInput < 0) {
        value = valueInput;
        isPositive = false;
        isNegative = true;
        isZero = false;
    } else if (valueInput === 0) {
        value = valueInput;
        isPositive = false;
        isNegative = false;
        isZero = true;
    } else {
        value = "is not number";
        isPositive = false;
        isNegative = false;
        isZero = false;
    }

    return (
        <div>
            <input onChange={handelChange} />
            {value} {isPositive && 'is positive'} {isNegative && 'is negative'}{isZero && 'is zero'}
        </div>
    )
}