import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import useUser from "../../Hooks/useUser";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const { user } = useAuth();
  const [singleUser] = useUser(user?.email);
  console.log("first", singleUser);
  const { country, dob, email, gender, name, phone, photo } = singleUser;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    fetch(
      `https://travlerz-server-production.up.railway.app/user/${singleUser?.email}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Profile Updated Successfully!",
            text: "Press OK to continue",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
        navigate("/dashboard/my-profile");
      });
  };
  return (
    <div className="my-16">
      <Helmet>
        <title>Update Profile | Dashboard</title>
      </Helmet>
      <div className="bg-packageBg bg-no-repeat bg-cover bg-fixed bg-bottom w-full h-48 flex items-center justify-center ">
        <h1 className="packageBannerText font-barlow text-4xl font-bold text-white drop-shadow-2xl">
          Update Profile
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-full gap-20 w-full">
        <div>
          <img src={photo} alt="User Photo" className="w-56" />
        </div>
        <div className="md:w-1/3 relative">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border border-black p-5"
          >
            <div className="form-control">
              <label htmlFor="name" className="font-barlow font-semibold">
                Name:
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                disabled
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="font-barlow font-semibold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                disabled
                defaultValue={email}
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone" className="font-barlow font-semibold">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                defaultValue={phone}
                {...register("phone")}
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
              />
            </div>
            <div className="form-control">
              <label htmlFor="gender" className="font-barlow font-semibold">
                Gender:
              </label>
              <select
                name="gender"
                defaultValue={gender}
                {...register("gender")}
                className="p-1 border border-black outline-none"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-control">
              <label htmlFor="dob" className="font-barlow font-semibold">
                Date of Birth:
              </label>
              <input
                type="date"
                name="dob"
                defaultValue={dob}
                {...register("dob")}
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
              />
            </div>
            <div className="form-control">
              <label htmlFor="country" className="font-barlow font-semibold">
                Country:
              </label>
              <input
                type="text"
                name="country"
                defaultValue={country}
                {...register("country")}
                className="p-1 focus:outline-none border border-[#131D4E] placeholder:font-mono"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Update Profile"
                className="bg-[#131D4E] hover:bg-white text-white hover:text-[#131D4E] font-barlow font-semibold px-5 py-2 border border-[#131D4E] duration-500 cursor-pointer mt-7"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
