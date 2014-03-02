(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.view_html5 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


// symbols:
(lib.polygon_vertex = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC00").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,4,4);


(lib.circle = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgiAjQgPgPAAgUQAAgUAPgOQAPgPATAAQAUAAAPAPQAPAOAAAUQAAAUgPAPQgPAPgUAAQgTAAgPgPg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.box = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399FF").s().p("AgIAJIAAgRIARAAIAAARg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,2);


(lib.samplecircleSampleCircle = function() {
	this.initialize();

	// レイヤー 1
	this.circle1 = new lib.circle();
	this.circle1.setTransform(69,138,6.18,6.18);

	this.circle0 = new lib.circle();
	this.circle0.setTransform(134,70,6.18,6.18);

	this.instance = new lib.circle();
	this.instance.setTransform(30,35,3,3);

	this.addChild(this.instance,this.circle0,this.circle1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15,20,149.9,148.9);


(lib.sampleboxSampleBox = function() {
	this.initialize();

	// 
	this.wall = new lib.box();
	this.wall.setTransform(312,84,11.6,58.959);

	this.slope = new lib.box();
	this.slope.setTransform(280,177,58,22,-24.2);

	this.floor = new lib.box();
	this.floor.setTransform(86,52,58,22);

	// anonymous
	this.instance = new lib.box();
	this.instance.setTransform(227,251,205.9,11,-9);

	this.instance_1 = new lib.box();
	this.instance_1.setTransform(93,175,58,22,25);

	this.addChild(this.instance_1,this.instance,this.floor,this.slope,this.wall);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(22,25.1,410.1,269);


(lib._1 = function() {
	this.initialize();

	// レイヤー 1
	this.p5 = new lib.polygon_vertex();
	this.p5.setTransform(-27.9,84);

	this.p4 = new lib.polygon_vertex();
	this.p4.setTransform(59,56);

	this.p3 = new lib.polygon_vertex();
	this.p3.setTransform(114,68);

	this.p2 = new lib.polygon_vertex();
	this.p2.setTransform(110,4);

	this.p1 = new lib.polygon_vertex();
	this.p1.setTransform(63,-27);

	this.p0 = new lib.polygon_vertex();

	this.addChild(this.p0,this.p1,this.p2,this.p3,this.p4,this.p5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.9,-29,146,115);


(lib._0 = function() {
	this.initialize();

	// レイヤー 1
	this.p3 = new lib.polygon_vertex();
	this.p3.setTransform(0,12);

	this.p2 = new lib.polygon_vertex();
	this.p2.setTransform(52,12);

	this.p1 = new lib.polygon_vertex();
	this.p1.setTransform(52,0);

	this.p0 = new lib.polygon_vertex();

	this.addChild(this.p0,this.p1,this.p2,this.p3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,56,16);


(lib.samplepolygonSamplePolygon = function() {
	this.initialize();

	// anonymous
	this.instance = new lib._0();
	this.instance.setTransform(281,15,1,1,0,0,0,26,6);

	//  
	this.polygon1 = new lib._1();
	this.polygon1.setTransform(140,87);

	this.polygon0 = new lib._0();
	this.polygon0.setTransform(30,34);

	this.addChild(this.polygon0,this.polygon1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(28,7,281,166);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;