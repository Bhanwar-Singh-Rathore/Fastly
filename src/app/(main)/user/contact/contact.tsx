

'use client';

import UserDetails from '@/components/forms/createUser';
import UpdateDetails from '@/components/forms/updateDeatils';
import CustomModal from '@/components/global/custom-modeal';

import NotFound from '@/components/global/notFound';
import SkeletonPageLoader from '@/components/global/page-loading';

import { getAllUser } from '@/lib/queries';
import {  Mail } from 'lucide-react';

import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';



type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  createdAt: string;
  isActive: boolean;
};

const ContactPage = () => {
  const [users, setUsers] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disable,setdisable]=useState(true)
  const [searchValue, setSearchValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    setdisable(false)
    try {
      const fetchedUsers = await getAllUser();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
      setdisable(true)
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

  const filteredUsers = users.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!isLoading && users.length === 0) {
    return <NotFound heading="No contacts found" />;
  }

  return (
    <div className="p-6 min-h-[1100px] bg-white">
      <h1 className="text-4xl mb-6">Users</h1>
      <div className="flex justify-between mb-4 gap-2">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search user here"
          className="h-10 w-72 p-2 border rounded-lg"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          Create
        </button>
      </div>

      {isModalOpen && disable &&(
        <div ref={modalRef} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <CustomModal
              title={selectedContact ? 'Edit Contact' : 'Create Contact'}
              subheading={selectedContact ? 'Update user details' : 'Fill the form to add a new contact.'}
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
              <th className="p-4 text-left w-[200px] hidden md:table-cell">Phone</th>
              <th className="p-4 text-left w-[200px] hidden lg:table-cell">Active</th>
              <th className="p-4 text-left hidden lg:table-cell">Created Date</th>
              <th className="p-4 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="">
                  {/* <Loader className="animate-spin text-gray-500 w-6 h-6 mx-auto " /> */}
                  {/* <p>Loading users...</p> */}
                <SkeletonPageLoader/>
                </td>
              </tr>
            ) : (
              filteredUsers.map((contact) => (
                <tr key={contact.id} className="border-b">
                  <td className="p-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <Image
                          src={contact.avatarUrl || '/placeholder.png'}
                          alt="profile"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{contact.name}</td>
                  <td className="p-4 hidden md:table-cell">{contact.phone}</td>
                  <td className="p-4 hidden lg:table-cell">{contact.isActive ? 'Active' : 'Inactive'}</td>
                  <td className="p-4 hidden lg:table-cell">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <button
                      className="flex items-center text-blue-500 hover:underline"
                      onClick={() => (window.location.href = `mailto:${contact.email}`)}
                    >
                      <Mail className="mr-1" /> Email
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactPage;