export interface ICache{
    name: string;
    val: any;
}

export default class LRUCache{
    private caches: ICache[] = [];
    
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