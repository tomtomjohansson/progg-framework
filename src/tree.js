function Node(data) {
  this.data = data
  this.parent = null
  this.children = []
}

function Tree(data) {
  const node = new Node(data)
  this._root = node
}

Tree.prototype.traverseDF = function(callback) {
  ;(function recurse(currentNode) {
    for (var i = 0, length = currentNode.children.length; i < length; i++) {
      recurse(currentNode.children[i])
    }
    callback(currentNode)
  })(this._root)
}
