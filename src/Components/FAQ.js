import React, {useState} from 'react';
import { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    const data = [
        {
            question:'What is up',
            answer:'Nothing much',
            
        },
        {
            question:'What is up',
            answer:'Nothing much',
            
        },
        {
            question:'What is up',
            answer:'Nothing much',
            
        },
        {
            question:'What is up',
            answer:'Nothing much',
            
        }
    ]

    return (
        <div className = 'wrapper'>
            <div className = 'accordion'>
                {data.map((item, i) => (
                    <div className = 'item'>
                        <div className = 'title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{selected === i ? '-' : '+'}</span>    
                        </div>
                        <div className ={selected === i ? 'content-show' : 'content'}>{item.answer}</div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default FAQ
