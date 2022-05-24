
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="SpeedRead"
        description="Faster and more focused reading, one tap away"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Easy to use Interface"
        description="SpeedRead features a simple, intuitive look allowing any book, essay, document, or text to be converted in seconds."
        mockupImg={assets.homeCards}
        reverse
      />
      <SectionWrapper 
        title="Powered by your brain's own autocomplete"
        description="SpeedRead makes it fast and easy to read any text while optimizing understanding and retention."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Developed by {" "}
        <span className="bold">alpenglow studio</span>
        </p>
      </div>
    </>
  );
}

export default App;
