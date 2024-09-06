"use client";
import Cookies from 'js-cookie';
import React, { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));
   
  const [profile, setProfile] = useState(() => {
    const userProfile = Cookies.get('userProfile');
    return userProfile
      ? JSON.parse(userProfile)
      : {
          id: '',
          uid: '',
          first_name: '',
          last_name: '',   
          full_name: '',                                
          dob: '',
          gender: '',
          marital_status: '',
          address: '',
          city:'',
          contact_number: '',
          pincode:'',
          email: ''
        };
  });
  
  console.log(profile);
   
  const login = (userData) => {
    Cookies.set('token', userData.token);
    Cookies.set('uid', userData.uid);
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('uid');
    Cookies.remove('userProfile');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, profile , setProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
