let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
//console.log(secretMessage.length);
secretMessage.push('to', 'Program');
secretMessage[7] = 'right'
secretMessage.shift();
secretMessage.unshift('Programming')
const start = 6;
const deleteCount = 5;
const removedItems = secretMessage.splice(start, deleteCount, 'know');


console.log(secretMessage.join(' '));
