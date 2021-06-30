'use strict';
let hashmapRepeatedWord = require('../hashmap-repeated-word');


describe(' Testing hashmapTreeIntersection', () => {

  let paragraph1 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

  let paragraph2 = 'Once upon a time, there was a brave princess who...'	;
  let paragraph3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

  it('should successfully return the first repeated word in string', () => {
    //action
    let result1 = hashmapRepeatedWord(paragraph1);
    let result2 = hashmapRepeatedWord(paragraph2);
    let result3 = hashmapRepeatedWord(paragraph3);


    expect(result1).toEqual('it');
    expect(result2).toEqual('a');
    expect(result3).toEqual('summer');
  });

  it('should return an exception object when string is empty', () => {

    //action
    let result1 = hashmapRepeatedWord('');
    let result2 = hashmapRepeatedWord(' ');
    let result3 = hashmapRepeatedWord('    ');


    expect(result1).toEqual({ Warrning: 'Empty String' });
    expect(result2).toEqual({ Warrning: 'Empty String' });
    expect(result3).toEqual({ Warrning: 'Empty String' });

  });

  it('should return an exception object when string has no repeation', () => {

    //action
    let result = hashmapRepeatedWord('hello world!');

    expect(result).toEqual({ Warrning: 'No repeation' });
  });

});
