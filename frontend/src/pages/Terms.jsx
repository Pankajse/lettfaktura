import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CustomButton from '../components/ui/CustomButton'
import './../styles/Terms.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
  const navigate = useNavigate();
  const [terms, setTerms] = useState("Loading...");
  const { language } = useLanguage();
  useEffect(() => {
    const fetchTerms = async () => {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/v1/terms/getTerms`,{
        params:{
          language
        }
      });
      setTerms(response.data);
    };

    fetchTerms();
  }
    , [language]);
  return (
    <div className='term-container'>
      {/* <Navbar /> */}
      <h3 className='terms-heading'>Terms</h3>
      <CustomButton variant="primary" text="Close and Go Back" onClick={() => { navigate('/login') }} />
      <p className='term-text'>
        {terms}
      </p>
      <CustomButton variant="primary" text="Close and Go Back" onClick={() => { navigate('/login') }} />

    </div>
  )
}

export default Terms