"use client";
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';



export const WidgetGrid = () => {


    const isCart = useAppSelector(state => state.counter.count);


    return (
        <div className="flex flex-wrap p-2">

            <SimpleWidget
                subTitle="Counter"
                title={isCart.toString()}
                label="Counter"
                icon={<IoCartOutline size={70} className="text-blue-600" />}
                href="/dashboard/counter"
            />

        </div>
    )
}
