import React from "react";
import { motion } from "framer-motion";
import Modal from "../Hooks/Modal";
export default function Home() {
  const [selectedId, setSelectedId] = React.useState(false);
  const [selectedId2, setSelectedId2] = React.useState(false);
  const constraintsRef = React.useRef(null);
  const animation = {
    animation_1: {
      x: 100,
      scale: 1.1,
    },
  };
  return (
    <div>
      <motion.div
        className=" grid grid-cols-1 my-36"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className=" col-span-1 justify-center flex">
          <div
            onClick={() => {
              setSelectedId((pervValue) => {
                return true;
              });
            }}
            className=" h-32 bg-slate-700 w-48"
          ></div>
        </div>
      </motion.div>
      <Modal isToggled={selectedId} setToggle={setSelectedId}>
        <motion.div>tes</motion.div>
      </Modal>

      <motion.div
        className=" w-60 h-60 bg-slate-800"
        animate={{
          opacity: selectedId2 ? 1 : 0.5,
          x: selectedId2 ? 700 : 0,
          rotate: selectedId2 ? 360 : 0,
        }}
        initial={{ opacity: 0.5 }}
        transition={{ type: "spring", stiffness: 70 }}
        onClick={() => setSelectedId2((prevValue) => !prevValue)}
      ></motion.div>

      <br />
      <br />
      <motion.div className=" w-60 h-60 bg-slate-800" ref={constraintsRef}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className=" bg-slate-500 w-10 h-10"
        />
      </motion.div>

      <br />
      <br />

      <motion.div
        className=" w-60 h-60 bg-slate-800"
        variants={animation}
        animate="animation_1"
        transition={{ duration: 5 }}
      ></motion.div>
    </div>
  );
}
