import { useState, useEffect } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  // eslint-disable-next-line no-shadow
  const onError = error => {
    setError(error.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    // eslint-disable-next-line consistent-return
    return () => geo.clearWatch(watcher);
  }, []);
  return { ...position, error };
};

export default usePosition;
