import ListGallery from './components/ListGallery';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <div className='rounded-b-4xl shadow-lg bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
        <div className='max-w-7xl w-full'>
          <Hero />
          <ListGallery />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;