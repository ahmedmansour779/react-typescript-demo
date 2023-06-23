import { GreetProps } from "./personProps"

const Greet = (prop: GreetProps) => {
    const { numMsgs = 0 } = prop
    return (
        <div>
            {
                prop.isLoggedIn ?
                    `welcome ${prop.name}! you have ${numMsgs} unread messages` :
                    "welcome gust "
            }
        </div>
    )
}

export default Greet