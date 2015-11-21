Array.prototype.add = function(obj){
	this.push(obj);
}

Array.prototype.remove = function(obj){
	for (var i=0; i<this.length; i++){
		if (this[i] === obj){
			this.splice(i, 1);
			return;
		}
	}
}

Array.prototype.removeAll = function(obj){
	while (this.contains(obj)) this.remove(obj);
}

Array.prototype.get = function(index){
	return this[index];
}

Array.prototype.size = function(){
	return this.length;
}

Array.prototype.contains = function(obj){
	for (var i=0; i<this.length; i++){
		if (this[i] === obj) return true;
	}

	return false;
}

Array.prototype.set = function(){
	var a = [];

	for (var i=0; i<this.length; i++){
		if (!a.contains(this[i])){
			a.add(this[i]);
		}
	}

	return a;
}
