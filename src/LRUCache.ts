export interface ICache{
    name: string;
    val: any;
}

export default class LRUCache{
    private caches: ICache[] = [];
    private maxSize: number;
    
    /**
     * 
     * @param {number} maxSize 
     */
    constructor(maxSize: number){
        this.maxSize = maxSize
    }
    /**
     * 要素を追加する
     * @param {string} name 
     * @param {any} val 
     */
    public put(name: string, val: any){
        const cache = {name: name, val: val};
        if(this.caches.length == this.maxSize){
            // 最大サイズのとき、先頭を削除する
            this.caches.splice(0, 1);
        }
        // 要素を追加
        this.caches.push(cache);
    }

    /**
     * 指定した名前に対応する値を取得する
     * @param {string} name 
     * @return 
     */
    public get(name: string){
        let val = null;
        for (let i = 0; i < this.caches.length; i++){
            if(this.caches[i].name == name){
                val = this.caches[i].val;
                return val;
            }
        }
        return val;
    }
}