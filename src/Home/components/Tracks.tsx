import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { getSpotify } from '../../services/spotify.services';

const Tracks = () => {
  const [type, setType] = useState('');

  useEffect(() => {
    setType('podcasts');
  }, []);

  const fetcher = () => getSpotify(type);

  const { data: spotify } = useSWR(`/search/?q=test&type=${type}&offset=0&limit=10&numberOfTopResults=5`, fetcher);

  console.log(spotify);

  return <></>;
};

export default Tracks;
