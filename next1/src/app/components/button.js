function DynamicButton({ label, onClickk }) {
    return (
      <button onClick={onClickk} style={{backgroundColor:"purple"}}>      {label}    </button>  );
  }export default DynamicButton;