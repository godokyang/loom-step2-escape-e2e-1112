import {expectType} from 'tsd';
import escapeStringRegexp, {escapeStringRegexp as namedEscapeStringRegexp} from './index.js';

expectType<string>(escapeStringRegexp('how much $ for a 🦄?'));
expectType<string>(namedEscapeStringRegexp('how much $ for a 🦄?'));
