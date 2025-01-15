import React from 'react';
import { WidgetGrid } from '@/components/dashboard/WidgetGrid';



export const metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
};

const Main = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <WidgetGrid />

    </div>
  );
}

export default Main;
