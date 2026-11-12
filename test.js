import test from 'ava';
import escapeStringRegexp, {escapeStringRegexp as namedEscapeStringRegexp} from './index.js';

test('main', t => {
	t.is(
		escapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ]'),
		'\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]',
	);
});

test('escapes `-` in a way compatible with PCRE', t => {
	t.is(
		escapeStringRegexp('foo - bar'),
		'foo \\x2d bar',
	);
});

test('escapes `-` in a way compatible with the Unicode flag', t => {
	t.regex(
		'-',
		new RegExp(escapeStringRegexp('-'), 'u'),
	);
});

test('named export is the same function as the default export', t => {
	t.is(namedEscapeStringRegexp, escapeStringRegexp);
});

test('named export behaves identically to the default export', t => {
	t.is(
		namedEscapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ] -'),
		escapeStringRegexp('\\ ^ $ * + ? . ( ) | { } [ ] -'),
	);
	t.is(namedEscapeStringRegexp('foo - bar'), 'foo \\x2d bar');
});
