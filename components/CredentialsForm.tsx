import styles from '../styles/CredentialsForm.module.css';


const CredentialsForm = ({children}) => {
  return (
  
        <div className='flex py-10'>
            <div className='m-auto bg-white rounded-md flex'>
                <div className='shadow-bannerShadow'>
                    <div className='w-[300px] h-[400px]'>
                        Images
                    </div>
                </div>
                <div className='text-center py-10 w-[300px] h-[400px] shadow-bannerShadow'>
                    {children}
                </div>
            </div>
        </div>
  )
}

export default CredentialsForm;