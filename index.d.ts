interface DestObj {
	[name: string]: string
}
interface InitedReged<M> extends InitlessReged<M> {
	exp: M
	req: (id: string) => any
	pack: (...dests: (string | DestObj)[]) => InitedReged<M>
	merge: (...ids: string[]) => InitedReged<M>
}
declare function exp<M>(exp: M, req: { (id: any): any, cache: {} }): InitedReged<M>
declare function exp<M>(exp: M, ...mods: any[]): void
export = exp