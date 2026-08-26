class TrieNode {
  constructor() {
    this.children = {}; // char -> TrieNode
    this.isEnd = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let curr = this.root;

    for (const c of word) {
      if (!(c in curr.children)) {
        curr.children[c] = new TrieNode();
      }

      curr = curr.children[c];
    }

    curr.isEnd = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let curr = this.root;

    for (const c of word) {
      if (!(c in curr.children)) {
        return false;
      }

      curr = curr.children[c];
    }

    return curr.isEnd;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let curr = this.root;

    for (const c of prefix) {
      if (!(c in curr.children)) {
        return false;
      }

      curr = curr.children[c];
    }

    return true;
  }
}