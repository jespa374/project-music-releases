import React from 'react';
import Image from 'Image';
import Artist from 'Artist';
import Album from 'Album';
import data from './data.json';

const Release = () => {
  return (
    <article className="release">
      <Image />
      <Album />
      <Artist />
    </article>
  )
};

export default Release;