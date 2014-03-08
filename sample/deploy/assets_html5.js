(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.assets_html5 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(199,150,401,300);


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

	// 
	this.ball = new lib.circle();
	this.ball.setTransform(135,121,3,3);

	// anonymous
	this.instance = new lib.circle();
	this.instance.setTransform(83,39);

	this.instance_1 = new lib.circle();
	this.instance_1.setTransform(258,72,4.6,4.6);

	this.addChild(this.instance_1,this.instance,this.ball);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(78,34,203,102);


(lib.sampleboxSampleBox = function() {
	this.initialize();

	// 
	this.floor = new lib.box();
	this.floor.setTransform(52,125,13,29.995,-55.7);

	// anonymous
	this.instance = new lib.box();
	this.instance.setTransform(323,100,5,82.489,62.5);

	this.instance_1 = new lib.box();
	this.instance_1.setTransform(200,5,200.018,4.999);

	this.instance_2 = new lib.box();
	this.instance_2.setTransform(200,295,200.018,4.999);

	this.instance_3 = new lib.box();
	this.instance_3.setTransform(395,150,5,149.979);

	this.instance_4 = new lib.box();
	this.instance_4.setTransform(4,150,5,149.979);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.floor);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,401,300);


(lib._1 = function() {
	this.initialize();

	// レイヤー 1
	this.p6 = new lib.polygon_vertex();
	this.p6.setTransform(20.5,42.5);

	this.p5 = new lib.polygon_vertex();
	this.p5.setTransform(75.5,58);

	this.p4 = new lib.polygon_vertex();
	this.p4.setTransform(100.5,18);

	this.p3 = new lib.polygon_vertex();
	this.p3.setTransform(92.5,-25);

	this.p2 = new lib.polygon_vertex();
	this.p2.setTransform(58,-54);

	this.p1 = new lib.polygon_vertex();
	this.p1.setTransform(26,-44);

	this.p0 = new lib.polygon_vertex();

	this.addChild(this.p0,this.p1,this.p2,this.p3,this.p4,this.p5,this.p6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-56,104.5,116);


(lib._0 = function() {
	this.initialize();

	// レイヤー 1
	this.p3 = new lib.polygon_vertex();
	this.p3.setTransform(0,16);

	this.p2 = new lib.polygon_vertex();
	this.p2.setTransform(72,12);

	this.p1 = new lib.polygon_vertex();
	this.p1.setTransform(72,0);

	this.p0 = new lib.polygon_vertex();

	this.addChild(this.p0,this.p1,this.p2,this.p3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,76,20);


(lib.samplepolygonSamplePolygon = function() {
	this.initialize();

	// 
	this.flipper = new lib._0();
	this.flipper.setTransform(47,213);

	// anonymous
	this.instance = new lib._1();
	this.instance.setTransform(239,213);

	this.addChild(this.instance,this.flipper);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(45,157,296.5,116);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;