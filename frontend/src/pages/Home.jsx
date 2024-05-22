import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {

  const authState = useSelector(state => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : "Task Manager";
  }, [authState]);

  return (
    <MainLayout>
      {!isLoggedIn ? (
        <div className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-screen flex flex-col justify-center items-center text-center p-8'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to Task Manager App</h1>
          <Link to="/signup" className='mt-10 text-2xl flex items-center space-x-4 hover:space-x-6 transition-all'>
            <span className='transition-[margin]'>Join now to manage your tasks</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      ) : (
        <div className='bg-gray-100 min-h-screen flex flex-col'>
          <div className='container mx-auto p-8 flex-grow'>
            <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
              <h1 className='text-2xl font-semibold'>Welcome, {authState.user.name}!</h1>
            </div>
            <Tasks />
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default Home;
