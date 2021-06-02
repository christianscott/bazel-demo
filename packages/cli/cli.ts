import {Lexer} from '@packages/lexer';
import {Parser} from '@packages/parser';
import {Interpreter} from '@packages/interpreter';

const program = `
foo = 43;
print foo;
`;
const lexer = new Lexer(program);
const parser = new Parser(lexer.lex());
const interpreter = new Interpreter(parser.parseProgram());
interpreter.interpret();
