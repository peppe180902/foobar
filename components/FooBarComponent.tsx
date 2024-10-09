'use client'

import React, { useState } from 'react'

const FooBarComponent = () => {
    const generaFooBar = () => {
        const results = [];
        for (let i = 1; i <= 100; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
            results.push('FooBar');
          } else if (i % 3 === 0) {
            results.push('Foo');
          } else if (i % 5 === 0) {
            results.push('Bar');
          } else {
            results.push(i.toString());
          }
        }
        return results;
      };
    
      const [numbers] = useState<string[]>(generaFooBar);
    
      return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Esercizio FooBar</h1>
          <div className="space-y-1">
            {numbers.map((item, index) => (
              <div key={index} className="py-1 px-2 bg-gray-100 rounded">
                {item}
              </div>
            ))}
          </div>
        </div>
      );
    };
    
export default FooBarComponent