window.onload = function() {
	/*var paper = Raphael("canvas_container");
	paper.piechart(
	  100, 
	  100, 
	  90,  
	   [18.373, 18.686, 2.867, 23.991, 9.592, 0.213], // values
	   {
	   legend: ["Windows/Windows Live", "Server/Tools", "Online Services", "Business", "Entertainment/Devices", "Unallocated/Other"],
	   colors: ["#000038", "#000066", "#0000ff", "#c7c7ff", "#a4a4b7", "#e0e0ef"]
	   }
	 );*/
	 var r = Raphael("canvas_container");
	 r.width = "640px";
	 r.height = "480px";
     // Creates donut chart with center at 320, 200,
     // radius 100 and data: [55, 20, 13, 32, 5, 1, 2]
     var pie = r.piechart(100, 100, 100, [20, 80], {
    	 donut : true , donutDiameter: 0.3, legend : ["20 %", "80 %", ], legendpos: "east", 
    	 colors:['#CCC','#9ae013'],strokewidth: 0});
     pie.hover(function () {
         var that = this.sector;
         this.sector.stop();
         this.sector.scale(1.1, 1.1, this.cx, this.cy);
         pie.each(function() {
            if(this.sector.id === that.id) {
             console.log(pie)
                tooltip = r.text(320, 240, this.sector.value.value).attr({"font-size": 35, "fill":"#000"});
            }
         });
         if (this.label) {
             this.label[0].stop();
             this.label[0].attr({ r: 7.5 });
             this.label[1].attr({ "font-weight": 800 });
         }
     }, function () {
         this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");
         tooltip.remove();
         if (this.label) {
             this.label[0].animate({ r: 5 }, 500, "bounce");
             this.label[1].attr({ "font-weight": 400 });
         }
     });
};