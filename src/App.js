import {ChatEngine} from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
 const App= () =>{
     return (
         <ChatEngine
         height="100vh"
         projectID="8bb6748f-b831-4963-82dd-1ba1a0480e2c"
         userName="NewChat"
         userSecret="shamim1997"
         renderChatFeed ={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
/>
     );
     }

 export default App;