import Link from 'next/link'

function Pages(){
    return(
        <div style={{display:'flex', gap: 20 +'px'}}>
            <Link href='http://localhost:3000'>MAIN  </Link>
            <Link href='./page2'>  Page.2  </Link>
            <Link href='./page3'>  Page.3  </Link>
        </div>
    )
}

export default Pages