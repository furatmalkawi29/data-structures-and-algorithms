'use strict';

let multiBracketValidation = require('../multi-bracket-validation.js');


describe('', ()=>{

  it ('It should return true when input has balanced brackets', ()=>{

    let input1 = '{}(){}';
    let input2 = '()[[Extra Characters]]';
    let input3 = '(){}[[]]';
    let input4 = '{}{Code}[Fellows](())';

    expect(multiBracketValidation(input1)).toBeTruthy();
    expect(multiBracketValidation(input2)).toBeTruthy();
    expect(multiBracketValidation(input3)).toBeTruthy();
    expect(multiBracketValidation(input4)).toBeTruthy();

  });

  it ('It should return false when input has unbalanced brackets', ()=>{

    let input1 = '[({}]';
    let input2 = '(](';
    let input3 = '{(})';

    expect(multiBracketValidation(input1)).toBeFalsy();
    expect(multiBracketValidation(input2)).toBeFalsy();
    expect(multiBracketValidation(input3)).toBeFalsy();

  });

  it ('It should return exception messege when input is empty', ()=>{

    let input1 = '';

    expect(multiBracketValidation(input1)).toBe('Error:: Empty Input');


  });


});
