import { GDRIVE } from "../../constants_urls/urls";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

const Header = ({ dataFiles }) => {
  const navigate = useNavigate();

  // Theme management
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Profile icon events
  const [photoURL, setPhotoURL] = useState("");
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const openProfile = Boolean(anchorElProfile);

  useEffect(() => {
    const storedPhotoURL = localStorage.getItem("photoURL");
    if (storedPhotoURL) {
      try {
        const parsedURL = JSON.parse(storedPhotoURL);
        console.log("Parsed photo URL:", parsedURL); // Debugging log
        setPhotoURL(parsedURL);
      } catch (error) {
        console.error("Failed to parse photo URL:", error);
      }
    }
  }, []);

  const handleClickProfile = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("photoURL");
    navigate("/");
  };

  return (
    <div>
      <div className="w-full flex my-1 p-2 items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <img src={GDRIVE} className="w-[50px] h-[45px]" alt="logo" />
          <p className="text-2xl ml-2">Drive</p>
        </div>
        <div className="flex gap-4 mr-4 items-center cursor-pointer">
          <MdOutlineLightMode className="text-3xl" onClick={handleTheme} />

          <GoQuestion className="text-2xl" />
          <IoSettingsOutline className="text-2xl" />
          <div>
            <p
              onClick={handleClickProfile}
              aria-controls={openProfile ? "profile-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openProfile ? "true" : undefined}
            >
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="profile"
                  className="rounded-full w-[30px]"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop if fallback fails
                    e.target.src = "fallback-image-url"; // Provide a fallback URL or remove the image
                  }}
                />
              ) : (
                <CgProfile className="text-2xl" />
              )}
            </p>
            <Menu
              id="profile-menu"
              anchorEl={anchorElProfile}
              open={openProfile}
              onClose={handleCloseProfile}
              MenuListProps={{
                "aria-labelledby": "profile-button",
              }}
            >
              <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
              <MenuItem onClick={handleCloseProfile}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  dataFiles: PropTypes.array.isRequired,
};

export default Header;
