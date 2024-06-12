import { UserCircleIcon } from "@heroicons/react/16/solid";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const MyProfile: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "John@Doe.com",
    phoneNumber: "012345678910",
    birthday: "1990-02-01",
    profilePicture: "",
  });

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Load form data from local storage when the component mounts
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfilePictureChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setFormData({
            ...formData,
            profilePicture: e.target.result as string,
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    toast.success("Changes Saved!");
    setIsSaved(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`-mt-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-4 ${isSaved ? "text-gray-400" : "text-black"}`}
      >
        <div className="flex flex-col items-center space-y-0 lg:space-y-4">
          {formData.profilePicture ? (
            <UserCircleIcon className="h-20 cursor-pointer fill-grayBlue transition hover:fill-orange hover:opacity-90 lg:h-40" />
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          <label className="block text-darkBlue">Profile Picture*</label>
          <span className="text-center text-sm text-slate-600">
            *Disabled for Security Purposes.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:col-span-2 md:grid-cols-2">
          <div>
            <label className="block text-sm text-darkBlue">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1  shadow-sm focus:border-orange focus:outline-none focus:ring-orange"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-darkBlue">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 shadow-sm focus:border-orange focus:outline-none focus:ring-orange"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-darkBlue">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 shadow-sm focus:border-orange focus:outline-none focus:ring-orange"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-darkBlue">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 shadow-sm focus:border-orange focus:outline-none focus:ring-orange"
              required
              pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^(\+44\s?1\d{2}|\(?01\d{2}\)?)\s?\d{3}\s?\d{4}$|^(\+44\s?2\d{2}|\(?02\d{2}\)?)\s?\d{3}\s?\d{4}$|^(\+44\s?3\d{2}|\(?03\d{2}\)?)\s?\d{3}\s?\d{4}$|^(\+44\s?8\d{2}|\(?08\d{2}\)?)\s?\d{3}\s?\d{4}$"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-darkBlue">Birthday</label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 shadow-sm  focus:outline-none "
              required
            />
          </div>
          <div className="flex justify-end md:col-span-2">
            <button
              type="submit"
              className="rounded-md bg-orange px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-darkOrange active:scale-95 "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default MyProfile;
