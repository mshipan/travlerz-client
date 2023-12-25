import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaRegEdit,
  FaRegTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useGuide from "../../Hooks/useGuide";
const AllGuidesCard = ({ guide }) => {
  const [refetch] = useGuide();
  const {
    _id,
    name,
    guideImage,
    facebookURL,
    instagramURL,
    twitterURL,
    whatsappURL,
    designation,
  } = guide;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure to Delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://travlerz-server-5s80t1gwz-mshipan.vercel.app/tour-guides/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Guide has been deleted.", "success");
            }
            refetch();
          });
      }
    });
  };
  return (
    <div className="shadow-xl">
      <div className="relative overflow-hidden group">
        <div className="">
          <img
            src={guideImage}
            alt="Destination Image"
            className=" w-full h-72"
          />
        </div>

        <div className="absolute bottom-4 left-0 right-0 z-20 group-hover:-translate-y-3 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out transform-gpu flex items-center justify-center">
          <div className="w-2/3 flex items-center justify-center gap-5 bg-gray-500 p-1 rounded-lg">
            <Link to={instagramURL}>
              <div className="bg-white hover:bg-red-500 duration-500 w-7 h-7 rounded-full flex items-center justify-center">
                <FaInstagram className=" text-lg hover:text-white" />
              </div>
            </Link>
            <Link to={facebookURL}>
              <div className="bg-white hover:bg-red-500 duration-500 w-7 h-7 rounded-full flex items-center justify-center">
                <FaFacebookF className=" text-lg hover:text-white" />
              </div>
            </Link>
            <Link to={twitterURL}>
              <div className="bg-white hover:bg-red-500 duration-500 w-7 h-7 rounded-full flex items-center justify-center">
                <FaTwitter className=" text-lg hover:text-white" />
              </div>
            </Link>

            <Link to={whatsappURL}>
              <div className="bg-white hover:bg-red-500 duration-500 w-7 h-7 rounded-full flex items-center justify-center">
                <FaWhatsapp className=" text-lg hover:text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-3">
        <h1 className="text-lg font-barlow font-bold">{name}</h1>
        <p className="font-barlow text-sm">{designation}</p>
      </div>
      <div className="bg-blue-500 p-3 flex items-center justify-center gap-5">
        <Link
          to={`/dashboard/update-guide/${_id}`}
          className="flex items-center justify-center"
        >
          <button title="edit">
            <FaRegEdit className="text-xl hover:text-white duration-500" />
          </button>
        </Link>
        <button onClick={() => handleDelete(_id)} title="delete">
          <FaRegTrashAlt className="text-xl hover:text-white duration-500" />
        </button>
      </div>
    </div>
  );
};

export default AllGuidesCard;
