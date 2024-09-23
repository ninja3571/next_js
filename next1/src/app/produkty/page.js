import Pages from '/src/app/components/navBar.js';
import ListWithObjects from '/src/app/components/listWithOb.js'

export default function Home() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Pages></Pages>
        <h1 style={{color:'red'}}>PRODUKTY</h1>
        <ListWithObjects
          items={[{name:'jabelek', value:'1'}, {name:'gruszek', value:'2'}]}
        />
      </div>
    );
  }