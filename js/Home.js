import React from 'react';
import ExampleWork from './example-work';

const myWork =[
  {
    'title':'Work Example',
    'href':'http://example.com',
    'desc':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image':{
      'desc':"example screenshot of a project involving code",
      'src':'images/example1.png'
    }
  },
  {
    'title':'Work Test',
    'href':'http://example.com',
    'desc':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image':{
      'desc':"example screenshot of a project involving chemistry",
      'src':'images/example2.png'
    }
  },
  {
    'title':'Work Example2',
    'href':'http://example.com',
    'desc':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image':{
      'desc':"example screenshot of a project involving cats",
      'src':'images/example3.png'
    }
  }
]


const Home = () => (
  <ExampleWork work={myWork}/>
);



export default Home;
