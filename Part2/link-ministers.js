// use this helper function to create <a> tags inside a given node
function addLink(node, text, url) {
    // clear the node of text; create a new "a" node; add the appropriate attributes;
    // append the new node as a child; return the original node.
    node.innerHTML = "";
    var anode = document.createElement ("a");
    anode.innerHTML = text;
    anode.setAttribute ('href', url);
    node.appendChild (anode);
    return node;
}

// another helper function, if you want to replace spaces w/ "_"
function wikify(text) {
    // replace spaces w/ "_"; concatenate w/ Wikipedia prefix; return concatenated string
    var words = text.split(" ");
    var result = words.join("_");
    return result;
}


// take a class name as parameter, and linkify all such classes.
function linkifyClass (c) {
    // get all elements of class c; loop through elements;
    // add link to each element

    // no need for a return value.
    var tagList = document.getElementsByClassName (c);
    for (var i = 0; i<tagList.length; i++){
      var tagtext = tagList[i].innerHTML;
      addLink (tagList[i], tagtext, "https://en.wikipedia.org/wiki/" + wikify (tagtext));
    }
}

// to actually do the work, we would call the function
// linkifyClass("PM");

// You can probably link all of the fields if you want:
var classesToWikify = ["PM", "Party", "From", "To"];

// what would you need to do next? Solution is left for the reader.

// regardless, we'll create a meta-function that will be called when
// index.html hs finished loading entirely


function updatePage() {
  linkifyClass("PM");
}


// DO NOT MODIFY -- FOR AUTOMATED TESTING ONLY
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  var exports = module.exports = {};
}
else {
  var exports = window.exports = {};
}

exports.addLink = addLink;
exports.wikify = wikify;
exports.linkifyClass = linkifyClass;
exports.updatePage = updatePage;
