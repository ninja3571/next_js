import Pages from '/src/app/components/navBar.js';
import SimpleForm from '/src/app/components/form.js'
import ConditionalDisplay from '/src/app/components/visibility.js'

export default function Home() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Pages></Pages>
        <ConditionalDisplay
        isVisible='true'/>
        <SimpleForm
        label='konsola'
        placeholder='text'
        />
      </div>
    );
  }