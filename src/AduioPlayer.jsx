import React, { useRef, useState } from 'react';

export default function AduioPlayer(props) {
  const { data } = props;
  const [curIndex, setCurIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  return (
    <div>
      <audio ref={audioRef}>
        <source src={data.src} />
      </audio>
    </div>
  );
}
