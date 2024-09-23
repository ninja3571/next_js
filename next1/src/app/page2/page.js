import Pages from '/src/app/components/navBar.js';
import Text from '/src/app/components/texBl.js'
import Imagge from '/src/app/components/image.js'
import ConditionalDisplay from '/src/app/components/visibility.js'

export default function Home() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Pages/>
          <h1 style={{color:'yellow', fontSize:'200%'}}>PAGE 2</h1>
        <Text/>
        <Imagge
          srcUrl="https://images8.alphacoders.com/133/1336966.jpeg"
          altText="image"
        />
        <ConditionalDisplay/>
      </div>
    );
  }