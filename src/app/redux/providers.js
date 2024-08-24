"use client"

import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path to your store file

export const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
