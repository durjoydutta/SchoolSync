import Link from "next/link";
import Image from "next/image"
import { Menu } from "lucide-react" // burger menu icon

const Navbar = () => {
  return (
      <div className='w-full flex items-center justify-end gap-4 md:gap-6 py-4'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col items-end'>
          <span className="text-xs leading-3 font-medium">DDC</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
        <Menu/>
      </div>
  )
}

export default Navbar