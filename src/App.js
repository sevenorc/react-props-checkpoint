import Data from './Profile/Data'

function App() {
  const handleName = name => alert(name);
  return (
    <>
      <Data fullName="Slim Masmoudi" bio=" King of the Andals and the First Men, Protector of the Seven Kingdoms, the Father of Dragons, the Khal of the Great Grass Sea, the Unburnt, the Breaker of Chains" profession="Engineer" handleName={handleName}>
        <img src="./profilePhoto.jpg"/>
        <br/>
      </Data>
    </>
  );
}


export default App;
