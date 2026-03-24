/**
 * Ambient type declarations for optional external modules.
 *
 * These modules are dynamically imported at runtime and may not be installed.
 * Declaring them here prevents TS2307 errors during the root build.
 */

declare module '@noble/ed25519' {
  export function getPublicKey(privateKey: Uint8Array): Promise<Uint8Array>;
  export function sign(message: Uint8Array, privateKey: Uint8Array): Promise<Uint8Array>;
  export function verify(signature: Uint8Array, message: Uint8Array, publicKey: Uint8Array): Promise<boolean>;
  export function verifyAsync(signature: Uint8Array, message: Uint8Array, publicKey: Uint8Array): Promise<boolean>;
  export const utils: any;
}

declare module '@ruvector/learning-wasm' {
  const learning: any;
  export default learning;
  export function init(): Promise<void>;
  export function initSync(opts: { module: BufferSource }): void;
  export class LearningEngine {
    constructor(...args: any[]);
    train(...args: any[]): any;
    predict(...args: any[]): any;
  }
  export class WasmMicroLoRA {
    constructor(...args: any[]);
    [key: string]: any;
  }
  export class WasmScopedLoRA {
    constructor(...args: any[]);
    [key: string]: any;
  }
  export class WasmTrajectoryBuffer {
    constructor(...args: any[]);
    [key: string]: any;
  }
}

declare module '@ruvector/ruvllm' {
  const ruvllm: any;
  export default ruvllm;
}

declare module 'agentic-flow/embeddings' {
  export function createEmbedder(...args: any[]): any;
  export function embed(text: string): Promise<number[]>;
  export function embedBatch(texts: string[]): Promise<number[][]>;
  export function getNeuralSubstrate(...args: any[]): any;
  export function listAvailableModels(...args: any[]): any;
  export function downloadModel(...args: any[]): Promise<any>;
  export class ONNXEmbedder {
    constructor(...args: any[]);
    embed(text: string): Promise<number[]>;
    embedBatch(texts: string[]): Promise<number[][]>;
    isReady(): boolean;
  }
}
