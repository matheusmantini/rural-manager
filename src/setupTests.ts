import "@testing-library/jest-dom";
import "jest-styled-components";
import { TextEncoder, TextDecoder as NodeTextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = NodeTextDecoder as unknown as typeof TextDecoder;