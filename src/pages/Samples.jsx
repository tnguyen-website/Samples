import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Sample } from '../components/samples';

const data = [
  {
    name: 'Cat World',
    stack: ['React', 'React Router Dom', 'Material-ui'],
    description:
      'Cat World is a website with information & articles on all things related to cats.',
    thumbnail: 'https://cdn2.thecatapi.com/images/MTY1ODc5MA.png',
    url: 'https://tannguyen.xyz/pets/'
  }
];

const Samples = () => {
  return (
    <Grid container justify="center">
      {data.map((item, index) => (
        <Sample key={index} {...item} />
      ))}
    </Grid>
  );
};

export default Samples;
