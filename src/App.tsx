import './App.css';
import Header from './header';
import { ConversationPanel } from './conversationPanel';
import { FeedbackPanel } from './feedbackPanel';
import SideBar from './sidebar';
import NavBar from './header';

function App() {
  return(
    <div>
    <div id="page-header">
      <Header/>
    </div>
    <div id="conversation-panel">
      <ConversationPanel/>
    </div>
    <div id="feedback-panel">
      <FeedbackPanel/>
    </div>
    <div>
      <NavBar></NavBar>
      <div></div>
      <SideBar></SideBar>
    </div>
    </div>
  )
}

export default App;