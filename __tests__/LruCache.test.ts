import LRUCache from "../src/LRUCache"


describe(' 要素をMapのように追加でき、対応する値を取得できる', () => {
    test('要素にないものを取得するとnullが返ってくる', () => {
        // 前準備
        const lru = new LRUCache();
        // 実行&検証
        expect(lru.get("a")).toEqual(null);
    })
})