import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm bg-black/80 backdrop-blur-sm border-t border-gray-700">
      © {new Date().getFullYear()} Md Najib Ul Azam Mahi. All rights reserved.
    </footer>
  );
}
