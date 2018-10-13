import React from 'react';
import {shallow} from 'enzyme';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';

import Enzyme from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new adapter()});

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
  }

];

describe("Examplework component",  ()=>{
  let component=shallow(<ExampleWork work={myWork}/>);

  it("Should be a section element",()=>{
    console.log(component.debug());
  });

  it("Should contain as many children as there are work examples",()=>{
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

  it("Should allow the modal to open and close",()=>{
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });

});

describe("ExampleWorkBubble Component",()=>{
  
    let component=shallow(<ExampleWorkBubble example={myWork[1]}/>);
    let images=component.find("img");

    it("Should contain a single img element",()=>{
      expect(images.length).toEqual(1);
    });

    it("Should have the image src set correctly", ()=>{
    expect(images.prop('src')).toEqual(myWork[1].image.src);
    });


});
