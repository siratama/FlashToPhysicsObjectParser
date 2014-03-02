(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() {
};
Main.__name__ = true;
Main.main = function() {
	new Main();
}
Main.prototype = {
	outputPolygon: function() {
		var polygon;
		polygon = this.flashToPhysicsObjectParser.getPhysicsObject(com.dango_itimi.physics.PhysicsObjectType.POLYGON,this.samplePolygon,this.samplePolygon.polygon0);
		console.log(polygon);
		polygon = this.flashToPhysicsObjectParser.getPhysicsObject(com.dango_itimi.physics.PhysicsObjectType.POLYGON,this.samplePolygon,this.samplePolygon.polygon1);
		console.log(polygon);
	}
	,outputCircle: function() {
		var physicsObject;
		physicsObject = this.flashToPhysicsObjectParser.getPhysicsObject(com.dango_itimi.physics.PhysicsObjectType.CIRCLE,this.sampleCircle,this.sampleCircle.circle0);
		console.log(physicsObject);
		physicsObject = this.flashToPhysicsObjectParser.getPhysicsObject(com.dango_itimi.physics.PhysicsObjectType.CIRCLE,this.sampleCircle,this.sampleCircle.circle1);
		console.log(physicsObject);
	}
	,outputBox: function() {
		var physicsObject;
		physicsObject = this.flashToPhysicsObjectParser.getPhysicsObject(com.dango_itimi.physics.PhysicsObjectType.BOX,this.sampleBox,this.sampleBox.floor);
		console.log(physicsObject);
		physicsObject = this.flashToPhysicsObjectParser.getPhysicsObject(com.dango_itimi.physics.PhysicsObjectType.BOX,this.sampleBox,this.sampleBox.slope);
		console.log(physicsObject);
	}
	,addPolygon: function() {
		this.samplePolygon = this.flashToPhysicsObjectParser.addDisplayObject(com.dango_itimi.physics.PhysicsObjectType.POLYGON,lib.samplepolygonSamplePolygon);
	}
	,addCircle: function() {
		this.sampleCircle = this.flashToPhysicsObjectParser.addDisplayObject(com.dango_itimi.physics.PhysicsObjectType.CIRCLE,lib.samplecircleSampleCircle);
	}
	,addBox: function() {
		this.sampleBox = this.flashToPhysicsObjectParser.addDisplayObject(com.dango_itimi.physics.PhysicsObjectType.BOX,lib.sampleboxSampleBox);
	}
	,parse: function() {
		this.flashToPhysicsObjectParser = new com.dango_itimi.physics.FlashToPhysicsObjectParser();
		this.addBox();
		this.addCircle();
		this.addPolygon();
		this.flashToPhysicsObjectParser.execute();
		this.outputBox();
		this.outputCircle();
		this.outputPolygon();
	}
	,__class__: Main
}
var MainForJS = function() {
	js.Browser.window.onload = $bind(this,this.initialize);
	Main.call(this);
};
MainForJS.__name__ = true;
MainForJS.main = function() {
	new MainForJS();
}
MainForJS.__super__ = Main;
MainForJS.prototype = $extend(Main.prototype,{
	initialize: function(event) {
		this.parse();
	}
	,__class__: MainForJS
});
var IMap = function() { }
IMap.__name__ = true;
var Reflect = function() { }
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
var Type = function() { }
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
var com = {}
com.dango_itimi = {}
com.dango_itimi.physics = {}
com.dango_itimi.physics.FlashToPhysicsObjectParser = function() {
	this.boxSet = [];
	this.circleSet = [];
	this.polygonSet = [];
	this.boxMap = new haxe.ds.ObjectMap();
	this.circleMap = new haxe.ds.ObjectMap();
	this.polygonMap = new haxe.ds.ObjectMap();
};
com.dango_itimi.physics.FlashToPhysicsObjectParser.__name__ = true;
com.dango_itimi.physics.FlashToPhysicsObjectParser.prototype = {
	getMap: function(physicsObjectType) {
		return (function($this) {
			var $r;
			switch( (physicsObjectType)[1] ) {
			case 0:
				$r = $this.boxMap;
				break;
			case 1:
				$r = $this.circleMap;
				break;
			case 2:
				$r = $this.polygonMap;
				break;
			}
			return $r;
		}(this));
	}
	,getPhysicsObject: function(physicsObjectType,displayObject,displayObjectProperty) {
		var map = this.getMap(physicsObjectType);
		return map.h[displayObject.__id__].h[displayObjectProperty.__id__];
	}
	,parse: function(physicsObjectClass,displayObject,physicsObjectMap) {
		var movieClip = displayObject;
		var numChildren = movieClip.getNumChildren();
		var _g = 0;
		while(_g < numChildren) {
			var i = _g++;
			var shapeInstance = movieClip.getChildAt(i);
			var physicsObject = Type.createInstance(physicsObjectClass,[shapeInstance]);
			physicsObjectMap.set(shapeInstance,physicsObject);
		}
	}
	,createMap: function(physicsObjectClass,displayObjectSet,map) {
		var _g1 = 0, _g = displayObjectSet.length;
		while(_g1 < _g) {
			var i = _g1++;
			var displayObject = displayObjectSet[i];
			var physicsObjectMap = new haxe.ds.ObjectMap();
			map.set(displayObject,physicsObjectMap);
			this.parse(physicsObjectClass,displayObject,physicsObjectMap);
		}
	}
	,execute: function() {
		this.createMap(com.dango_itimi.physics.PhysicsObject,this.boxSet,this.boxMap);
		this.createMap(com.dango_itimi.physics.PhysicsObject,this.circleSet,this.circleMap);
		this.createMap(com.dango_itimi.physics.Polygon,this.polygonSet,this.polygonMap);
	}
	,getSet: function(physicsObjectType) {
		return (function($this) {
			var $r;
			switch( (physicsObjectType)[1] ) {
			case 0:
				$r = $this.boxSet;
				break;
			case 1:
				$r = $this.circleSet;
				break;
			case 2:
				$r = $this.polygonSet;
				break;
			}
			return $r;
		}(this));
	}
	,addDisplayObject: function(physicsObjectType,displayObjectClass) {
		var displayObject = Type.createInstance(displayObjectClass,[]);
		this.getSet(physicsObjectType).push(displayObject);
		return displayObject;
	}
	,__class__: com.dango_itimi.physics.FlashToPhysicsObjectParser
}
com.dango_itimi.physics.PhysicsObject = function(shapeInstance) {
	this.degree = shapeInstance.rotation;
	this.radian = Math.PI / 180 * this.degree;
	shapeInstance.rotation = 0;
	var nominalBounds = shapeInstance.nominalBounds;
	this.width = nominalBounds.width * shapeInstance.scaleX;
	this.height = nominalBounds.height * shapeInstance.scaleY;
	this.x = shapeInstance.x;
	this.y = shapeInstance.y;
	shapeInstance.rotation = this.degree;
};
com.dango_itimi.physics.PhysicsObject.__name__ = true;
com.dango_itimi.physics.PhysicsObject.prototype = {
	toString: function() {
		return ["x: " + this.x + ", ","y: " + this.y + ", ","width: " + this.width + ", ","height: " + this.height + ", ","degree: " + this.degree + ", ","radian: " + this.radian + ", "].join("");
	}
	,__class__: com.dango_itimi.physics.PhysicsObject
}
com.dango_itimi.physics.PhysicsObjectType = { __ename__ : true, __constructs__ : ["BOX","CIRCLE","POLYGON"] }
com.dango_itimi.physics.PhysicsObjectType.BOX = ["BOX",0];
com.dango_itimi.physics.PhysicsObjectType.BOX.toString = $estr;
com.dango_itimi.physics.PhysicsObjectType.BOX.__enum__ = com.dango_itimi.physics.PhysicsObjectType;
com.dango_itimi.physics.PhysicsObjectType.CIRCLE = ["CIRCLE",1];
com.dango_itimi.physics.PhysicsObjectType.CIRCLE.toString = $estr;
com.dango_itimi.physics.PhysicsObjectType.CIRCLE.__enum__ = com.dango_itimi.physics.PhysicsObjectType;
com.dango_itimi.physics.PhysicsObjectType.POLYGON = ["POLYGON",2];
com.dango_itimi.physics.PhysicsObjectType.POLYGON.toString = $estr;
com.dango_itimi.physics.PhysicsObjectType.POLYGON.__enum__ = com.dango_itimi.physics.PhysicsObjectType;
com.dango_itimi.physics.Polygon = function(shapeInstance) {
	com.dango_itimi.physics.PhysicsObject.call(this,shapeInstance);
	this.vertices = [];
	var numChildren = shapeInstance.getNumChildren();
	var _g = 0;
	while(_g < numChildren) {
		var i = _g++;
		var vertex = Reflect.field(shapeInstance,"p" + i);
		if(vertex != null) this.vertices.push(new createjs.Point(vertex.x,vertex.y));
	}
};
com.dango_itimi.physics.Polygon.__name__ = true;
com.dango_itimi.physics.Polygon.__super__ = com.dango_itimi.physics.PhysicsObject;
com.dango_itimi.physics.Polygon.prototype = $extend(com.dango_itimi.physics.PhysicsObject.prototype,{
	toString: function() {
		var str = com.dango_itimi.physics.PhysicsObject.prototype.toString.call(this);
		str += "\n{";
		var _g = 0, _g1 = this.vertices;
		while(_g < _g1.length) {
			var vertex = _g1[_g];
			++_g;
			str += "{" + vertex.x + ", " + vertex.y + "} ";
		}
		str += "}";
		return str;
	}
	,__class__: com.dango_itimi.physics.Polygon
});
var haxe = {}
haxe.ds = {}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
haxe.ds.ObjectMap.__name__ = true;
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ != null?key.__id__:key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe.ds.ObjectMap
}
var js = {}
js.Boot = function() { }
js.Boot.__name__ = true;
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Browser = function() { }
js.Browser.__name__ = true;
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.prototype.__class__ = Array;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
com.dango_itimi.physics.Polygon.VERTEX_MOVIE_CLIP_HEAD_NAME = "p";
haxe.ds.ObjectMap.count = 0;
js.Browser.window = typeof window != "undefined" ? window : null;
MainForJS.main();
})();

//@ sourceMappingURL=main.js.map