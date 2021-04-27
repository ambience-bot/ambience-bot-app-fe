import './App.css';

function App() {
  

  return (
    <div className="page-content">
      <header className="header">Ambience Bot</header>
        <div className="sub-header">The easiest way to play any ambience in your Discord server</div>

       <a className="download-button" href="https://discord.com/api/oauth2/authorize?client_id=834210463675973682&permissions=0&scope=bot">Invite To Your Server</a>

        <div className="commands">
          <span className="command-heading">After joining a voice channel here are your options:</span>
          <br/>
          <span><span className="command-name">!play</span> new ambience.</span>
          <br/>
          <span><span className="command-name">!pause</span> current ambience.</span>
          <br/>
          <span><span className="command-name">!resume</span> a paused ambience.</span>
          <br/>
          <span><span className="command-name">!next</span> advance to next ambience.</span>
          <br/>
          <span><span className="command-name">!previous</span> play last ambience.</span>
          <br/>
          <span><span className="command-name">!end</span> the current ambience.</span>
          <br/>
          <span><span className="command-name">!help</span> to list all commands.</span>
        </div>
        <footer>If you are not a Discord user, download it <a href="https://discord.com/">here</a></footer>
    </div>
  );
}

export default App;
