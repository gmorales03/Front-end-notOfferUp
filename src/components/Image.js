import img from "./imgfolder/IMG-5020.JPG";

function Images() {
  return (
    <div className="Imgs">
      <img src={img} alt="shoes" height={450} width={400} />
    </div>
  );
}

export default Images;
