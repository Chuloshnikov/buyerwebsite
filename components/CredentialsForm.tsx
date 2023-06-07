import Image from "next/image";
import img from "../assets/icons/registerImg/1.gif";


interface Props{
  children: ReactElement,
}

const CredentialsForm = ({children}: Props) => {

  return (
    <div className='flex py-10'>
      <div className='m-auto bg-white rounded-md flex'>
        <div className='shadow-bannerShadow xs:hidden mdl:block'>
          <div className='w-[300px] h-[400px]'>
            <Image src={img} className="w-[300px] h-[400px] opacity-80"/>
          </div>
        </div>
        <div className='text-center py-10 w-[300px] h-[400px] shadow-bannerShadow'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CredentialsForm;