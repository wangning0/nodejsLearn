var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

module.exports = function(session) {
	var Store = session.Store;
	var data = [];
	function FileStore(options) {
		this._opt = options || {};
		this._dir = this._opt.dir || '.';
		this._maxAge = this._opt.maxAge || 0;
		mkdirp.sync(this._dir);
	}
	FileStore.prototype.__proto__ = Store.prototype;
	FileStore.prototype._startGC = function(){
		console.log(11);
		fs.readdir(this._dir,function(err,list){
			list.forEach(function(file){
				fs.stat(path.join(this._dir,file),function(err,fileInfo){
					var lastTime = fileInfo.mtime + this._maxAge;
					if( lastTime < Date.now() ){
						fs.unlink(path.join(this._dir,file));
					}
				})
			})
		})
	}
	FileStore.prototype.get = function(sid, callback) {
		var self = this;
		fs.exists(path.join(this._dir, sid), function(err, exists) {		
			if (exists) {

				fs.readFile(path.join(self._dir, sid), 'utf8', function(err, data) {
					callback(null, JSON.parse(data));
				});
			} else {
				callback(null,null);
				console.log('noget');
			}
		})
		if( (Math.random()*10).toFixed(0) == 1 ){
			this._startGC();
		}
	}

	FileStore.prototype.set = function(sid, session, callback) {
		fs.writeFile(path.join(this._dir, sid), JSON.stringify(session), callback);
	}

	FileStore.prototype.destory = function(sid, callback) {
		fs.unlink(path.join(this._dir, sid), callback);
	}

	return FileStore;
}