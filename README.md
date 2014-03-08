FlashToPhysicsObjectParser
=============================

FlashToPhysicsObjectParser は、Flash Professional CC のシンボル内 各数値(幅・高さ・配置位置・回転角度・頂点座標)を物理演算ライブラリ用に抽出する Haxe ライブラリです。

![アプリケーション概要](img/overview.png)

---
## Features

### 名前を設定していない匿名シンボルを解析

プロパティ名を設定していない匿名シンボルの解析を行えます。ゲームの障害物といった、スクリプト操作を行う必要のない ただ配置するだけの静的なオブジェクト等に利用できます。

### HTML5 Canvas ドキュメントから出力されたデータの解析

swf の他、やや独特なフォーマットの HTML5 Canvas 用出力データ(CreateJS用データ)の解析を行えます。HTML5 Canvas 用出力データを解析するためには、以下の Haxe-CreateJS ライブラリの利用が必要となります。

[https://github.com/nickalie/CreateJS-Haxe](https://github.com/nickalie/CreateJS-Haxe)

---
## Usage

矩形シンボルを FlashToPhysicsObjectParser にて解析する手順を記述します。サンプルファイルと合わせてご確認ください。

### 前準備

Flash CC の出力素材データを Haxe から簡単に利用するため、以下の二種類の JSFL(Flash CC 拡張機能) をインストールします。

* [FlashToHaxeConverter](https://github.com/siratama/Flash-To-Haxe-Converter)
* [Linkage](https://github.com/siratama/Linkage)

### オーサリング

Flash ファイル assets.fla を作成します。

#### (a) ライブラリ内に sample/box/SampleBox ムービークリップを作成

![rectangle setting 1](img/usage1.png)

#### (b) sample/box/SampleBox ムービークリップ内に矩形シンボルを配置

![rectangle setting 2](img/usage2.png)

スクリプトで制御したい矩形シンボルはプロパティ名を設定します。ここでは試しに floor という名前を設定します。

#### (c) sample/box/SampleBox ムービークリップにリンケージ設定

![rectangle setting 3](img/usage3.png)

拡張機能 Linkage を利用して、SampleBox ムービークリップにリンケージ設定を行います。

#### (d) リンケージ設定を行ったムービークリップの構造を Haxe ファイルに出力

![rectangle setting 3](img/usage4.png)

拡張機能 FlashToHaxeConverter を利用して SampleBox ムービークリップの構造を Haxe ファイルに出力します。

### FlashToPhysicsObjectParser の利用

FlashToPhysicsObjectParser の利用方法はとても簡単です。まずはインスタンスを生成します。

	var flashToPhysicsObjectParser = new FlashToPhysicsObjectParser();

次に register メソッドで解析対象のムービークリップを登録します。SampleBox は矩形として解析を行うため、PhysicsObjectType.BOX を第一引数に指定します。SampleBox クラスは FlashToHaxeConverter で出力されたクラスファイルです。register メソッドは第二引数で指定したクラスインスタンスを返却するので保持しておきます。

	var sampleBox:SampleBox = flashToPhysicsObjectParser.register(PhysicsObjectType.BOX, SampleBox);

登録完了後 execute メソッドで解析を行います。

	flashToPhysicsObjectParser.execute();

解析後は、getPhysicsObject メソッドを呼び出すことで、矩形データとして各数値が抽出された PhysicsObject インスタンスを取得できます。Flash CC で floor というプロパティ名で設定したシンボルを取得するには、以下の様な指定を行います。FlashToHaxeConverter 経由で出力された SampleBox クラス内には floor プロパティが用意されています。

	var physicsObject = flashToPhysicsObjectParser.getPhysicsObject(sampleBox, sampleBox.floor);

PhysicsObject インスタンスには floor シンボルの位置情報や幅・高さ等の各データが解析されています。これら各数値を利用して、物理演算ライブラリのオブジェクト生成を行います。

	trace(physicsObject);
	//x: 52
	//y: 125
	//width: 26
	//height: 60
	//degree: -55.704...
	//radian: -0.9721...

プロパティ名を設定していないシンボルは getAnonymousPhysicsObjectSet メソッドで取得可能です。

	var anonymousSet = flashToPhysicsObjectParser.getAnonymousPhysicsObjectSet(sampleBox);
	for(anonymousPhysicsObject in anonymousSet)
		trace(anonymousPhysicsObject);


