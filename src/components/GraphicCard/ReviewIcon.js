import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceAngry,
  faFaceFrown,
  faFaceMeh,
  faFaceSmile,
  faFaceLaughBeam,
} from "@fortawesome/free-solid-svg-icons";

const ReviewIcon = (props) => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faFaceAngry}
        size="xl"
        style={{
          color: activeIcon === faFaceAngry ? "#007bff" : "#6c757d",
          cursor: "pointer",
        }}
        onClick={() => handleClick(faFaceAngry)}
      />
      <FontAwesomeIcon
        icon={faFaceFrown}
        size="xl"
        style={{
          color: activeIcon === faFaceFrown ? "#007bff" : "#6c757d",
          cursor: "pointer",
        }}
        onClick={() => handleClick(faFaceFrown)}
      />
      <FontAwesomeIcon
        icon={faFaceMeh}
        size="xl"
        style={{
          color: activeIcon === faFaceMeh ? "#007bff" : "#6c757d",
          cursor: "pointer",
        }}
        onClick={() => handleClick(faFaceMeh)}
      />
      <FontAwesomeIcon
        icon={faFaceSmile}
        size="xl"
        style={{
          color: activeIcon === faFaceSmile ? "#007bff" : "#6c757d",
          cursor: "pointer",
        }}
        onClick={() => handleClick(faFaceSmile)}
      />
      <FontAwesomeIcon
        icon={faFaceLaughBeam}
        size="xl"
        style={{
          color: activeIcon === faFaceLaughBeam ? "#007bff" : "#6c757d",
          cursor: "pointer",
        }}
        onClick={() => handleClick(faFaceLaughBeam)}
      />
    </>
  );
};

export default ReviewIcon;
