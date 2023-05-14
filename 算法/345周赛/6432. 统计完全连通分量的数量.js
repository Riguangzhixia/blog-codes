var countCompleteComponents = function(n, edges) {
    const uf = new UnionFind(n);
    const g = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (const [a, b] of edges) {
      uf.union(a, b);
      g[a][b] = g[b][a] = 1;
    }
    const fa = {};
    for (let i = 0; i < n; i++) {
      let root = uf.find(i);
      fa[root] = fa[root] || [];
      fa[root].push(i);
    }
    let ans = 0;
    for (const root in fa) {
      const nums = fa[root];
      const n = nums.length;
      let all = true;
      // 验证：每一组连通分量内的点是否全部两两相连
      a: for (const x of nums) {
        b: for (const y of nums) {
          if (x === y) continue;
          if (g[x][y] === 0 || g[y][x] === 0) {
            all = false;
            break a;
          }
        }
      }
      if (all) ans += 1;
    }
    return ans;
  };
  
  class UnionFind {
    constructor(n) {
      this._count = n;
      this.parent = new Array(n).fill(0).map((_, i) => i);
      this.size = new Array(n).fill(1);
    }
    union(p, q) {
      const { size, parent } = this;
      const rootP = this.find(p);
      const rootQ = this.find(q);
      if (rootP === rootQ) {
        return;
      }
      if (size[rootP] > size[rootQ]) {
        parent[rootQ] = rootP;
        size[rootP] += size[rootQ];
      } else {
        parent[rootP] = rootQ;
        size[rootQ] += size[rootP];
      }
      this._count--;
    }
    find(x) {
      const { parent } = this;
      while (x !== parent[x]) {
        parent[x] = parent[parent[x]];
        x = parent[x];
      }
      return x;
    }
    connected(p, q) {
      const rootP = this.find(p);
      const rootQ = this.find(q);
      return rootP === rootQ;
    }
    get count() {
      return this._count;
    }
  }
  