import {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const scrollOptions: ScrollIntoViewOptions = {behavior: 'smooth', block: 'start'};
        document.getElementById(lastHash.current)?.scrollIntoView(scrollOptions);
        lastHash.current = '';
      }, 0);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
