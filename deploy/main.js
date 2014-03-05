(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() {
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Main.prototype = {
	parse: function() {
		this.flashToPhysicsObjectParser = new com.dango_itimi.physics.FlashToPhysicsObjectParser();
		this.addBox();
		this.addCircle();
		this.addPolygon();
		this.flashToPhysicsObjectParser.execute();
		this.outputBox();
		this.outputCircle();
		this.outputPolygon();
	}
	,addBox: function() {
		this.sampleBox = this.flashToPhysicsObjectParser.register_sample_box_SampleBox(com.dango_itimi.physics.PhysicsObjectType.BOX,lib.sampleboxSampleBox);
	}
	,addCircle: function() {
		this.sampleCircle = this.flashToPhysicsObjectParser.register_sample_circle_SampleCircle(com.dango_itimi.physics.PhysicsObjectType.CIRCLE,lib.samplecircleSampleCircle);
	}
	,addPolygon: function() {
		this.samplePolygon = this.flashToPhysicsObjectParser.register_sample_polygon_SamplePolygon(com.dango_itimi.physics.PhysicsObjectType.POLYGON,lib.samplepolygonSamplePolygon);
	}
	,outputBox: function() {
		console.log("---");
		var physicsObject;
		physicsObject = this.flashToPhysicsObjectParser.getPhysicsObject(this.sampleBox,this.sampleBox.floor);
		console.log(physicsObject);
		physicsObject = this.flashToPhysicsObjectParser.getPhysicsObject(this.sampleBox,this.sampleBox.slope);
		console.log(physicsObject);
		var anonymousSet = this.flashToPhysicsObjectParser.getAnonymousPhysicsObjectSet(this.sampleBox);
		var _g = 0;
		while(_g < anonymousSet.length) {
			var anonymousPhysicsObject = anonymousSet[_g];
			++_g;
			console.log(anonymousPhysicsObject);
		}
	}
	,outputCircle: function() {
		console.log("---");
		var physicsObject;
		physicsObject = this.flashToPhysicsObjectParser.getPhysicsObject(this.sampleCircle,this.sampleCircle.circle0);
		console.log(physicsObject);
		physicsObject = this.flashToPhysicsObjectParser.getPhysicsObject(this.sampleCircle,this.sampleCircle.circle1);
		console.log(physicsObject);
		var anonymousSet = this.flashToPhysicsObjectParser.getAnonymousPhysicsObjectSet(this.sampleCircle);
		var _g = 0;
		while(_g < anonymousSet.length) {
			var anonymousPhysicsObject = anonymousSet[_g];
			++_g;
			console.log(anonymousPhysicsObject);
		}
	}
	,outputPolygon: function() {
		console.log("---");
		var polygon;
		polygon = this.flashToPhysicsObjectParser.getPhysicsObject(this.samplePolygon,this.samplePolygon.polygon0);
		console.log(polygon);
		polygon = this.flashToPhysicsObjectParser.getPhysicsObject(this.samplePolygon,this.samplePolygon.polygon1);
		console.log(polygon);
		var anonymousSet = this.flashToPhysicsObjectParser.getAnonymousPhysicsObjectSet(this.samplePolygon);
		var _g = 0;
		while(_g < anonymousSet.length) {
			var anonymousPhysicsObject = anonymousSet[_g];
			++_g;
			console.log(anonymousPhysicsObject);
		}
	}
	,__class__: Main
};
var MainForJS = function() {
	window.onload = $bind(this,this.initialize);
	Main.call(this);
};
MainForJS.__name__ = true;
MainForJS.main = function() {
	new MainForJS();
};
MainForJS.__super__ = Main;
MainForJS.prototype = $extend(Main.prototype,{
	initialize: function(event) {
		this.parse();
	}
	,__class__: MainForJS
});
var IMap = function() { };
IMap.__name__ = true;
IMap.prototype = {
	__class__: IMap
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
var Type = function() { };
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
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
};
var com = {};
com.dango_itimi = {};
com.dango_itimi.physics = {};
com.dango_itimi.physics.FlashToPhysicsObjectParser = function() {
	this.map = new haxe.ds.ObjectMap();
	this.anonymousMap = new haxe.ds.ObjectMap();
	this.registeredBoxSet = [];
	this.registeredCircleSet = [];
	this.registeredPolygonSet = [];
};
com.dango_itimi.physics.FlashToPhysicsObjectParser.__name__ = true;
com.dango_itimi.physics.FlashToPhysicsObjectParser.prototype = {
	register_sample_polygon_SamplePolygon: function(physicsObjectType,displayObjectClass) {
		var displayObject = Type.createInstance(displayObjectClass,[]);
		this.getRegisteredSet(physicsObjectType).push(displayObject);
		return displayObject;
	}
	,register_sample_circle_SampleCircle: function(physicsObjectType,displayObjectClass) {
		var displayObject = Type.createInstance(displayObjectClass,[]);
		this.getRegisteredSet(physicsObjectType).push(displayObject);
		return displayObject;
	}
	,register_sample_box_SampleBox: function(physicsObjectType,displayObjectClass) {
		var displayObject = Type.createInstance(displayObjectClass,[]);
		this.getRegisteredSet(physicsObjectType).push(displayObject);
		return displayObject;
	}
	,getRegisteredSet: function(physicsObjectType) {
		switch(physicsObjectType[1]) {
		case 0:
			return this.registeredBoxSet;
		case 1:
			return this.registeredCircleSet;
		case 2:
			return this.registeredPolygonSet;
		}
	}
	,execute: function() {
		this.createMap(com.dango_itimi.physics.PhysicsObject,this.registeredBoxSet);
		this.createMap(com.dango_itimi.physics.PhysicsObject,this.registeredCircleSet);
		this.createMap(com.dango_itimi.physics.PhysicsPolygon,this.registeredPolygonSet);
	}
	,createMap: function(physicsObjectClass,registeredDisplayObjectSet) {
		var _g1 = 0;
		var _g = registeredDisplayObjectSet.length;
		while(_g1 < _g) {
			var i = _g1++;
			var displayObject = registeredDisplayObjectSet[i];
			var physicsObjectMap = new haxe.ds.ObjectMap();
			this.map.set(displayObject,physicsObjectMap);
			var anonymousPhysicsObjectSet = [];
			this.anonymousMap.set(displayObject,anonymousPhysicsObjectSet);
			this.parse(physicsObjectClass,displayObject,physicsObjectMap,anonymousPhysicsObjectSet);
		}
	}
	,parse: function(physicsObjectClass,displayObject,physicsObjectMap,anonymousSet) {
		var container;
		container = js.Boot.__cast(displayObject , createjs.Container);
		var numChildren = container.getNumChildren();
		var _g = 0;
		while(_g < numChildren) {
			var i = _g++;
			var shapeInstance = container.getChildAt(i);
			var instanceName = null;
			var _g1 = 0;
			var _g2 = Reflect.fields(container);
			while(_g1 < _g2.length) {
				var prop = _g2[_g1];
				++_g1;
				if(Reflect.field(container,prop) == shapeInstance) {
					instanceName = prop;
					break;
				}
			}
			var physicsObject = Type.createInstance(physicsObjectClass,[shapeInstance]);
			if(instanceName.indexOf("instance") != -1) anonymousSet.push(physicsObject); else physicsObjectMap.set(shapeInstance,physicsObject);
		}
	}
	,getPhysicsObject: function(keyDisplayObject,keyDisplayObjectProperty) {
		var this1 = this.map.h[keyDisplayObject.__id__];
		return this1.get(keyDisplayObjectProperty);
	}
	,getAnonymousPhysicsObjectSet: function(keyDisplayObject) {
		return this.anonymousMap.h[keyDisplayObject.__id__];
	}
	,__class__: com.dango_itimi.physics.FlashToPhysicsObjectParser
};
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
};
com.dango_itimi.physics.PhysicsObjectType = { __ename__ : true, __constructs__ : ["BOX","CIRCLE","POLYGON"] };
com.dango_itimi.physics.PhysicsObjectType.BOX = ["BOX",0];
com.dango_itimi.physics.PhysicsObjectType.BOX.toString = $estr;
com.dango_itimi.physics.PhysicsObjectType.BOX.__enum__ = com.dango_itimi.physics.PhysicsObjectType;
com.dango_itimi.physics.PhysicsObjectType.CIRCLE = ["CIRCLE",1];
com.dango_itimi.physics.PhysicsObjectType.CIRCLE.toString = $estr;
com.dango_itimi.physics.PhysicsObjectType.CIRCLE.__enum__ = com.dango_itimi.physics.PhysicsObjectType;
com.dango_itimi.physics.PhysicsObjectType.POLYGON = ["POLYGON",2];
com.dango_itimi.physics.PhysicsObjectType.POLYGON.toString = $estr;
com.dango_itimi.physics.PhysicsObjectType.POLYGON.__enum__ = com.dango_itimi.physics.PhysicsObjectType;
com.dango_itimi.physics.PhysicsPolygon = function(shapeInstance) {
	com.dango_itimi.physics.PhysicsObject.call(this,shapeInstance);
	this.vertices = [];
	var numChildren = shapeInstance.getNumChildren();
	var _g = 0;
	while(_g < numChildren) {
		var i = _g++;
		var vertex = Reflect.field(shapeInstance,com.dango_itimi.physics.PhysicsPolygon.VERTEX_MOVIE_CLIP_HEAD_NAME + i);
		if(vertex != null) this.vertices.push(new createjs.Point(vertex.x,vertex.y));
	}
};
com.dango_itimi.physics.PhysicsPolygon.__name__ = true;
com.dango_itimi.physics.PhysicsPolygon.__super__ = com.dango_itimi.physics.PhysicsObject;
com.dango_itimi.physics.PhysicsPolygon.prototype = $extend(com.dango_itimi.physics.PhysicsObject.prototype,{
	toString: function() {
		var str = com.dango_itimi.physics.PhysicsObject.prototype.toString.call(this);
		str += "\n{";
		var _g = 0;
		var _g1 = this.vertices;
		while(_g < _g1.length) {
			var vertex = _g1[_g];
			++_g;
			str += "{" + vertex.x + ", " + vertex.y + "} ";
		}
		str += "}";
		return str;
	}
	,__class__: com.dango_itimi.physics.PhysicsPolygon
});
var haxe = {};
haxe.ds = {};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
haxe.ds.ObjectMap.__name__ = true;
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,__class__: haxe.ds.ObjectMap
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
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
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
com.dango_itimi.physics.FlashToPhysicsObjectParser.ANONYMOUS_INSTANCE = "instance";
com.dango_itimi.physics.PhysicsPolygon.VERTEX_MOVIE_CLIP_HEAD_NAME = "p";
haxe.ds.ObjectMap.count = 0;
MainForJS.main();
})();

//# sourceMappingURL=main.js.map