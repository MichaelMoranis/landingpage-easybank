import { FcAbout } from "react-icons/fc";
import { MdContacts } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";


type SidebarProps = {
  onClose: () => void;
  sidebarOpen: boolean;
};

export default function Sidebar({ onClose, sidebarOpen }: SidebarProps) {
  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 h-full bg-zinc-900 w-64 transform transition-transform duration-500 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-8 p-4 text-zinc-100">
          <li className="flex items-center gap-2 font-bold text-2xl hover:text-emerald-400">
            <FcAbout /> About
          </li>
          <li className="flex items-center gap-2 font-bold text-2xl hover:text-emerald-400">
            <MdContacts /> Contact
          </li>
          <li className="flex items-center gap-2 font-bold text-2xl hover:text-emerald-400">
            <FaBlog /> Blog
          </li>
          <li className="flex items-center gap-2 font-bold text-2xl hover:text-emerald-400">
            <FaAddressCard /> Careers
          </li>
        </ul>
      </div>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30"
          onClick={onClose}
        />
      )}
    </div>
  );
}

