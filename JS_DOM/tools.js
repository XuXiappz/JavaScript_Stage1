/**
 * 功能：通过id获取结点数据
 * @param  id 结点id
 * @return {Element|*|node}    
 */
function getEle(id){
	return document.getElementById(id);
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
	var node = ele.firstElementChild ||ele.firstChild; 
	return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
	var node = ele.lastElementChild || ele.lastChild;
	return node;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextSiblingNode(ele){
	var node = ele.nextElementSibling || ele.nextSibling;
	return node;
}


/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */

function getLastSiblingNode(ele){
	var node = ele.previousElementSibling || ele.previousSibling;
	return node;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
	return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllEleSiblings(ele){
	//定义一个新数组，装所有的兄弟元素，将来返回
	var arr =[];
	var kids = ele.parentNode.children;
	for(var i=0;i<kids.length;i++){
		if(kids[i] !== ele){
			//判断，如果不是传递过来的元素本身，那么添加到新数组中。
			arr.push(kids[i]);
		}
	}
	return arr;
}