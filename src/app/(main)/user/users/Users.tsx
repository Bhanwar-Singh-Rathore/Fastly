

'use client';

import UserDetails from '@/components/forms/createUser';
import UpdateDetails from '@/components/forms/updateDeatils';
import CustomModal from '@/components/global/custom-modeal';
import NotFound from '@/components/global/notFound';
import SkeletonPageLoader from '@/components/global/page-loading';
import { getAllUser, getCurrenUser } from '@/lib/queries';
import { Copy, Delete, Edit, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { toast } from 'sonner';

type Role = string[];

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  Role: Role;
  createdAt: string;
};

const ContactPage = () => {
  const [users, setUsers] = useState<Contact[]>([]);
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [disable,setdisable]=useState(true)
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Fetch users
  const fetchUsers = async () => {
    setIsLoading(true)
    setdisable(false)
    try {
      const users = await getAllUser();
      setUsers(users);
      setIsLoading(false)
      setdisable(true)
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const handleCreateUser = async () => {
    await fetchUsers();
    setIsModalOpen(false);
    setSelectedContact(null);
  };

  const handleEditUser = async (contactId: string) => {
    try {
      const user = await getCurrenUser(contactId);
      setSelectedContact(user);
      setIsModalOpen(true);
      setOpenModalId(null);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      setUsers((prev) => prev.filter((user) => user.id !== userId));
      setOpenModalId(null);
      toast('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast('Failed to delete user');
    }
  };

  const handleCopyEmail = (email: string) => {
    setOpenModalId(null);
    navigator.clipboard
      .writeText(email)
      .then(() => toast('Email copied to clipboard'))
      .catch((err) => console.error('Failed to copy email:', err));
  };

  const filteredUsers = users.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!isLoading && users.length === 0) {
    return <NotFound heading="No Users found" />;
  }
  return (
    <div className="p-6 min-h-[1100px] bg-white">
      <h1 className="text-4xl mb-6">Users</h1>
      <div className="flex justify-between mb-4 gap-2" >
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search user here"
          className="h-10 w-72 p-2 border rounded-lg"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Create 
        </button>
      </div>

      {isModalOpen && disable && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <CustomModal
              title={selectedContact ? 'Edit Contact' : 'Create Contact'}
              subheading={
                selectedContact
                  ? 'Update user details'
                  : 'Fill the form to add a new contact.'
              }
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);
                setSelectedContact(null);
              }}
            >
              {selectedContact ? (
                <UpdateDetails details={selectedContact} onSuccess={handleCreateUser} />
              ) : (
                <UserDetails onSuccess={handleCreateUser} />
              )}
            </CustomModal>
          </div>
        </div>
      )}

      <div className="overflow-x-auto min-h-[700px] rounded-lg shadow-md border">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4 text-left w-[200px]">Profile</th>
              <th className="p-4 text-left w-[200px]">Name</th>
              <th className="p-4 text-left w-[300px] hidden md:table-cell">Email</th>
              <th className="p-4 text-left w-[200px] hidden lg:table-cell">Phone</th>
              <th className="p-4 text-left w-[200px] hidden xl:table-cell">Role</th>
              <th className="p-4 text-left hidden xl:table-cell">Created Date</th>
              <th className="p-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
{isLoading ?  <tr>
                <td colSpan={6} className="">
                  {/* <Loader className="animate-spin text-gray-500 w-6 h-6 mx-auto " /> */}
                  {/* <p>Loading users...</p> */}
                <SkeletonPageLoader/>
                </td>
              </tr>:
            filteredUsers.map((Details) => (
              <tr key={Details.id} className="border-b">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <Image
                        src={Details.avatarUrl || '/placeholder.png'}
                        alt="profile"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                </td>
                <td className="p-4">{Details.name}</td>
                <td className="p-4 hidden md:table-cell">{Details.email}</td>
                <td className="p-4 hidden lg:table-cell">{Details.phone}</td>
                <td className="p-4 hidden xl:table-cell">{Details.permission}</td>
                <td className="p-4 hidden xl:table-cell">
                  {new Date(Details.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4 text-right relative">
                  <button
                  
                    className={isModalOpen ? 'hidden md:block ' : 'flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-300'}
                    onClick={() => setOpenModalId(openModalId === Details.id ? null : Details.id)}
                  >
                    <MoreHorizontal />
                  </button>
                  {openModalId === Details.id && (
                    <div className="absolute right-0 bg-white border rounded-lg shadow-md w-32 z-10">
                      <button
                        className="w-full flex text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleEditUser(Details.id)}
                      >
                        <Edit className="mr-2" /> Edit
                      </button>
                      <button
                        className="w-full flex text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleCopyEmail(Details.email)}
                      >
                        <Copy className="mr-2" /> Copy
                      </button>
                      <button
                        className="w-full flex text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => handleDeleteUser(Details.id)}
                      >
                        <Delete className="mr-2" /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactPage;
