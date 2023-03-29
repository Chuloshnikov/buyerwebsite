import Image from 'next/image';
import logo from "../assets/images/logo.png" ;

const Navbar = () => {
  return (
        <div className='w-full bg-white text-black'>
           <div className='max-w-container mx-auto flex justify-between items-center border-b-[1px] border-b-gray-300'>
              <div className='flex items-center gap-3 text-3xl text-[#F77628] py-2'>
                <Image className='w-10 h-10 rounded-full border-[3px] border-[#F77628]' src={logo} alt="logo"/>
                <p>Buyer Anastasia</p>
              </div>
              <div className='py-2'>
                <p>Sign in</p>
              </div>
           </div>
        </div>
  )
}

export default Navbar;