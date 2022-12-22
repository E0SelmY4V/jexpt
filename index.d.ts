interface DestObj {
	[name: string]: string
}
declare class Reged<M> {
	exp: M
	req: (id: string) => any
	pack: (...dests: (string | DestObj)[]) => Reged<M>
	merge: (...ids: string[]) => Reged<M>
}
declare function exp<M>(exp: M, req: { (id: string): any, cache: {} }): Reged<M>
declare function exp<M>(exp: M, ...mods: any[]): void
export = exp