import LRUCache from "../src/LRUCache"


describe(' 要素をMapのように追加でき、対応する値を取得できる', () => {
    let lru: LRUCache;
    beforeEach(() => {
        lru = new LRUCache();
    })
    test('要素にないものを取得するとnullが返ってくる', () => {
        // 実行&検証
        expect(lru.get("a")).toEqual(null);
    })
    test('名前"a"に対応する値"dataA"を追加しでき、名前に"a"を指定して値を取得するとその値は"dataA"', () => {
        // 要素を追加
        lru.put("a", "dataA");
        
        // 要素を取得&検証
        expect(lru.get("a")).toEqual("dataA");
    })
})