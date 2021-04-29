import './App.css';

function App() {
  

  return (
    <div className="page-content">
      <header className="header">Ambience Bot</header>
        <div className="sub-header">The easiest way to play any ambience in your Discord server</div>

       <a className="download-button" href="https://discord.com/api/oauth2/authorize?client_id=834210463675973682&permissions=0&scope=bot">Invite to Discord</a>
        
        <p className="command-example">Command example: "!play forest"</p>

          <p className="command-heading">Join a voice channel to begin using Ambience Bot's commands:</p>
        
        <div className="commands">
          <div className="flex-left">
          <p className="command-line"><span className="command-name">!play</span> new ambience.</p>
          
          <p className="command-line"><span className="command-name">!resume</span> a paused ambience.</p>
          
          <p className="command-line"><span className="command-name">!save</span> an ambience to your favorites.</p>
          
          <p className="command-line"><span className="command-name">!favorites</span> play your saved favorites playlist.</p>
          
          <p className="command-line"><span className="command-name">!playing</span> displays name of current ambience.</p>
          
          <p className="command-line"><span className="command-name">!end</span> the current ambience.</p>
          
          </div>

          <div className="flex-right">
          <p className="command-line"><span className="command-name">!pause</span> current ambience.</p>
          
          <p className="command-line"><span className="command-name">!next</span> advance to next ambience.</p>
          
          <p className="command-line"><span className="command-name">!previous</span> play last ambience.</p>
          
          <p className="command-line"><span className="command-name">!loop</span> repeat current ambience.</p>
          
          <p className="command-line"><span className="command-name">!delete</span> ambience from favorites playlist.</p>
          
          <p className="command-line"><span className="command-name">!help</span> to list all bot commands.</p>
          </div>
          
        </div>
        <footer>If you are not a Discord user, download it <a className="discord-link" href="https://discord.com/">here</a></footer>
    </div>
  );
}

export default App;
