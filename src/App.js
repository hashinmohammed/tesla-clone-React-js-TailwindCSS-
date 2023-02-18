import NavBar from "./components/NavBar";
import Model from './components/Model';
// import TeslaModel from "./components/TeslaModel";
function App() {
  const imageUrl = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto';
  const style = {
    backgroundImage: `url(${imageUrl})`
    
  };
  
  return (
    <div className="lg:bg h-screen bg-cover bg-center" style={style}>
      
   <NavBar />
   <Model title='Model 3' imageUrl='https://tesla-cdn.thron.com/delivery/public/image/tesla/7e27c9d7-7d98-4336-84e1-6b54e12df7a8/bvlatuR/std/2880x2400/Homepage-Model-3-Global-Desktop?quality=auto-medium&format=auto' />
      <Model title='Model Y' imageUrl='https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop?quality=auto-medium&format=auto' />
      <Model title='Model S' imageUrl='https://tesla-cdn.thron.com/delivery/public/image/tesla/e57227be-7840-4ea7-b46a-11ab25e76039/bvlatuR/std/2880x1800/Homepage-Model-S-Desktop-LHD?quality=auto-medium&amp;format=auto' />
      <Model title='Model X' imageUrl='https://tesla-cdn.thron.com/delivery/public/image/tesla/05a76324-947e-453b-a628-8b2d759756fa/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD?quality=auto-medium&amp;format=auto' />
      <Model title='Solar Roof' imageUrl='https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto' />
      <Model title='Accessories' imageUrl='https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046' />




  {/* <TeslaModel
        backgroundImageUrl='https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop?quality=auto-medium&amp;format=auto'
        modelTitle='Model S'
      /> */}
    </div>
  );
}

export default App;
