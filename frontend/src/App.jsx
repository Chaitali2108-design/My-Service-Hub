
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ProviderCTA from './components/ProviderCTA';
import Footer from './components/Footer';

function App() {
  const handleLogin = () => {
    alert('Login form will be connected in the next step.');
  };

  const handleRegister = () => {
    alert('Registration form will be connected in the next step.');
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#faf9f6] pt-[76px]">
      <Navbar
        onLogin={handleLogin}
        onRegister={handleRegister}
      />

      <main>
        <Hero
          onLogin={handleLogin}
          onRegister={handleRegister}
        />

        <Services />

        <HowItWorks />

        <ProviderCTA onRegister={handleRegister} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
