function init() {
	var stage = new createjs.Stage('mainStage');
	var mainStage = document.getElementById("mainStage");
	var ready_1 = false;
	var ready_2 = false;
	var ready_3 = false;
	var ready_4 = false;
	mainStage.mouseMoveOutside = true;
	stage.mouseMoveOutside = true;


	//BACKGROUND START

	//logo
	var logo = new createjs.Bitmap("ASSETS/logo.png");
	logo.x = 5; 
	logo.y = 5;
	logo.scaleX = 0.5;
	logo.scaleY = 0.5;

	//jewel right
	var jewel = new createjs.Bitmap("ASSETS/jewel.png");
	jewel.x += 500;
	jewel.y += 0;
	jewel.scaleX = 0.5;
	jewel.scaleY= 0.5;

	//bot_2
	var bot_2 = new createjs.Bitmap("ASSETS/bot_2.png");
	bot_2.x += 5;
	bot_2.y += 300;
	bot_2.scaleX = 0.6;
	bot_2.scaleY= 0.6;

	//bot_3
	var bot_3 = new createjs.Bitmap("ASSETS/bot_3.png");
	bot_3.x += 50;
	bot_3.y += 270;
	bot_3.scaleX = 0.6;
	bot_3.scaleY= 0.6;

	
	

	//shuttle part 1 (top)
	var shuttleTop = new createjs.Bitmap("ASSETS/product_shape_4.png");
	shuttleTop.x += 140;
	shuttleTop.y += 30;
	shuttleTop.scaleX = 0.5;
	shuttleTop.scaleY= 0.4;

	//shuttle part 2 (top~)
	var shuttleTopTwo = new createjs.Bitmap("ASSETS/product_shape_3.png");
	shuttleTopTwo.x += 145;
	shuttleTopTwo.y += 105;
	shuttleTopTwo.scaleX = 0.5;
	shuttleTopTwo.scaleY= 0.5;

	//shuttle part 3 (center)
	var shuttleCenterThree = new createjs.Bitmap("ASSETS/product_shape_2.png");
	shuttleCenterThree.x += 137;
	shuttleCenterThree.y += 175;
	shuttleCenterThree.scaleX = 0.5;
	shuttleCenterThree.scaleY= 0.5;

	//shuttle part 3 (bottom)
	var shuttleBottomFour = new createjs.Bitmap("ASSETS/product_shape_1.png");
	shuttleBottomFour.x += 132;
	shuttleBottomFour.y += 250;
	shuttleBottomFour.scaleX = 0.5;
	shuttleBottomFour.scaleY= 0.4;


	var bot_1 = new createjs.Bitmap("ASSETS/bot_1.png");
	bot_1.x += 260;
	bot_1.y += 250;
	bot_1.scaleX = 0.7;
	bot_1.scaleY= 0.7;


	//play now button
	var playNow = new createjs.Bitmap("ASSETS/cta.png");
	playNow.x += 75;
	playNow.y += 420;
	playNow.scaleX = 0.5;
	playNow.scaleY= 0.5;

	//welcome panel
	var welcomPanel = new createjs.Bitmap("ASSETS/panel.png");
	welcomPanel.x += 0;
	welcomPanel.y +=-200; //starting outside screen
	welcomPanel.scaleX = 0.5;
	welcomPanel.scaleY= 0.5;


	//wording_1
	var wording_1 = new createjs.Bitmap("ASSETS/wording_1.png");
	wording_1.x += 40;
	wording_1.y += -220; //starting outside screen
	wording_1.scaleX = 0.5;
	wording_1.scaleY= 0.5;



	//BACKGROUND END


	//parts to drag and drop
	//shuttle fall part 1
	var shuttleTopToDrag_1 = new createjs.Bitmap("ASSETS/product_4.png");
	shuttleTopToDrag_1.x += 300;
	shuttleTopToDrag_1.y += 340;
	shuttleTopToDrag_1.scaleX = shuttleTop.scaleX; 
	shuttleTopToDrag_1.scaleY= shuttleTop.scaleY;
	shuttleTopToDrag_1.rotation=115;

	//shuttle fall part 2
	var shuttleTopToDrag_2 = new createjs.Bitmap("ASSETS/product_3.png");
	shuttleTopToDrag_2.x += 290;
	shuttleTopToDrag_2.y += 440;
	shuttleTopToDrag_2.scaleX = shuttleTopTwo.scaleX; 
	shuttleTopToDrag_2.scaleY= shuttleTopTwo.scaleY;
	shuttleTopToDrag_2.rotation=180;

	//shuttle fall part 3
	var shuttleCenterToDrag_3 = new createjs.Bitmap("ASSETS/product_2.png");
	shuttleCenterToDrag_3.x += 120;
	shuttleCenterToDrag_3.y += 320;
	shuttleCenterToDrag_3.scaleX = shuttleCenterThree.scaleX; 
	shuttleCenterToDrag_3.scaleY= shuttleCenterThree.scaleY;
	shuttleCenterToDrag_3.rotation=180;

	//shuttle fall parts 4
	var shuttleBottomToDrag_4 = new createjs.Bitmap("ASSETS/product_1.png");
	shuttleBottomToDrag_4.x += 140;
	shuttleBottomToDrag_4.y += 350;
	shuttleBottomToDrag_4.scaleX = shuttleBottomFour.scaleX; 
	shuttleBottomToDrag_4.scaleY= shuttleBottomFour.scaleY;
	shuttleBottomToDrag_4.rotation=95;

	stage.addChild(
		logo, 
		jewel,
		bot_1,
		bot_2,
		bot_3,
		shuttleTop,
		shuttleTopTwo,
		shuttleCenterThree,
		shuttleBottomFour,
		shuttleTopToDrag_1,
		shuttleTopToDrag_2,
		shuttleCenterToDrag_3,
		shuttleBottomToDrag_4,
		welcomPanel,
		wording_1,
		playNow);
		//stage.addChild() at the end 




	//ANIMATION START

	//play now
	createjs.Tween.get(playNow, { loop: true })
	.to({ scaleX: 0.55, scaleY:0.55 }, 3000, createjs.Ease.getPowInOut(4))
	.to({ scaleX: 0.5, scaleY:0.5 }, 1000, createjs.Ease.getPowInOut(4))


	//jewel
	createjs.Tween.get(jewel, { loop: false })
	.to({x:500 }, 700, createjs.Ease.getPowInOut(2))
	.to({x:200 }, 1600, createjs.Ease.getPowInOut(4))



  	//welcome panel (panel + wording)
  	createjs.Tween.get(welcomPanel, { loop: false })

  	.to({y:-200 }, 700, createjs.Ease.getPowInOut(2))
  	.to({y:180 }, 1600, createjs.Ease.getPowInOut(4))
  	.to({y:150, alpha:0 }, 3000, createjs.Ease.getPowInOut(4));

  	createjs.Tween.get(wording_1, { loop: false })
  	.to({y:-200 }, 650, createjs.Ease.getPowInOut(4))
  	.to({y:220 }, 1700, createjs.Ease.getPowInOut(2))
  	.to({y:150, alpha:0 }, 3000, createjs.Ease.getPowInOut(4))
  	//ANIMATION END

  	//MOUSE EVENTS START
  	//

  	//play now redirection
  	playNow.addEventListener("click", function(evt) {
  		window.location.replace("https://play.google.com/store/apps/details?id=com.rockbite.deeptown&hl=fr");
  		evt.remove();
  	});


  	//shuttleTop move
  	shuttleTopToDrag_1.on("pressmove", function(evt) {
  		evt.target.x = evt.stageX;
  		evt.target.y = evt.stageY;
  		if(evt.target.y>80 && evt.target.y <100 && evt.target.x>150 && evt.target.x <170){

  			if(evt.target.x <210){
  				createjs.Tween.get(shuttleTopToDrag_1, { loop: false })
  				.to({rotation: shuttleTopToDrag_1.rotation }, 650, createjs.Ease.getPowInOut(4))
  				.to({rotation: shuttleTop.rotation }, 750, createjs.Ease.getPowInOut(4))

  			}


  			shuttleTopToDrag_1.x =shuttleTop.x;
  			shuttleTopToDrag_1.y = shuttleTop.y;
  			shuttleTopToDrag_1.rotation = 0;
  			ready_1 = true;
  			console.log(ready_1 , ready_2, ready_3 ,ready_4);
  			console.log('part_1 ready');
  			checkWin();
  			evt.remove();
  		}
  	});
  	


  	//shuttleTop 2 move
  	shuttleTopToDrag_2.on("pressmove", function(evt) {

  		evt.target.x = evt.stageX;
  		evt.target.y = evt.stageY;  		
  		if(evt.target.y>150 && evt.target.y <190 && evt.target.x>150 && evt.target.x <190){
  			if(evt.target.x <205){
  				createjs.Tween.get(shuttleTopToDrag_2, { loop: false })
  				.to({rotation: shuttleTopToDrag_2.rotation }, 650, createjs.Ease.getPowInOut(4))
  				.to({rotation: shuttleTopTwo.rotation }, 750, createjs.Ease.getPowInOut(4))
  			}
  			shuttleTopToDrag_2.x =shuttleTopTwo.x;
  			shuttleTopToDrag_2.y = shuttleTopTwo.y;
  			shuttleTopToDrag_2.rotation = 0;
  			ready_2 = true;
  			console.log(ready_1 , ready_2, ready_3 ,ready_4);
  			checkWin();
  			evt.remove();
  			console.log('part_2 ready');
  		}
  	});
  	


  	//shuttleCenter 3 move
  	shuttleCenterToDrag_3.on("pressmove", function(evt) {
  		evt.target.x = evt.stageX;
  		evt.target.y = evt.stageY;
  		if(evt.target.y>200 && evt.target.y <250 && evt.target.x>40 && evt.target.x < 300){
  			if(evt.target.x <140){
  				createjs.Tween.get(shuttleCenterToDrag_3, { loop: false })
  				.to({rotation: shuttleCenterToDrag_3.rotation }, 650, createjs.Ease.getPowInOut(4))
  				.to({rotation: shuttleCenterThree.rotation }, 750, createjs.Ease.getPowInOut(4))
  			}
  			shuttleCenterToDrag_3.x =shuttleCenterThree.x;
  			shuttleCenterToDrag_3.y = shuttleCenterThree.y;
  			shuttleCenterToDrag_3.rotation = 0;
  			ready_3 =true;
  			console.log(ready_1 , ready_2, ready_3 ,ready_4);
  			checkWin();
  			evt.remove();
  			console.log('part_3 ready');
  		}
  	});
  	
  	//shuttleBottom 4 move
  	shuttleBottomToDrag_4.on("pressmove", function(evt) {
  		evt.target.x = evt.stageX;
  		evt.target.y = evt.stageY;
  		if(evt.target.x>150 && evt.target.x <200 && evt.target.y>260 && evt.target.y <285){
  			if(evt.target.y <335){
  				createjs.Tween.get(shuttleBottomToDrag_4, { loop: false })
  				.to({rotation: shuttleBottomToDrag_4.rotation }, 650, createjs.Ease.getPowInOut(4))
  				.to({rotation: shuttleBottomFour.rotation }, 750, createjs.Ease.getPowInOut(4))
  			}
  			shuttleBottomToDrag_4.x =shuttleBottomFour.x;
  			shuttleBottomToDrag_4.y = shuttleBottomFour.y;
  			shuttleBottomToDrag_4.rotation = 0;
  			console.log('part_4 ready');
  			ready_4=true;
  			console.log(ready_1 , ready_2, ready_3 ,ready_4);
  			checkWin();
  			evt.remove();
  		}
  	});
  	



  	//win sequence


  	function checkWin(){
  		if(ready_1 == true && ready_2 == true && ready_3 == true && ready_4== true){

  		//try a low cost flash with a circle 
  		var circle = new createjs.Shape();
  		circle.graphics.beginFill("white").drawCircle(0, 0, 10000);
  		circle.x = 100;
  		circle.y = 100;
  		stage.addChild(circle);
  		//flash
  		createjs.Tween.get(circle, { loop: false })
  		.to({alpha: 0}, 300, createjs.Ease.getPowInOut(2))


  		//remove all parts
  		//black parts
  		stage.removeChild(shuttleTop);
  		stage.removeChild(shuttleBottomFour);
  		stage.removeChild(shuttleCenterThree);
  		stage.removeChild(shuttleTopTwo);

  		//colored parts
  		stage.removeChild(shuttleTopToDrag_1);
  		stage.removeChild(shuttleTopToDrag_2);
  		stage.removeChild(shuttleCenterToDrag_3);
  		stage.removeChild(shuttleBottomToDrag_4);



  		//win text
  		var wording_2 = new createjs.Bitmap("ASSETS/wording_2.png");
  		wording_2.x += 60;
		wording_2.y += 200; //starting outside screen
		wording_2.scaleX = 0.5;
		wording_2.scaleY= 0.5;
		//animation text
		createjs.Tween.get(wording_2, { loop: false })
		.to({alpha: 0 }, 650, createjs.Ease.getPowInOut(4))
		.to({alpha: 1 }, 750, createjs.Ease.getPowInOut(4))


  		//spawn the last rocket and his animation
  		var rocket_end = new createjs.Bitmap("ASSETS/rocket_end.png");
  		rocket_end.x += 115;
  		rocket_end.y += 25;
  		rocket_end.scaleX = 0.45;
  		rocket_end.scaleY= 0.5;


  		//rocket animation
  		createjs.Tween.get(rocket_end, { loop: true })
  		.to({y: rocket_end.y  }, 1300, createjs.Ease.getPowInOut(2))
  		.to({y: rocket_end.y + 15}, 1300, createjs.Ease.getPowInOut(4))
  		.to({y: rocket_end.y - 15}, 1300, createjs.Ease.getPowInOut(4))
  		.to({y: rocket_end.y }, 1300, createjs.Ease.getPowInOut(4))

  		stage.addChild(
  			rocket_end,
  			wording_2
  			)
  		console.log('YOU WIN !! 😎 🤟');

  	}
  }

  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick(event) {
  	stage.update();
  }
}