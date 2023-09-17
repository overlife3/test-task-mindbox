import React, { FC } from "react";

type Props = {
  name: string;
};

const SvgSelector: FC<Props> = ({ name }) => {
  switch (name) {
    case "arrow":
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 129 129"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          enable-background="new 0 0 129 129"
        >
          <g>
            <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
          </g>
        </svg>
      );
    case "ok":
      return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 24 24"
          enable-background="new 0 0 24 24"
          xmlSpace="preserve"
        >
          <path d="M19.3,5.3L9,15.6l-4.3-4.3l-1.4,1.4l5,5L9,18.4l0.7-0.7l11-11L19.3,5.3z" />
        </svg>
      );
    case "cross":
      return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g id="cross">
            <line x1="7" x2="25" y1="7" y2="25" />
            <line x1="7" x2="25" y1="25" y2="7" />
          </g>
        </svg>
      );
    default:
      return null;
  }
};

export default SvgSelector;
