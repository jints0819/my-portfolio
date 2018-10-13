import React from 'react';
import {shallow} from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new adapter()});

const myExample ={
    'title':'Work Example',
    'href':'http://example.com',
    'desc':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image':{
      'desc':"example screenshot of a project involving code",
      'src':'images/example1.png'
    }
  }
;


describe("ExampleWorkMoal Component",()=>{
  let component=shallow(<ExampleWorkModal example={myExample} open={false}/>);
  let openComponent=shallow(<ExampleWorkModal example={myExample} open={true}/>);
  let anchors=component.find("a");

  it("should contain a single 'a' element",()=>{
    expect(anchors.length).toEqual(1);
  });

  it("should link to correct project",()=>{
    expect(anchors.prop('href')).toEqual(myExample.href);
  });

  it("should have the modal class set correctly",()=>{
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  });

});
