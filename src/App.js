import NavBar from "./components/NavBar";

function App() {
  const imageUrl = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto';
  const style = {
    backgroundImage: `url(${imageUrl})`
    
  };
  
  return (
    <div className="lg:bg h-screen bg-cover bg-center" style={style}>
      
   <NavBar />
    </div>
  );
}

export default App;
