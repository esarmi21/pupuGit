// 3. Create a BST class
// Walk through the binary search tree code in the curriculum and understand it well. Then write a BinarySearchTree class with its core functions (insert(), remove(), find()) from scratch.

// Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into your tree. Compare your result with the result from the 1st exercise.
// Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. Compare your result with the result from the 1st exercise.




const BinarySearchTree = require ('./bst')


function main(){
    const BST = new BinarySearchTree();


    BST.insert(3, 3);
    BST.insert(1, 1);
    BST.insert(4, 4);
    BST.insert(6, 6);
    BST.insert(9, 9);
    BST.insert(2, 2);
    BST.insert(5, 5);
    BST.insert(7, 7);
    console.log(BST);

    const newBST = new BinarySearchTree();
    newBST.insert('E', 'E');
    newBST.insert('A', 'A');
    newBST.insert('S', 'S');
    newBST.insert('Y', 'Y');
    newBST.insert('Q', 'Q');
    newBST.insert('U', 'U');
    newBST.insert('E', 'E');
    newBST.insert('S', 'S');
    newBST.insert('T', 'T');
    newBST.insert('I', 'I');
    newBST.insert('O', 'O');
    newBST.insert('N', 'N');
    console.log(newBST);


    console.log(tree(BST))
    console.log('height', bstHeight(BST))
    console.log(checkBST(BST))
    console.log(nthLargest(BST, 3))
}


main();

//this function returns the sum of all values within the tree,  its runtime will also be O(n) since its only called once every node in the tree


function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}


function bstHeight(t, counter = 0){
    if(!t){
        return 0;
    }
    counter++;
    let leftCounter = counter;
    let rightCounter = counter;
    if (t.left){
        rightCounter = bstHeight(t.right, counter);

    }
    return Math.max(leftCounter, rightCounter);
}

