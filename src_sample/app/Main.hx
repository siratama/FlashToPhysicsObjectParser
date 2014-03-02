package;
import sample.polygon.SamplePolygon;
import sample.circle.SampleCircle;
import sample.box.SampleBox;
import com.dango_itimi.physics.Polygon;
import com.dango_itimi.physics.PhysicsObject;
import com.dango_itimi.physics.PhysicsObjectType;
import com.dango_itimi.physics.FlashToPhysicsObjectParser;
class Main {

	private var flashToPhysicsObjectParser:FlashToPhysicsObjectParser;

	private var sampleBox:SampleBox;
	private var sampleCircle:SampleCircle;
	private var samplePolygon:SamplePolygon;

	public static function main(){
		new Main();
	}
	public function new(){
	}
	private function parse(){

		flashToPhysicsObjectParser = new FlashToPhysicsObjectParser();

		addBox();
		addCircle();
		addPolygon();

		flashToPhysicsObjectParser.execute();

		outputBox();
		outputCircle();
		outputPolygon();
	}

	//
	private function addBox(){

		sampleBox = cast flashToPhysicsObjectParser.addDisplayObject(PhysicsObjectType.BOX, SampleBox);
	}
	private function addCircle(){

		sampleCircle = cast flashToPhysicsObjectParser.addDisplayObject(PhysicsObjectType.CIRCLE, SampleCircle);
	}
	private function addPolygon(){

		samplePolygon = cast flashToPhysicsObjectParser.addDisplayObject(PhysicsObjectType.POLYGON, SamplePolygon);
	}

	//
	private function outputBox(){

		var physicsObject:PhysicsObject;
		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(PhysicsObjectType.BOX, sampleBox, sampleBox.floor);
		trace(physicsObject);

		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(PhysicsObjectType.BOX, sampleBox, sampleBox.slope);
		trace(physicsObject);
	}
	private function outputCircle(){

		var physicsObject:PhysicsObject;
		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(PhysicsObjectType.CIRCLE, sampleCircle, sampleCircle.circle0);
		trace(physicsObject);

		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(PhysicsObjectType.CIRCLE, sampleCircle, sampleCircle.circle1);
		trace(physicsObject);
	}
	private function outputPolygon(){

		var polygon:Polygon;
		polygon = cast flashToPhysicsObjectParser.getPhysicsObject(PhysicsObjectType.POLYGON, samplePolygon, samplePolygon.polygon0);
		trace(polygon);

		polygon = cast flashToPhysicsObjectParser.getPhysicsObject(PhysicsObjectType.POLYGON, samplePolygon, samplePolygon.polygon1);
		trace(polygon);
	}
}
