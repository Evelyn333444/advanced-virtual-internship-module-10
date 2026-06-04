import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const STORAGE_KEY = 'summarist-show-full-sidebar';

const SidebarContext = createContext(null);

function readSidebarPreference() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      if (window.matchMedia('(min-width: 992px)').matches) {
        return true;
      }
      return stored === 'true';
    }
  } catch {
    /* ignore */
  }
  return window.matchMedia('(min-width: 992px)').matches;
}

export function SidebarProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFullSidebar, setShowFullSidebar] = useState(readSidebarPreference);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle('layout--full-sidebar', showFullSidebar);
    return () => document.body.classList.remove('layout--full-sidebar');
  }, [showFullSidebar]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 991px)');
    const handleResize = (event) => {
      if (event.matches) {
        setShowFullSidebar(false);
      }
    };

    if (mediaQuery.matches) {
      setShowFullSidebar(false);
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleResize);
    } else {
      mediaQuery.addListener(handleResize);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleResize);
      } else {
        mediaQuery.removeListener(handleResize);
      }
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 992px)');
    const handleDesktopResize = (event) => {
      if (event.matches) {
        setShowFullSidebar(true);
      }
    };

    if (desktopQuery.matches) {
      setShowFullSidebar(true);
    }

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', handleDesktopResize);
    } else {
      desktopQuery.addListener(handleDesktopResize);
    }

    return () => {
      if (desktopQuery.removeEventListener) {
        desktopQuery.removeEventListener('change', handleDesktopResize);
      } else {
        desktopQuery.removeListener(handleDesktopResize);
      }
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(showFullSidebar));
    } catch {
      /* ignore */
    }
  }, [showFullSidebar]);

  const toggleMenu = useCallback(() => setIsMenuOpen((open) => !open), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const toggleFullSidebar = useCallback(() => {
    setShowFullSidebar((on) => !on);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isMenuOpen,
        showFullSidebar,
        toggleMenu,
        closeMenu,
        toggleFullSidebar,
        setShowFullSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}
