import React, { useContext } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards }
from 'react-icons/hi';

import admin from "../assets/admin.png"
import { AuthContext } from '../contects/AuthProvider';

export const SideBar = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <Sidebar aria-label="Sidebar with content separator example" >
    <Sidebar.Logo href="/" img={admin} imgAlt="Admin logo" className='w-16 h-16'>
        <p>
          {
            user?.email || "Demo User"
          }
        </p>
      </Sidebar.Logo>
      <Sidebar.Items className='bg-teal-100'>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar