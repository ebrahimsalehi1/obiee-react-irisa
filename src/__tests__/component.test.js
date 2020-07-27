
import React from 'react';
import {mount} from '../../enzyme.config';
// import {PureComp} from './MyComp.js';


describe('all test ',()=>{

    const PureComp  = ()=>(
        <div>
        <button onClick={()=>{}}>click me please</button>
        </div>
    )

    it('test 1',()=>{
        const foundComponent = mount(<PureComp />);
        expect(foundComponent.find("button").length).toBe(1);        
    });

    // it('test 2',()=>{
    //     const foundComponent = mount(pureComp);
    //     foundComponent.find("button").simulate('click');
    //     expect(foundComponent.find("input").length).toBe(1);        
    // });

})
