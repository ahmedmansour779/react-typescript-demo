import { Text } from '@mantine/core';
import './App.css';
import { Private } from './components/Auth/Privet';
import { ProfileAuth } from './components/Auth/ProfileAuth';
import { Box } from './components/Context/Box';
import { ThemeContextProvider } from './components/Context/ThemeContext';
import { UserContextProvider } from './components/Context/UserContext';
import { UserInContext } from './components/Context/UserInContext';
import { DomRef } from './components/Refs/DomRef';
import { MutableRef } from './components/Refs/MutableRef';
import { Counter } from './components/State/Counter';
import { LoggedIn } from './components/State/LoggedIn';
import { User } from './components/State/User';
import { List } from './components/generics/List';
import { CustomButton } from './components/html/ButtonHtml';
import { CustomComponent } from './components/html/CustomComponent';
import { InputHtml } from './components/html/InputHtml';
import { TextPolymorphic } from './components/polymorphic/TextPolymorphic';
import { ButtonHandel, ButtonProp } from './components/props/Button';
import { Container } from './components/props/Container';
import Greet from './components/props/Greet';
import { Heading } from './components/props/Heading';
import { Input } from './components/props/Input';
import { Oscar } from './components/props/Oscar';
import Person from './components/props/Person';
import PersonList from './components/props/PersonList';
import Status from './components/props/Status';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

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

  const listNameId = [
    { id: 1, name: "ahmed" },
    { id: 2, name: "mansour" },
    { id: 3, name: "hammed" },
    { id: 4, name: "ibrahem" },
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
      <Private isLoggedIn={false} Component={ProfileAuth} /><hr />
      <List
        items={listNameId}
        onClick={(item) => console.log("hello", item.name, "your object is", item)}
      /><hr />
      <RandomNumber value={20} /><hr />
      <Toast position='center' /><hr />
      {/* 
      // ! you not can add style={{ color: "red" }} in any component except CustomButton
      */}
      <CustomButton variant='primary' style={{ color: "red" }} >ahmed</CustomButton><hr />
      <InputHtml /><hr />
      <CustomComponent name='ahmed' isLoggedIn={true} numMsgs={20} /><hr />
      <TextPolymorphic as='h2' children="ahmed" />
    </>
  )
}

export default App;
