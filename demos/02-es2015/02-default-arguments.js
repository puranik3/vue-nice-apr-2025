// undefined

function greet(greeting, name = 'World') {
    console.log(greeting + ' ' + name + '!');
}

greet('Good morning', 'John');
greet('Good morning');