import Pages from '/src/app/components/navBar.js';
import Text from '/src/app/components/texBl.js'
import Imagge from '/src/app/components/image.js'

export default function Home() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Pages></Pages>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1 style={{color:'yellow'}}>PAGE 2</h1>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>
          <Text/>
          <Imagge/>
        </main>
      </div>
    );
  }