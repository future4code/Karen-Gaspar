import { useEffect } from 'react'
import { useHistory } from 'react-router';
import { goToFeedPage } from '../routes/coordinator';

export const useUnprotectedPage = () =>{
  const history = useHistory()

  useEffect(()=>{
    const token = localStorage.getItem('token');

    if(token) {
      goToFeedPage(history)
    }
  }, [history])
}