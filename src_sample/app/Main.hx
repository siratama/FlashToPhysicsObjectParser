package;
import sample.box.SampleBox;
import com.dango_itimi.physics.PhysicsObject;
import com.dango_itimi.physics.PhysicsObjectType;
import com.dango_itimi.physics.FlashToPhysicsObjectParser;
class Main {

	public static function main(){
		new Main();
	}
	public function new(){
	}
	public function parse(){

		var flashToPhysicsObjectParser = new FlashToPhysicsObjectParser();

		var sampleBox = new SampleBox();
		flashToPhysicsObjectParser.addDisplayObject(PhysicsObjectType.BOX, sampleBox);
		flashToPhysicsObjectParser.execute();

		var physicsObject:PhysicsObject;
		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(PhysicsObjectType.BOX, sampleBox, sampleBox.floor);
		physicsObject = flashToPhysicsObjectParser.getPhysicsObject(PhysicsObjectType.BOX, sampleBox, sampleBox.wall);
	}
}
