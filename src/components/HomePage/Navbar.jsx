import { useState } from "react";
import { GDRIVE, GOOGLE_LOGO } from "../../constants_urls/urls";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const openModal = () => setModalOpen(true);
  const handelClose = () => setModalOpen(false);
  const closeEmailModal = () => setEmailModal(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      let userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential?.user);
      localStorage.setItem(
        "photoURL",
        JSON.stringify(userCredential?.user?.photoURL)
      );
      setPhotoURL(userCredential?.user?.photoURL);
      navigate("/drive");
    } catch (err) {
      toast.error("Google Sign-In failed!");
      console.log(err);
    }
  };

  const sigupWIthEmailAndPass = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("Sign-Up successful!");
      setEmailModal(true);
      setEmail("");
      setPassword("");
    } catch (err) {
      toast.error("Sign-Up failed!");
      console.log(err);
    }
  };

  const sigInWIthEmailAndPass = async () => {
    try {
      const newUser = await signInWithEmailAndPassword(auth, email, password);
      setUser(newUser);
      // toast.success("Sign-In successful!");
      navigate("/drive");
    } catch (err) {
      toast.error("Incorrect email or password!");
      console.log(err);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Modal
        open={modalOpen}
        onClose={handelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-[550px] bg-white shadow-lg p-4 rounded-xl ">
          <div className="flex flex-col justify-center items-center gap-5 my-2">
            <img src={GOOGLE_LOGO} alt="logo" className="w-[100px]" />
            <div className="text-center">
              <p className="text-xl font-semibold">Sign in</p>
              <p>to continue to Google Drive</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="">Email:</label>
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 p-2 w-[300px] my-2 focus:outline-none focus:ring-0"
                  placeholder="johnWick@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="">PassWord : </label>
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 p-2 w-[300px] my-2 focus:outline-none focus:ring-0"
                  placeholder="********"
                />
              </div>
              <div className="m-auto">
                <button
                  onClick={sigupWIthEmailAndPass}
                  className="bg-[#1B73E9] p-2 text-[#fff] rounded-lg w-[300px]"
                >
                  Sign Up
                </button>
              </div>
              <p className="text-center">
                Already have an Account?{" "}
                <button
                  className="text-[#1B73E9]"
                  onClick={() => setEmailModal(true)}
                >
                  Sign in
                </button>
              </p>
              <p className="text-center">OR</p>
            </div>
            <button
              onClick={handleSignIn}
              className="bg-[#1B73E9] p-2 text-[#fff] rounded-lg w-[300px]  "
            >
              Sign in With Google
            </button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={emailModal}
        onClose={closeEmailModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-[550px] bg-white shadow-lg p-4 rounded-xl">
          <div className="flex flex-col justify-center items-center gap-5 my-2">
            <img src={GOOGLE_LOGO} alt="" className="w-[100px]" />
            <div className="text-center">
              <p className="text-xl font-semibold">Sign in</p>
              <p>to continue to Google Drive</p>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="">Email : </label>
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-2 p-2 w-[300px] my-2 focus:outline-none focus:ring-0"
                  placeholder="johnWick4@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="">Password : </label>
                <br />
                <input
                  type="password"
                  name="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 p-2 w-[300px] my-2 focus:outline-none focus:ring-0"
                  placeholder="********"
                />
              </div>
              <div className="m-auto">
                <button
                  onClick={sigInWIthEmailAndPass}
                  className="bg-[#1B73E9] p-2 text-[#fff] rounded-lg w-[300px]"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <div className="flex justify-between p-2 sm:justify-between">
        <div className="flex items-center">
          <img
            src={GDRIVE}
            alt="drivelogo"
            className="lg:h-[45px] lg:w-[50px] sm:h-[30px] sm:w-[40px]"
          />
          <p className="sm:flex lg:gap-2">
            <span className="lg:font-bold lg:text-2xl sm:text-xl">Google</span>
            <span className="lg:text-2xl sm:text-xl">Drive</span>
          </p>
        </div>
        <div className="flex gap-5">
          <button
            onClick={openModal}
            className="text-[#1A73E8] p-2 font-semibold text-[18px] hover:bg-[#F5F5F5]"
          >
            Sign in
          </button>
          <button className="p-2 font-semibold bg-[#1A73E8] text-[#fff] border border-[#1A73E8] rounded w-[120px] sm:hidden md:block hover:bg-[#fff] hover:text-[#1A73E8] hover:border-[#1A73E8] transition duration-2000">
            Go to Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
