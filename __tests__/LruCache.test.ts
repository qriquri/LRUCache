import LRUCache from "../src/LRUCache"


describe(' 要素をMapのように追加でき、対応する値を取得できる', () => {
    let lru: LRUCache;
    beforeEach(() => {
        // 最大サイズが2のキャッシュを作成
        lru = new LRUCache(2);
    })
    test('名前"a"に対応する値"dataA"、名前"b"に対応する値"dataB"を追加し、名前に"a"を指定して値を取得するとその値は"dataA"', () => {
        // 要素を追加
        lru.put("a", "dataA");
        lru.put("b", "dataB");
        // 要素を取得&検証
        expect(lru.get("a")).toEqual("dataA");
    })
    test('名前"a"に対応する値"dataA"、名前"b"に対応する値"dataB"を追加し、名前に"c"を指定して値を取得するとその値はnull', () => {
        // 要素を追加
        lru.put("a", "dataA");
        lru.put("b", "dataB");
        // 要素を取得&検証
        expect(lru.get("c")).toEqual(null);
    })
})

describe('要素数が最大サイズに達したとき、最も使われていないデータを消して新たな要素を追加する', () => {
    let lru: LRUCache;
    beforeEach(() => {
        // 最大サイズが2のキャッシュを作成
        lru = new LRUCache(2);
    })
    test('最大サイズが2のとき、名前"a"に対応する値"dataA"、名前"b"に対応する値"dataB"を追加し、名前"c"に対応する値"dataC"を追加する。名前に"a"を指定して値を取得するとその値はnull', () => {
        // 要素を追加
        lru.put("a", "dataA");
        lru.put("b", "dataB");
        lru.put("c", "dataC");

        // 要素を取得&検証
        expect(lru.get("a")).toEqual(null);
    })
    test('最大サイズが2のとき、名前"a"に対応する値"dataA"、名前"b"に対応する値"dataB"を追加し、名前"c"に対応する値"dataC"を追加する。名前に"b"を指定して値を取得するとその値は"dataB"', () => {
        // 要素を追加
        lru.put("a", "dataA");
        lru.put("b", "dataB");
        lru.put("c", "dataC");

        // 要素を取得&検証
        expect(lru.get("b")).toEqual("dataB");
    })
})

describe('値を取得したら使われたとみなす', () => {
    let lru: LRUCache;
    beforeEach(() => {
        // 最大サイズが2のキャッシュを作成
        lru = new LRUCache(2);
    })
    test('最大サイズが2のとき、名前"a"に対応する値"dataA"、名前"b"に対応する値"dataB"を追加し、名前に"a"を指定して値を取得する。その後、名前"c"に対応する値"dataC"を追加し、名前に"b"を指定して値を取得するとその値はnull', () => {
        // 要素を追加
        lru.put("a", "dataA");
        lru.put("b", "dataB");
        // 要素名"a"の値を取得
        lru.get("a")
        // 要素追加
        lru.put("c", "dataC");

        // 要素を取得&検証
        expect(lru.get("b")).toEqual(null);
    })

    test('最大サイズが2のとき、名前"a"に対応する値"dataA"、名前"b"に対応する値"dataB"を追加し、名前に"a"を指定して値を取得する。その後、名前"c"に対応する値"dataC"を追加し、名前に"a"を指定して値を取得するとその値は"dataA"', () => {
        // 要素を追加
        lru.put("a", "dataA");
        lru.put("b", "dataB");
        // 要素名"a"の値を取得
        lru.get("a")
        // 要素追加
        lru.put("c", "dataC");

        // 要素を取得&検証
        expect(lru.get("a")).toEqual("dataA");
    })
})