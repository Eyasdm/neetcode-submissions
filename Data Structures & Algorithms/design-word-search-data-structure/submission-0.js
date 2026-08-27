class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode(); // reuse your TrieNode from 208
  }

  addWord(word) {
    let curr = this.root;

    for (const c of word) {
      if (!(c in curr.children)) {
        curr.children[c] = new TrieNode();
      }

      curr = curr.children[c];
    }

    curr.isEnd = true;
  }

  search(word) {
    const dfs = (node, i) => {
      // Base case:
      // We've processed the entire word.
      return i === word.length
        ? node.isEnd
        : word[i] === "."
          ? Object.values(node.children).some((child) => dfs(child, i + 1))
          : node.children[word[i]]
            ? dfs(node.children[word[i]], i + 1)
            : false;
    };

    return dfs(this.root, 0);
  }
}

