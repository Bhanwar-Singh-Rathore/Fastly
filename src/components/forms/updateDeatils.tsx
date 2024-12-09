

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


// 'use client';
// import { Switch } from '@headlessui/react'; 
// import React, { useState, useEffect } from 'react';
// import FileUpload from '../global/file-upload';
// import { CreateUser } from '@/lib/queries';
// import { toast } from 'sonner';



// type UserDetailsProps = {
//   details?: Partial<User>;
// };

// interface User {
//   // id: string;
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

// const UpdateDetails: React.FC<UserDetailsProps> = ({ details,onSuccess }) => {
//   const [formData, setFormData] = useState<User>({
//     // id: details?.id || '',
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

  
//   useEffect(() => {
//     if (details) {
//       setFormData((prev) => ({
//         ...prev,
//         ...details,
//       }));
//     }
//   }, [details]);


//   const [readPermission, setReadPermission] = useState(false); // State for read permission
//   const [writePermission, setWritePermission] = useState(false); 
  
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
  
//     // Determine the permission dynamically based on current state
//     const userPermission = readPermission ? 'Read' : writePermission ? 'Write' : '';
  
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//       permission: userPermission, // Assign dynamic permission
//     }));
//   };
  





//   // const router = useRouter()
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

   
//     try {
//       console.log('Form submitted:', formData);
//       const response = await CreateUser(formData);
//       onSuccess(false)
//       if (!response) throw new Error('No response from server');
//       // alert('User details saved successfully!');
//       toast('User Details Update Successfully!')
//       // router.refresh()
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast('Oops! Could not save user details.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // const fakeUpsertUser = async (data: User) => {
//   //   return new Promise((resolve) => setTimeout(() => resolve(data), 1000));
//   // };

//   const [isLoading, setIsLoading] = useState(false);

//   const [isEnabled, setIsEnabled] = useState(false); 
//   return (
//     <div className="max-w-4xl mx-auto p-6  bg-white shadow-md rounded-lg">
      

//       <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//       <div className=''><FileUpload
//               apiEndpoint="avatar"
//               value={formData.avatarUrl}
//               onChange={(url) => setFormData((prev) => ({ ...prev, avatarUrl: url || '' }))}
//             /></div>
//         <div className="flex gap-4">
          
//           <div className="flex-1">
            
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

//         {/* Additional form fields */}
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

//         {/* Repeat for address, city, state, zipCode, and country */}
//         {/* Example: */}
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
//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="state" className="block mb-1">State</label>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               placeholder="state"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>

//           <div className="flex-1">
//             <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
//             <input
//               type="text"
//               id="zipCode"
//               name="zipCode"
//               value={formData.zipCode}
//               onChange={handleChange}
//               placeholder="Zip code"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <div className="flex-1">
//             <label htmlFor="country" className="block mb-1">Country</label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               placeholder="Country"
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//         </div>

//         {/* <div>
//           <select name="someOption" className="w-full p-2 border border-gray-300 rounded">
//             <option value="someOption">Some option</option>
//             <option value="otherOption">Other option</option>
//           </select>
//         </div> */}
//         <div>{/* Switch Component */}
//           {/* <p className='font-semibold'>User Permissions</p>
//           <p className='mt-2 mb-2 font-semibold' > You can give access to Accounts member by turning on
//                   access control for each  Account. This is only visible to
//                   Admin only</p> */}
//                   <div>
//           <p className="font-semibold">User Permissions</p>
//           <p className="mt-2 mb-2 font-semibold">
//             You can give access to Accounts member by turning on
//             access control for each Account. This is only visible to Admin.
//           </p>

//           <div className="flex items-center gap-24">
//             <label htmlFor="readSwitch" className="block mb-1 font-semibold text-xl">Read</label>
//             <Switch
//               checked={readPermission}
//               onChange={() => {
//                 setReadPermission(true);
//                 setWritePermission(false); // Only allow one permission at a time
//               }}
//               className={`${readPermission ? 'bg-blue-600' : 'bg-gray-300'} relative inline-flex items-center h-6 rounded-full w-12`}
//             >
//               <span className="sr-only">Read</span>
//               <span
//                 className={`${readPermission ? 'translate-x-6' : 'translate-x-1'} inline-block w-5 h-5 transform bg-white rounded-full transition`}
//               />
//             </Switch>
//           </div>

//           <div className="flex items-center gap-24">
//             <label htmlFor="writeSwitch" className="block mb-1 font-semibold text-xl">Write</label>
//             <Switch
//               checked={writePermission}
//               onChange={() => {
//                 setWritePermission(true);
//                 setReadPermission(false); // Only allow one permission at a time
//               }}
//               className={`${writePermission ? 'bg-blue-600' : 'bg-gray-300'} relative inline-flex items-center h-6 rounded-full w-12`}
//             >
//               <span className="sr-only">Write</span>
//               <span
//                 className={`${writePermission ? 'translate-x-6' : 'translate-x-1'} inline-block w-5 h-5 transform bg-white rounded-full transition`}
//               />
//             </Switch>
//           </div>
//         </div>
//         {/* <div className="flex items-center gap-24">
//           <label htmlFor="switch" className="block mb-1 font-semibold text-xl">Write</label>
//           <Switch
//             checked={isEnabled}
//             onChange={setIsEnabled}
//             className={`${isEnabled ? 'bg-blue-600' : 'bg-gray-300'} relative inline-flex items-center h-6 rounded-full w-12`}
//           >
//             <span className="sr-only">Write</span>
//             <span
//               className={`${isEnabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-5 h-5 transform bg-white rounded-full transition`}
//             />
//           </Switch>
//         </div> */}

//       </div>


//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-500 text-white rounded"
//             disabled={isLoading}
//           >
//             {isLoading ? 'updating...' : 'Update Information'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateDetails;


'use client';
import { Switch } from '@headlessui/react'; 
import React, { useState, useEffect } from 'react';
import FileUpload from '../global/file-upload';
import { CreateUser } from '@/lib/queries';
import { toast } from 'sonner';

type UserDetailsProps = {
  details?: Partial<User>;
  onSuccess: (status: boolean) => void;
};

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  avatarUrl?: string;
  permission?: string;
}

