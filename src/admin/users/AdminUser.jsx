import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../main';
import Layout from '../utils/Layout';
import toast from 'react-hot-toast';

function AdminUser({ user }) {
  const navigate = useNavigate();

  // Redirect if user is not admin
  useEffect(() => {
    if (user && user.role !== 'admin') {
      navigate('/');
    }
  }, [user, navigate]);

  const [users, setUsers] = useState([]);

  // Fetch users from the server
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${server}/admin/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setUsers(data.users);
    } catch (err) {
      console.log(err);
      toast.error('Failed to fetch users');
    }
  };

  // Call fetchUsers on component load
  useEffect(() => {
    fetchUsers();
  }, []);

  // Update user role
  const updateRole = async (id) => {
    if (window.confirm("Are you sure you want to update the user's role?")) {
      try {
        const { data } = await axios.put(
          `${server}/admin/user/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem('token'),
            },
          }
        );

        toast.success(data.message);
        fetchUsers(); // Refresh users after role update
      } catch (err) {
        toast.error(err.response?.data?.message || 'Failed to update role');
      }
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-4  py-28">
        <h1 className="text-2xl font-bold mb-4 text-center">All Users</h1>

        {/* Scrollable Table Wrapper */}
        <div className="overflow-x-auto">
          <div className="overflow-y-auto max-h-[60vh]">
            <table className="min-w-full bg-white border border-gray-300 shadow-md">
              <thead className="sticky top-0 bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Update Role</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((e, i) => (
                    <tr key={e._id} className="border-b">
                      <td className="px-4 py-2">{i + 1}</td>
                      <td className="px-4 py-2">{e.name}</td>
                      <td className="px-4 py-2">{e.email}</td>
                      <td className="px-4 py-2">{e.role}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => updateRole(e._id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                        >
                          Update Role
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminUser;
