interface DestObj {
	[name: string]: string
}
declare class Reged<M> {
	exp: M
	req: (id: string) => any
	pack: (...dests: (string | DestObj)[]) => Reged<M>
	merge: (...ids: string[]) => Reged<M>
}
/**
 * Jexpt - JS Export Tool
 * @version 1.2.4
 * @link https://github.com/E0SelmY4V/jexpt
 */
declare function exp<M>(exp: M, req: { (id: string): any, cache: {} }): Reged<M>
declare function exp<M>(exp: M, ...mods: any[]): M
export = exp