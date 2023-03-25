import img from "./imgfolder/IMG-5020.JPG";

function Images() {
  return (
    <div className="Images">
      <img src={img} alt="shoes" height={350} width={300} />
    </div>
  );
}

export default Images;
