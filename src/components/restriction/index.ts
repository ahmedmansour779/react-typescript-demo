export type RandomNumberType = {
    value: number | string
}

export type PositiveNumber = RandomNumberType & {
    isPositive?: boolean
    isNegative?: never
    isZero?: never
}

export type NegativeNumber = RandomNumberType & {
    isNegative?: boolean
    isPositive?: never
    isZero?: never
}

export type Zero = RandomNumberType & {
    isZero?: boolean
    isPositive?: never
    isNegative?: never
}

export type RandomNumberProps = PositiveNumber | NegativeNumber | Zero