import {ChatEngine} from 'react-chat-engine';
import './App.css'
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
 const App= () =>{
     if(!localStorage.getItem('username'))return <LoginForm />
     return (
         <ChatEngine
         height="100vh"
         projectID="8bb6748f-b831-4963-82dd-1ba1a0480e2c"
         userName={localStorage.getItem('username')}
         userSecret={localStorage.getItem('password')}
         renderChatFeed ={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
/>
     );
     }

 export default App;