const UpdateDetails: React.FC<UserDetailsProps> = ({ details, onSuccess }) => {
  const [formData, setFormData] = useState<User>({
    name: details?.name || '',
    email: details?.email || '',
    phone: details?.phone || '',
    address: details?.address || '',
    city: details?.city || '',
    zipCode: details?.zipCode || '',
    state: details?.state || '',
    country: details?.country || '',
    avatarUrl: details?.avatarUrl || '',
    permission: details?.permission || '',
  });

  const [readPermission, setReadPermission] = useState(details?.permission === 'Read');
  const [writePermission, setWritePermission] = useState(details?.permission === 'Write');
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
    }));
  };

  const handlePermissionChange = (permission: 'Read' | 'Write') => {
    setFormData((prev) => ({
      ...prev,
      permission,
    }));
    setReadPermission(permission === 'Read');
    setWritePermission(permission === 'Write');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Submitting form data:', formData);
      const response = await CreateUser(formData);
      if (!response) throw new Error('No response from server');
      toast('User Details Updated Successfully!');
      onSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast('Oops! Could not update user details.');
      onSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg " >
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <FileUpload
            apiEndpoint="avatar"
            value={formData.avatarUrl}
            onChange={(url) => setFormData((prev) => ({ ...prev, avatarUrl: url || '' }))}
          />
        </div>

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
              placeholder="State"
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
          <p className="font-semibold">User Permissions</p>
          <p className="mt-2 mb-2 text-sm">
            You can give access to account members by turning on access control for each account.
          </p>

          <div className="flex items-center gap-6">
            <div>
              <label htmlFor="readSwitch" className="font-semibold text-lg">Read</label>
              <Switch
                checked={readPermission}
                onChange={() => handlePermissionChange('Read')}
                className={`${
                  readPermission ? 'bg-blue-600' : 'bg-gray-300'
                } relative inline-flex items-center h-6 rounded-full w-12`}
              >
                <span
                  className={`${
                    readPermission ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-5 h-5 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>

            <div>
              <label htmlFor="writeSwitch" className="font-semibold text-lg ">Write</label>
              <Switch
                checked={writePermission}
                onChange={() => handlePermissionChange('Write')}
                className={`${
                  writePermission ? 'bg-blue-600' : 'bg-gray-300'
                } relative inline-flex items-center h-6 rounded-full w-12`}
              >
                <span
                  className={`${
                    writePermission ? 'translate-x-6' : 'translate-x-1'
                  } inline-block w-5 h-5 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update User'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDetails;
