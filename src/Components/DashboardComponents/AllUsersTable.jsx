import { useRef } from "react";
import { FaUserShield, FaUser, FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const AllUsersTable = ({ user, index, allUsers, setAllUsers }) => {
  const { _id, photo, name, email, phone, role, country, gender, dob } = user;

  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
          const updateUsers = allUsers.map((user) => {
            if (user._id === _id) {
              return { ...user, role: "admin" };
            }
            return user;
          });
          setAllUsers(updateUsers);
        }
      });
  };

  const handleMakeUser = (_id) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "user" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an user now`,
            showConfirmButton: false,
            timer: 1500,
          });
          const updateUsers = allUsers.map((user) => {
            if (user._id === _id) {
              return { ...user, role: "user" };
            }
            return user;
          });
          setAllUsers(updateUsers);
        }
      });
  };

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
        fetch(`http://localhost:5000/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              const remainingUser = allUsers.filter((aU) => aU._id !== _id);
              setAllUsers(remainingUser);
            }
          });
      }
    });
  };

  return (
    <tr className="border-b border-black last:border-b-0">
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <div className="flex items-center justify-center gap-3">
          <button
            title={role === "admin" ? "button disabled" : "make admin"}
            onClick={() => handleMakeAdmin(_id)}
            disabled={role === "admin"}
            className="bg-green-500 hover:bg-white border border-green-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-green-500"
          >
            <FaUserShield />
          </button>
          <button
            title={role === "user" ? "button disabled" : "make user"}
            onClick={() => handleMakeUser(_id)}
            disabled={role === "user"}
            className="bg-yellow-500 hover:bg-white border border-yellow-500 p-2 text-lg duration-500 disabled:opacity-30 disabled:bg-yellow-500"
          >
            <FaUser />
          </button>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-center gap-3">
          <button
            title="view user"
            onClick={openModal}
            className="bg-green-500 hover:bg-white border border-green-500 p-2 text-lg duration-500"
          >
            <FaRegEye />
          </button>
          <dialog id="my_modal_4" className="modal" ref={modalRef}>
            <form method="dialog" className="modal-box w-full max-w-2xl">
              <button
                onClick={closeModal}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-5 md:gap-0">
                <div>
                  <img src={photo} alt="User Image" className="w-56" />
                </div>
                <div className="flex flex-col md:items-start">
                  <h3 className="font-barlow text-xl font-semibold">
                    Name: {name}
                  </h3>
                  <p className="text-lg my-1">Email: {email}</p>
                  <p className="text-lg mb-1">Mobile: {phone}</p>
                  <p className="text-lg mb-1">Date of Birth: {dob}</p>
                  <p className="text-lg mb-1">Gender: {gender}</p>
                  <p className="text-lg ">Country: {country}</p>
                </div>
              </div>
            </form>
          </dialog>
          <button
            title="delete user"
            onClick={() => handleDelete(_id)}
            className="bg-yellow-500 hover:bg-white border border-yellow-500 p-2 text-lg duration-500"
          >
            <FaRegTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AllUsersTable;
