import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from '../context/sidebarContext';

const NavMenuDropdown = ({ handleLogout = () => {} }) => {
  const {
    isMenuOpen,
    showFullSidebar,
    toggleMenu,
    closeMenu,
    toggleFullSidebar,
  } = useSidebar();
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [isMenuOpen, closeMenu]);

  const handleLogoutClick = () => {
    handleLogout();
    closeMenu();
  };

  return (
    <div className="nav-menu" ref={menuRef}>
      <button
        type="button"
        className="sidebar__toggle--btn"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
        onClick={toggleMenu}
      >
        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="nav-menu__dropdown" role="menu">
          <div className="nav-menu__section">
            <p className="nav-menu__label">Layout</p>
            <button
              type="button"
              className={`nav-menu__option ${showFullSidebar ? 'nav-menu__option--active' : ''}`}
              role="menuitemcheckbox"
              aria-checked={showFullSidebar}
              onClick={toggleFullSidebar}
            >
              <span className="nav-menu__option-check" aria-hidden="true">
                {showFullSidebar ? '✓' : ''}
              </span>
              Show full sidebar
            </button>
            <button
              type="button"
              className={`nav-menu__option ${!showFullSidebar ? 'nav-menu__option--active' : ''}`}
              role="menuitemcheckbox"
              aria-checked={!showFullSidebar}
              onClick={() => {
                if (showFullSidebar) toggleFullSidebar();
              }}
            >
              <span className="nav-menu__option-check" aria-hidden="true">
                {!showFullSidebar ? '✓' : ''}
              </span>
              Menu only (dropdown)
            </button>
          </div>

          {!showFullSidebar && (
            <div className="nav-menu__section">
              <p className="nav-menu__label">Navigation</p>
              <Link className="nav-menu__link" to="/foryou" onClick={closeMenu} role="menuitem">
                For you
              </Link>
              <Link className="nav-menu__link" to="/library" onClick={closeMenu} role="menuitem">
                My Library
              </Link>
              <span className="nav-menu__link nav-menu__link--disabled" role="menuitem">
                Highlights
              </span>
              <Link className="nav-menu__link" to="/settings" onClick={closeMenu} role="menuitem">
                Settings
              </Link>
              <span className="nav-menu__link nav-menu__link--disabled" role="menuitem">
                Help &amp; Support
              </span>
              <button
                type="button"
                className="nav-menu__link nav-menu__link--button"
                onClick={handleLogoutClick}
                role="menuitem"
              >
                Logout
              </button>
            </div>
          )}

          {showFullSidebar && (
            <p className="nav-menu__hint">
              The full sidebar is visible on the left. Turn it off to navigate from this menu instead.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default NavMenuDropdown;
