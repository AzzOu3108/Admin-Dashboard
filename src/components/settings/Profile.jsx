import React from 'react'
import { User } from "lucide-react";
import SettingsSection from "./SettingsSection";

const Profile = () => {
	return (
		<SettingsSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://images.unsplash.com/photo-1581391528803-54be77ce23e3?q=80&w=1974&auto=
            format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>John Doe</h3>
					<p className='text-gray-400'>john.doe@example.com</p>
				</div>
			</div>

			<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingsSection>
	);
};
export default Profile;