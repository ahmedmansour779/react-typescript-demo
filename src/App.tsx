import { Text } from '@mantine/core';
import './App.css';
import { CounterClass } from './components/Class/CounterClass';
import { Box } from './components/Context/Box';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { UserContextProvider } from './components/Context/UserContext';
import { UserInContext } from './components/Context/UserInContext';
import { DomRef } from './components/Refs/DomRef';
import { MutableRef } from './components/Refs/MutableRef';
import { Counter } from './components/State/Counter';
import { LoggedIn } from './components/State/LoggedIn';
import { User } from './components/State/User';
import { ButtonHandel, ButtonProp } from './components/props/Button';
import { Container } from './components/props/Container';
import Greet from './components/props/Greet';
import { Heading } from './components/props/Heading';
import { Input } from './components/props/Input';
import { Oscar } from './components/props/Oscar';
import Person from './components/props/Person';
import PersonList from './components/props/PersonList';
import Status from './components/props/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
    {
      first: "ahmed",
      last: "mansour"
    }
  ]
  return (
    <>
      <Greet isLoggedIn={true} name="ahmed" numMsgs={10} /><hr />
      <Person name={personName} /><hr />
      <PersonList names={nameList} /><hr />
      <Status status='loading' /><hr />
      <Heading>place holder</Heading><hr />
      <Oscar>
        <h3>oscar</h3>
      </Oscar><hr />
      <ButtonHandel handleButton={() => console.log("handleButton")} /><br />
      <ButtonProp handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} /><br />
      <Input handleChange={(event) => { console.log(event) }} /><hr />
      <Container styles={{ padding: "1rem", border: "1px solid #000" }} /><hr />
      <Text fz="2rem" ta="center">Use Hooks</Text>
      <LoggedIn /><hr />
      <User /><hr />
      <Counter /><hr />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider><hr />
      <UserContextProvider>
        <UserInContext />
      </UserContextProvider><hr />
      <DomRef /><hr />
      <MutableRef /><hr />
      <CounterClass message='hello' />
    </>
  )
}

export default App;
