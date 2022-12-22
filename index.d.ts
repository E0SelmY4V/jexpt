declare function merObj(a: any, b: any): void
interface InitlessReged<M> {
	exp: M
	req: any
}
interface DestObj {
	name: string
	dest: string
}
interface InitedReged<M> extends InitlessReged<M> {
	req: (id: string) => any
	pack: (...dests: (string | DestObj)[]) => InitedReged<M>
	merge: (...ids: string[]) => InitedReged<M>
}
declare function exp<M>(exp: M, req: (id: string) => any): InitedReged<M>
declare function exp<M>(exp: M, ...mods: any[]): InitlessReged<M>
export = exp