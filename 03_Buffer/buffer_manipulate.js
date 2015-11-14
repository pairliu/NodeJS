var buffer1 = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var buffer2 = new Buffer('hello', 'utf-8');   // Both 'utf8' and 'utf-8' work. And the default is utf-8

console.log('1: ' + buffer1.toString());
console.log('2: ' + buffer2.toString());

buffer1[1] = 0x61;                // Can directly change the value on one index
console.log('3: ' + buffer1.toString());             

var buffer3 = buffer1.slice(2);   
buffer3[1] = 0x66;
console.log('4: ' + buffer1.toString());  // slice() returns only the pointer. So change the new one will affect original one.

var buffer4 = new Buffer(buffer1.length);
buffer1.copy(buffer4);     // A little anti-intuition. src.copy(dest);
console.log('5: ' + buffer4.toString());  // This is how to copy.
