import { ReactNode } from 'react';

import { Sidebar } from '@/components';


interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

        <div className="flex">


            <Sidebar />

            <div className="w-full text-slate-900 max-h-screen overflow-y-scroll">
                { children }
            </div>

        </div>
      </div>
    );
};

export default DashboardLayout;
