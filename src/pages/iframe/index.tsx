import { useEffect, useState } from 'react';
import { history } from 'umi';
export default () => {
  const [location, setLocation] = useState<any>('');
  useEffect(() => {
    setLocation(history?.location?.query?.url);
  }, [history.location.pathname]);
  return (
    <>
      <iframe src={location} id="Iframe" width="100%" height="100%" frameBorder="0"></iframe>
    </>
  );
};
