import { useEffect, useState } from 'react';
import { useLocation, type Location } from 'react-router';
import Navbar from './Navbar';
import Constellation from './Constellation';

export default function ConstellationNavbarHeader() {
  const location: Location = useLocation();
  const [activeLink, setActiveLink] = useState<ConstellationHeaderLinks>('/');
  const [hoveredLink, setHoveredLink] =
    useState<ConstellationHeaderLinks | null>('/');

  useEffect(() => {
    setActiveLink(location.pathname as ConstellationHeaderLinks);
  }, [location]);

  return (
    <>
      <Navbar
        setActiveLink={setActiveLink}
        activeLink={activeLink}
        setHoveredLink={setHoveredLink}
      />
      <Constellation activeLink={activeLink} hoveredLink={hoveredLink} />
    </>
  );
}
