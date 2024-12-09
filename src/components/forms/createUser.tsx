

// 'use client';

// import React, { useState, useEffect } from 'react';
// import FileUpload from '../global/file-upload';

// type UserDetailsProps = {
//   details?: Partial<User>;
// };

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   zipCode: string;
//   state: string;
//   country: string;
//   avatarUrl?: string;
// }

// const UserDetails: React.FC<UserDetailsProps> = ({ details }) => {
//   const [formData, setFormData] = useState<User>({
//     id: details?.id || '',
//     name: details?.name || '',
//     email: details?.email || '',
//     phone: details?.phone || '',
//     address: details?.address || '',
//     city: details?.city || '',
//     zipCode: details?.zipCode || '',
//     state: details?.state || '',
//     country: details?.country || '',
//     avatarUrl: details?.avatarUrl || '',
//   });

//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (details) {
//       setFormData({
//         ...formData,
//         ...details,
//       });
//     }
//   }, [details]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       console.log('Form submitted:', formData); // Log submitted values for debugging

//       // Simulate a form submission
//       const response = await fakeUpsertUser(formData);

//       if (!response) throw new Error('No response from server');

//       alert('User details saved successfully!'); // Success notification
//     } catch (error) {
//       console.error('Error submitting form:', error); // Log error for debugging
//       alert('Oops! Could not save user details.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const fakeUpsertUser = async (data: User) => {
//     // Simulate an API request to save data
//     return new Promise((resolve) => setTimeout(() => resolve(data), 1000));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold">User Information</h2>
//       <p>Please enter your personal details</p>

//       <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//         <div className="flex gap-4">
//           <div className="flex-1">
//             {/* <FileUpload
//               apiEndpoint="avatar"
//               value={formData.avatarUrl}
//               onChange={(file: File) => setFormData({ ...formData, avatarUrl: URL.createObjectURL(file) })}
//             /> */}
//             <FileUpload
//   apiEndpoint="avatar"
//   value={formData.avatarUrl}
//   onChange={(file: File | null) => {
//     if (file) {
//       const avatarUrl = URL.createObjectURL(file);
//       setFormData({ ...formData, avatarUrl });
//     } else {
//       console.error("File upload failed or returned null.");
//     }
//   }}
// />

//             <label htmlFor="name" className="block mb-1">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your name"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="flex-1">
//             <label htmlFor="email" className="block mb-1">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="phone" className="block mb-1">Phone</label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone number"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="address" className="block mb-1">Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="123 St..."
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="flex-1">
//             <label htmlFor="city" className="block mb-1">City</label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               placeholder="City"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//         </div>

        // <div className="flex gap-4">
        //   <div className="flex-1">
        //     <label htmlFor="state" className="block mb-1">State</label>
        //     <input
        //       type="text"
        //       id="state"
        //       name="state"
        //       value={formData.state}
        //       onChange={handleChange}
        //       placeholder="State"
        //       className="w-full p-2 border border-gray-300 rounded"
        //       required
        //     />
        //   </div>

        //   <div className="flex-1">
        //     <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
        //     <input
        //       type="text"
        //       id="zipCode"
        //       name="zipCode"
        //       value={formData.zipCode}
        //       onChange={handleChange}
        //       placeholder="Zip code"
        //       className="w-full p-2 border border-gray-300 rounded"
        //       required
        //     />
        //   </div>
        // </div>

        // <div className="flex gap-4">
        //   <div className="flex-1">
        //     <label htmlFor="country" className="block mb-1">Country</label>
        //     <input
        //       type="text"
        //       id="country"
        //       name="country"
        //       value={formData.country}
        //       onChange={handleChange}
        //       placeholder="Country"
        //       className="w-full p-2 border border-gray-300 rounded"
        //       required
        //     />
        //   </div>
        // </div>

        // <div>
        //   <select name="someOption" className="w-full p-2 border border-gray-300 rounded">
        //     <option value="someOption">Some option</option>
        //     <option value="otherOption">Other option</option>
        //   </select>
        // </div>

//         <div>
//           <input type="text" name="someInput" id="someInput" placeholder="Some Input" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Saving...' : 'Save User Information'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UserDetails;


'use client';

import React, { useState, useEffect } from 'react';
import FileUpload from '../global/file-upload';
import { CreateUser } from '@/lib/queries';

import { toast } from 'sonner';


type UserDetailsProps = {
  details?: Partial<User>;
};

interface User {
  // id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  avatarUrl?: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ details ,onSuccess}) => {
  const [formData, setFormData] = useState<User>({
    // id: details?.id || '',
    name: details?.name || '',
    email: details?.email || '',
    phone: details?.phone || '',
    address: details?.address || '',
    city: details?.city || '',
    zipCode: details?.zipCode || '',
    state: details?.state || '',
    country: details?.country || '',
    avatarUrl: details?.avatarUrl || '',
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (details) {
      setFormData((prev) => ({
        ...prev,
        ...details,
      }));
    }
  }, [details]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      permission:'read'
    }));
  };

  // const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log('Form submitted:', formData);
      const response = await CreateUser(formData);
      onSuccess(false)
      if (!response) throw new Error('No response from server');
      toast('User details saved successfully!');
      // router.refresh()
    } catch (error) {
      console.error('Error submitting form:', error);
      toast('Oops! Could not save user details.');
    } finally {
      setIsLoading(false);
    }
  };

  // const fakeUpsertUser = async (data: User) => {
  //   return new Promise((resolve) => setTimeout(() => resolve(data), 1000));
  // };

  return (
    <div className="max-w-4xl mx-auto p-6  sm:w-full bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold">User Information</h2>
      <p>Please enter your personal details</p>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className=''><FileUpload
              apiEndpoint="avatar"
              value={formData.avatarUrl}
              onChange={(url) => setFormData((prev) => ({ ...prev, avatarUrl: url || '' }))}
            /></div>
        <div className="flex gap-4">
          
          <div className="flex-1">
            
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex-1">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        {/* Additional form fields */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="phone" className="block mb-1">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        {/* Repeat for address, city, state, zipCode, and country */}
        {/* Example: */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="address" className="block mb-1">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 St..."
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex-1">
            <label htmlFor="city" className="block mb-1">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="state" className="block mb-1">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="state"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex-1">
            <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Zip code"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="country" className="block mb-1">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div>
          <select name="someOption" className="w-full p-2 border border-gray-300 rounded">
            <option value="someOption">Some option</option>
            <option value="otherOption">Other option</option>
          </select>
        </div>


        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save User Information'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
