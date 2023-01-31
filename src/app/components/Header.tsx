import React, { Fragment, useState, useRef, useEffect } from "react";
import Icon from "./Icon";
import Link from "next/link";
// import { Menu } from '@headlessui/react'
// import { Dropdown } from "@nextui-org/react";
import { Menu, Transition } from "@headlessui/react";
// import { Fragment, useEffect, useRef, useState } from 'react'
let dropdown = false;
function toggle() {
  dropdown = !dropdown;
}

const navLinks = [
  {
    name: "自分の記録",
    path: "javascript:void(0)",
    icon: "edit",
  },
  {
    name: "チャレンジ",
    path: "javascript:void(0)",
    icon: "award",
  },
  {
    name: "お知らせ",
    path: "javascript:void(0)",
    icon: "exclamationQuote",
  }, 
];

const dropdownLinks = [
  {
    name: "自分の記録",
    path: "javascript:void(0)",
  },
  {
    name: "体重グラフ",
    path: "javascript:void(0)",
  },
  {
    name: "目標",
    path: "javascript:void(0)",
  },
  {
    name: "選択中のコース",
    path: "javascript:void(0)",
  },
  {
    name: "コラム一覧",
    path: "javascript:void(0)",
  },
  {
    name: "設定",
    path: "javascript:void(0)",
  },
];

export default function Header() {
  return (
    <header className="bg-dark-500 py-3">
      {/* header */}
      <div className="max-w-screen-lg px-3 lg:px-6 mx-auto ">
        {/* logo */}
        <div className="flex justify-between items-center">
          <div className="flex">
            <Link href="javascript:void(0)">
              <span className="flex">
                <Icon name="healthy" className="h-7 sm:h-10 text-primary-400" />
              </span>
            </Link>
          </div>
          {/* nav */}
          <ul className="flex items-center gap-5 md:gap-10 flex-1 justify-end">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-white text-sm md:text-base hover:text-primary-400 font-medium ease-in-out duration-300 flex gap-2"
                  >
                    <Icon name={link.icon} className="md:w-6 w-5 text-primary-400" />
                    <span className="hidden sm:inline">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="ml-5 md:ml-12">
            <Menu as="div" className="relative">
              
              <Menu.Button className={`flex items-center justify-center`}>
                  {({ open }) => (
                    <span className={`${open ? 'bg-dark-600': ''} border border-transparent p-2 h-10 text-primary-400 ease-in-out duration-300 hover:bg-dark flex items-center justify-center`}>
                    <Icon name={`${open ? 'cross': 'bars'}`} className="w-5 " />
                    </span>
                  )}            
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  as="div"
                  className="bg-dark-400 rounded-none absolute top-full right-0 w-60 z-40 "
                >
                  <ul>
                    {dropdownLinks.map((link, index) => {
                      return (
                        <Menu.Item as="li" key={index}>
                          {({ active }) => (
                            <Link
                              href={link.path}
                              className={`${
                                active && "bg-dark/10"
                              } bg-dark-400 rounded-none border-y border-t-white/20 border-b-dark-500/20 hover:bg-dark-500/20 pl-10 p-5 block h-auto font-semibold text-white`}
                            >
                              {link.name}
                            </Link>
                          )}
                        </Menu.Item>
                      );
                    })}
                  </ul>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}
