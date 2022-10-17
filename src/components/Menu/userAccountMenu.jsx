import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// MUI
import { Logout } from "@mui/icons-material";
import { logoutUser } from "../../store/auth-slice";
import { ref } from "firebase/storage";

const Aside = styled.aside`
  position: absolute;
  top: var(--header-height);
  right: 0;
  color: white;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgLighter};
  z-index: 1000;
`;

const MenuItems = styled.ul``;

const MenuItem = styled.li`
  display: flex;
  gap: 0.5rem;
  color: var(--color-error);
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #c20000;
  }
`;

const userAccountMenu = ({ onClose, iconRef }) => {
  const dispatch = useDispatch();
  const asideRef = useRef(null);

  const onLogoutClickHandler = () => {
    onClose();
    dispatch(logoutUser());
  };

  useEffect(() => {
    const onDocumentClickHandler = e => {
      if (asideRef.current && !asideRef.current.contains(e.target) && !iconRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("click", onDocumentClickHandler, true);

    return () => {
      document.removeEventListener("click", onDocumentClickHandler, true);
    };
  }, []);

  return (
    <Aside ref={asideRef}>
      <MenuItems>
        <MenuItem onClick={onLogoutClickHandler}>
          <Logout />
          Logout
        </MenuItem>
      </MenuItems>
    </Aside>
  );
};
export default userAccountMenu;
