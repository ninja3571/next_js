function ListWithObjects({ items }) {
    const itemss = items
    return (
      <ul>      {itemss.map((item, index) =>         <li key={index}> {item.name}: {item.value} </li>
            )}
        </ul>  
    );
}
export default ListWithObjects;