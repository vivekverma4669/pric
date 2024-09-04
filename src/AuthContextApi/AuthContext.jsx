"use client";

import Cookies from 'js-cookie';
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get('token'));

  const formatUserData = (user) => {
    return {
      id: user.id,
      uid: user.uid,
      first_name: user.first_name,
      last_name: user.last_name,
      dob: user.dob,
      gender: user.gender,
      marital_status: user.marital_status,
      address: user.address || "Dumdum",
      pincode: user.pincode,
      city: user.city,
      email: user.email,
      full_name: user.full_name,
    };
  };

  const login = (userData) => {
    Cookies.set('token', userData.token);
    Cookies.set('uid', userData.uid);
    setIsAuthenticated(true);
   
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('uid');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, formatUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
