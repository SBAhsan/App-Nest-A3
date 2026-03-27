import downloadImg from "../../assets/download.png";
import starImg from "../../assets/star.png";

const Installed = ({ app, handleUninstall }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 mt-8 shadow-lg rounded-sm">
      <div className="flex items-center gap-8">
        <img className="w-25 h-25 rounded-sm" src={image} alt="" />
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <img className="h-5 w-5" src={downloadImg} alt="" />
              <p className="text-[#00D390]">{downloads / 1000000}M</p>
            </div>
            <div className="flex items-center gap-1">
              <img className="h-4 w-4" src={starImg} alt="" />
              <p>{ratingAvg}</p>
            </div>
            <div>
              <p>{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstall(id)}
        className="btn bg-[#00D390] text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default Installed;
