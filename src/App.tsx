import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyNexora from './components/WhyNexora';
import Showcase from './components/Showcase';
import FAQ from './components/FAQ';
import AuditForm from './components/AuditForm';
import Footer, { FloatingWhatsApp } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:p-4">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Pricing />
        <WhyNexora />
        <AuditForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
