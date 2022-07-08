import LRUCache from "../src/LRUCache"


describe(' 要素をMapのように追加でき、対応する値を取得できる', () => {
    let lru: LRUCache;
    beforeEach(() => {
        lru = new LRUCache();
    })
    test('名前"a"に対応する値"dataA"、名前"b"に対応する値"dataB"を追加し、名前に"a"を指定して値を取得するとその値は"dataA"', () => {
        // 要素を追加
        lru.put("a", "dataA");
        lru.put("b", "dataB")
        // 要素を取得&検証
        expect(lru.get("a")).toEqual("dataA");
    })
    test('名前"a"に対応する値"dataA"、名前"b"に対応する値"dataB"を追加し、名前に"c"を指定して値を取得するとその値はnull', () => {
        // 要素を追加
        lru.put("a", "dataA");
        lru.put("b", "dataB")
        // 要素を取得&検証
        expect(lru.get("c")).toEqual(null);
    })
})