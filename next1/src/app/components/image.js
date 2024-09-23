export default function Imagge({srcUrl, altText}) {
  return (
    <div>
      <img
        src={srcUrl}
        alt={altText}
        style={{width:'500px',height:'300px'}}
      />
    </div>
  );
}