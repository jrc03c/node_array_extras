// Java ArrayList psuedo-implementation
Array.prototype.add = function(index, item){
	if (item === undefined){
		item = index;
		index = 0;
	}

	while (index > this.length){
		this.push(undefined);
	}

	this.splice(index, 0, item);
	return true;
}

Array.prototype.addAll = function(index, items){
	if (items === undefined){
		items = index;
		index = 0;
	}

	for (var i=0; i<items.length; i++){
		this.add(index+i, items[i]);
	}

	return true;
}

Array.prototype.clear = function(){
	this.splice(0, this.length);
}

Array.prototype.clone = function(){
	return this.slice(0);
}

Array.prototype.contains = function(item){
	var contains = false;

	for (var i=0; i<this.length; i++){
		if (this[i] === item){
			contains = true;
			break;
		}
	}

	return contains;
}

Array.prototype.ensureCapacity = function(min){
	while (this.length < min){
		this.push(undefined);
	}
}

Array.prototype.get = function(index){
	return this[index];
}

Array.prototype.indexOf = function(item){
	var index = -1;

	for (var i=0; i<this.length; i++){
		if (this[i] === item){
			index = i;
			break;
		}
	}

	return index;
}

Array.prototype.isEmpty = function(){
	return this.length === 0;
}

Array.prototype.lastIndexOf = function(item){
	var lastIndex = -1;

	for (var i=0; i<this.length; i++){
		if (this[i] === item){
			lastIndex = i;
		}
	}

	return lastIndex;
}

Array.prototype.remove = function(item){
	if (this.contains(item)) return this.splice(this.indexOf(item), 1);
}

Array.prototype.removeAll = function(items){
	for (var i=0; i<items.length; i++){
		this.remove(items[i]);
	}

	return true;
}

Array.prototype.removeRange = function(start, end){
	this.splice(start, end-start);
}

Array.prototype.retainAll = function(items){
	for (var i=0; i<this.length; i++){
		if (!items.contains(this[i])){
			this.remove(this[i]);
			i--;
		}
	}

	return true;
}

Array.prototype.set = function(index, item){
	if (index >= this.length){
		this.add(index, item);
	} else {
		this[index] = item;
	}
}

Array.prototype.size = function(){
	return this.length;
}

Array.prototype.subList = function(start, end){
	return this.slice(start, end);
}

Array.prototype.trimToSize = function(size){
	this.splice(size, this.length-size);
}

// My additions
Array.prototype.toSet = function(){
	var set = [];

	for (var i=0; i<this.length; i++){
		if (!set.contains(this[i])){
			set.push(this[i]);
		}
	}

	return set;
}

Array.prototype.removeAllOccurrences = function(item){
	while (this.contains(item)) this.remove(item);
	return true;
}
