function alphanum(a){switch(a){case"a":return 1;case"b":return 2;case"c":return 3;case"d":return 4;case"e":return 5;case"f":return 6;case"g":return 7;case"h":return 8;default:return 0}}function numalpha(a){switch(a){case 1:return"a";case 2:return"b";case 3:return"c";case 4:return"d";case 5:return"e";case 6:return"f";case 7:return"g";case 8:return"h";default:return 0}}function error(){console.log("invalid move"),selected=!1}function move(){cur.color!=dest.color&&(exists(dest.pos.raw)&&($("#"+dest.pos.raw).children().remove(),$("#"+cur.pos.raw).has("img").children().empty().appendTo("#"+dest.pos.raw)),$("#"+cur.pos.raw).has("img").children().empty().appendTo("#"+dest.pos.raw))}function exists(a){return $("#"+a).children().length>=1}function pawncheck(){return"white"==cur.color?(dest.pos.y-cur.pos.y!=1||cur.pos.x!=dest.pos.x||exists(dest.pos.raw))&&(dest.pos.y-cur.pos.y!=2||cur.pos.x!=dest.pos.x||2!=cur.pos.y||exists(dest.pos.raw))?dest.pos.y-cur.pos.y==1&&(dest.pos.x-cur.pos.x==1||dest.pos.x-cur.pos.x==-1)&&exists(dest.pos.raw):!0:(cur.pos.y-dest.pos.y!=1||cur.pos.x!=dest.pos.x||exists(dest.pos.raw))&&(cur.pos.y-dest.pos.y!=2||cur.pos.x!=dest.pos.x||7!=cur.pos.y||exists(dest.pos.raw))?cur.pos.y-dest.pos.y==1&&(dest.pos.x-cur.pos.x==1||dest.pos.x-cur.pos.x==-1)&&exists(dest.pos.raw):!0}function kingcheck(){return Math.abs(cur.pos.x-dest.pos.x)<=1&&Math.abs(cur.pos.y-dest.pos.y)<=1}function rookcheck(){return(cur.pos.y==dest.pos.y||cur.pos.x==dest.pos.x)&&dest.pos.y>=cur.min.y&&dest.pos.y<=cur.max.y&&dest.pos.x>=cur.min.x&&dest.pos.x<=cur.max.x}function bishopcheck(){return 1==Math.abs((dest.pos.y-cur.pos.y)/(dest.pos.x-cur.pos.x))}function queencheck(){return 1==Math.abs((dest.pos.y-cur.pos.y)/(dest.pos.x-cur.pos.x))||cur.pos.x==dest.pos.x||cur.pos.y==dest.pos.y}function knightcheck(){return 1==Math.abs(dest.pos.y-cur.pos.y)&&2==Math.abs(dest.pos.x-cur.pos.x)||2==Math.abs(dest.pos.y-cur.pos.y)&&1==Math.abs(dest.pos.x-cur.pos.x)}function MaxY(a){var b=numalpha(cur.pos.x)+(a+1);return console.log(b),exists(b)?(console.log("end"),cur.max.y=a+1,void console.log(cur.max.y)):a>=8?void(cur.max.y=8):void MaxY(a+1)}function MinY(a){var b=numalpha(cur.pos.x)+(a-1);return console.log(b),exists(b)?(console.log("end"),cur.min.y=a-1,void console.log(cur.min.y)):1>=a?void(cur.min.y=1):void MinY(a-1)}function MaxX(a){var b=numalpha(a+1)+cur.pos.y;return console.log(b),exists(b)?(console.log("end"),cur.max.x=a+1,void console.log(cur.max.x)):a>=8?(cur.max.x=8,void console.log(cur.max.x)):void MaxX(a+1)}function MinX(a){var b=numalpha(a-1)+cur.pos.y;return console.log(b),exists(b)?(console.log("end"),cur.min.x=a-1,void console.log(cur.min.x)):1>=a?(cur.min.x=1,void console.log(cur.min.x)):void MinX(a-1)}var cur={color:"",type:"",pos:{raw:"",x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},dest={color:"",pos:{raw:"",x:0,y:0}},selected=!1;$("#chess").children().children().click(function(){if(selected===!1)cur.color=$(this).children().attr("data-color"),cur.type=$(this).children().attr("class"),cur.pos.raw=$(this).attr("id"),cur.pos.x=alphanum(cur.pos.raw.substring(0,1)),cur.pos.y=Number(cur.pos.raw.substring(1,2)),"rook"==cur.type,MaxX(cur.pos.x),MaxY(cur.pos.y),MinX(cur.pos.x),MinY(cur.pos.y),"bishop"==cur.type,!0,console.log(cur),cur.type?selected=!0:error();else{switch(dest.color=$(this).children().attr("data-color"),dest.type=$(this).children().attr("class"),dest.pos.raw=$(this).attr("id"),dest.pos.x=alphanum(dest.pos.raw.substring(0,1)),dest.pos.y=Number(dest.pos.raw.substring(1,2)),console.log(dest),cur.type){case"pawn":pawncheck()?move():error();break;case"rook":rookcheck()?move():error();break;case"king":kingcheck()?move():error();break;case"bishop":bishopcheck()?move():error();break;case"queen":queencheck()?move():error();break;case"knight":knightcheck()?move():error()}selected=!1}});