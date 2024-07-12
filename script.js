let click = 0;
let symTurn=1;

let HisTit = ["IV.bc - IX.ad","IX-XV","XV-XX","XX-XXI"]

let HisText = ["The Scythians, Sarmatians, and Cimmerians decorated clothes made of linen and animal skin with embroidered geometric ornaments consisting of swastikas, meanders, and waves. The ancient Greek historian Herodotus claimed that embroidery decorated the clothes of the Scythians, who lived in the territory of modern Ukraine for a long time. Embroidered clothes and elements of Ukrainians are depicted on vases of the Scythian period (4th century BC). And in the graves of the Sarmatians (1st century AD) during excavations, gold-embroidered shirts were found. Archaeologists also found figurines of people in clothes with elements of embroidery on gold jewelry and statuettes. In the Cherkasy region, near the village of Martynivka, one of the oldest examples of fine art was found. Among the items dated to the 6th century, statuettes of ancient inhabitants were found - little men dressed in long, wide shirts with patterned embroidery at chest level. Such clothes were worn by the Ukrainian peasantry even 100 years ago. When the grave of a noble and wealthy Sarmatian woman was excavated in the Mykolaiv region (the mound of Sokolov's Grave remained almost the only one that was not looted), archaeologists managed to find the remains of gold sewing on purple silk fabric. This proves the importance of embroidered clothes for people because they were put in the grave together with gold.","Finds of the 9th century AD show that our ancestors used embroidery elements in their clothes. Embroidery-like patterns are found on stone statues, belts, headbands, and interior items from ancient times. Vyshyvanka were of great value in Kyivan Rus. Embroidered clothes were considered very rare and expensive, available only to the rich, and the craft itself was owned by the chosen ones. There is a lot of documented evidence that the nobility was dressed in embroidered clothes. In the Ipatiev chronicle from 1252, it is said that Prince Danylo Halytsky, during a meeting with the king, was dressed in a jacket lined with gold flat nets. There were separate schools of embroiderers where women were taught skills. The first such school was started by Volodymyr Monomakh's sister Hanka. Later in the 17th century, embroidery was taught at the Kyiv-Pechersk Lavra when its abbess was Maria Magdalena Mazepa, the mother of Hetman Ivan Mazepa.","Before the destruction of the Cossacks and the related decline of Ukrainian national clothing, the Cossacks' vyshyvankas were sewn with silk with the addition of gold and silver thread. Burghers and merchants wore the same shirts in the Cossack era. Sewing with silk, gold, and silver, garus reproduced the plant forms of the ornament. But in this type of Ukrainian sewing, plant forms are adapted to the techniques of ornamentation. From the time of the Hetmanship, embroidery became more accessible to ordinary people. Every woman knew how to embroider and passed these skills on to her daughters. The girls were embroidering dresses and towels for their upcoming wedding. 'Due to social conditions, national clothing was kept in the higher social ranks of society, the embroidery on the canvas was done with colored silk with the addition of silver and gold thread. At that time, these materials could be found in the cloths of wealthy Cossacks on the left side of the Dnieper. In the clothes of ordinary people, silk embroidery was performed very rarely.' (1874 pp.)","During the period of the Ukrainian People's Republic (1917-1921), embroidery received a special status and became a symbol of self-expression and national pride. It was a time when wearing an embroidered shirt became fashionable and progressive. The complicated historical period associated with the collapse of the Russian Empire and the struggle of Ukraine for its independence added a new meaning to Vyshyvanka. The first explosion of fashion for embroidered and folk shirts in the Soviet republics occurred in the 1920s and early 1930s, i.e., the era of NEP and Korenization. In the USSR, embroidered dresses were worn by both party leaders and ordinary people as ceremonial clothing. 'Ukrkhudozhpromspilka' developed three types of shirts for mass production based on the national Ukrainian men's shirt: 'Ukrainka', 'hutsulka' and 'chumachka.' The second Soviet upsurge in the popularity of folk shirts fell on the second half of the 1950s and the beginning of the 1960s. It is associated with the stay at the head of the Soviet Union of Nikita Khrushchev, who loved Ukrainian embroidered shirts. With the resignation of M. Khrushchev coincided the decline in the popularity of wearing embroidered shirts, which lasted until the revival of Independence. During the period of Soviet stagnation, the vyshyvanka became a resolutely dissident and patriotic Ukrainian garment."]

let SymbolTitle = ["Rhombus","Triangles","S-motifs","Cross ","8-pointed star","Oblique cross","Infinity","Tree of life","Berehynya"]

let pictures = ["Pictures/symbols/11.png","Pictures/symbols/22.png","Pictures/symbols/33.png","Pictures/symbols/44.png","Pictures/symbols/55.png","Pictures/symbols/66.png","Pictures/symbols/88.png","Pictures/symbols/77.png","Pictures/symbols/99.png"];

let Cells = ["SliberC1","SliberC2","SliberC3","SliberC4","SliberC5","SliberC6","SliberC7","SliberC8","SliberC9",]

let SymbolText = ["A symbol of fertility, because its shape resembles two triangles, male and female. Refers to the cult of the earth. A rhombus (with a dot in the middle) is a symbol of a sown field, which was extremely important to our ancestors, meaning wealth, prosperity and well-being.","There are two types of triangles found in embroidery. They differ in the direction of the top - up or down. A triangle with the top up is a male symbol, a sign of fire, spirit. The top-down triangle symbolizes the female principle, matter, it is, in fact, a sign of the womb, the cup where new life is born. In embroidery there are ornaments with different combinations of triangles. It can be a linear ornament, a toothed pattern, triangles can be combined in the form of a so-called 'hourglass' - when two triangles touch at the top, it is a designation of the faces of being, the world-anti-world.","This symbol also refers to the cult of water, but it is a sign of the so-called 'earthly waters', those that give life. That is, it is also a symbol of fertility. Researchers also attribute this symbol to the ancient snake cult. The snake, as the guardian of the underworld, symbolized the male essence, fertility and fertilization, in addition, the snake was always associated with water.","It is a symbol of the Sun, the Creator, the male principle. Today, it is primarily associated with the idea of Christ(Jesus Christ), it marks the victory of light over darkness. In addition, it is a sign of the centrality of space, the harmony of the four elements.","Symbol of the Creator, the Sun. It is also a sign of the Mother of God, the so-called Star of the Mother: the 8-pointed star is depicted on icons of the Mother of God. It is interesting that this motif is formed by superimposing a straight cross on an oblique one, that is, it is a combination of male and female principles.","The symbol of the Moon, the feminine principle. The crossing of two lines is protection, a talisman against evil.","One of the oldest signs symbolizing eternity, the continuity of existence - because it has no beginning and no end. A symbol related to the cult of water, which existed in the first civilizations, in particular, the Trypilian one. In addition, infinity is a symbol of protection, it was believed that its image prevents the penetration of evil, bad energy into the body.","A symbol that reflects the model of the universe, the division into the afterlife, earthly life and the heavenly kingdom. Also, the tree is a symbol of the past, present and future. It contains the idea of procreation, life. The Tree of Life was often embroidered on towels. Often the motif of the world tree resembles a female figure with raised hands.","Women's silhouettes in embroidery the symbolism of fertility and life extension. There are symbols with raised hands - this is Oranta's ritual gesture, which is used to pray for a harvest, life. Another symbol is a female figurine with hands down (or, as an option, folded on the stomach) - a symbol of harvest protection, a sign of Rozhanytsa(day of harvest), who blesses the harvest, gives it."]

function White(){
	
	if (click == 0)
	{
		const BackGround = document.getElementsByClassName("Body1");
		for (let i = 0; i < BackGround.length; i++) {
			  BackGround[i].style.backgroundColor = "white";
		}

		const BackGround1 = document.getElementsByClassName("BackG");
		for (let i = 0; i < BackGround1.length; i++) {
			  BackGround1[i].style.backgroundColor = "white";
		}

		const text = document.getElementsByClassName("BorschText");
		for (let i = 0; i < text.length; i++) {
			  text[i].style.color = "black";
		}
		
		var InvertIndex = document.querySelector(':root');
		InvertIndex.style.setProperty('--InvertIndex', 0);

		var MapTextColor = document.querySelector(':root');
		MapTextColor.style.setProperty('--MapTextColor', "white");

		var BackColor = document.querySelector(':root');
		BackColor.style.setProperty('--BackColor', "white");

		var BackColor = document.querySelector(':root');
		BackColor.style.setProperty('--BackColorI', "black");

		const text1 = document.getElementsByClassName("text");
		for (let i = 0; i < text1.length; i++) {
			  text1[i].style.color = "black";
		}
		click=1;
		
		var tableRow = document.getElementsByClassName("ModeButton");
		for (let i = 0; i < tableRow.length; i++) {
			console.log(tableRow[i].toString());
			tableRow[i].style.backgroundImage = "url('Pictures/ModeButton/moon.jpg')";
		}		   		
	}
	else if (click == 1)
	{
		const BackGround = document.getElementsByClassName("Body1");
		for (let i = 0; i < BackGround.length; i++) {
			  BackGround[i].style.backgroundColor = 434343;
		}

		const BackGround1 = document.getElementsByClassName("BackG");
		for (let i = 0; i < BackGround1.length; i++) {
			  BackGround1[i].style.backgroundColor = 434343;
		}

		const text = document.getElementsByClassName("BorschText");
		for (let i = 0; i < text.length; i++) {
			  text[i].style.color = "white";
		}

		var InvertIndex = document.querySelector(':root');
		InvertIndex.style.setProperty('--InvertIndex', 1);

		var MapTextColor = document.querySelector(':root');
		MapTextColor.style.setProperty('--MapTextColor', "#434343");

		var BackColor = document.querySelector(':root');
		BackColor.style.setProperty('--BackColor', "black");

		var BackColor = document.querySelector(':root');
		BackColor.style.setProperty('--BackColorI', "white");

		const text1 = document.getElementsByClassName("text");
		for (let i = 0; i < text1.length; i++) {
			  text1[i].style.color = "white";
		}
		click=0;
		var tableRow = document.getElementsByClassName("ModeButton");
		for (let i = 0; i < tableRow.length; i++) {
			console.log(tableRow[i].toString());
			tableRow[i].style.backgroundImage = "url('Pictures/ModeButton/sun.jpg')";
		}
	}
	else
	{
		
	}
	
	

}

function Symbols(){

	for (let i = 0; i < Cells.length; i++) {
			const Cell = document.getElementsByClassName(Cells[i]);
			for (let j = 0; j<Cell.length; j++)
				{
					Cell[j].style.backgroundColor = "darkgray";
					if (i==symTurn)
					{
						Cell[j].style.backgroundColor = "white";
					}
				}

	}
	
	preloadImages(pictures);
	const symbolsPic = document.getElementsByClassName("symbolPic");
	
		for (let i = 0; i < symbolsPic.length; i++) {
			symbolsPic[i].style.width = "0px";

		}
		sleep(200).then(() => {
			for (let i = 0; i < symbolsPic.length; i++) {
				symbolsPic[i].src = pictures[symTurn];
				
			}
			sleep(200).then(() => {});
			
			
			for (let i = 0; i < symbolsPic.length; i++) {
				symbolsPic[i].style.width = "300px";
			}

			const symbolsT = document.getElementsByClassName("textForSymbols, text");
			for (let i = 0; i < symbolsT.length; i++) {
					symbolsT[i].textContent = SymbolText[symTurn];;
			}

			const symbolsTit = document.getElementsByClassName("TitleForSymbols");
			for (let i = 0; i < symbolsTit.length; i++) {
						symbolsTit[i].textContent = SymbolTitle[symTurn];;
			}
			
			symTurn++;
			if (symTurn > ((pictures.length)-1))
			{
				symTurn = 0;
			}
		});
		
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function preloadImages(array) {
	if (!preloadImages.list) {
		preloadImages.list = [];
	}
	var list = preloadImages.list;
	for (var i = 0; i < array.length; i++) {
		var img = new Image();
		img.onload = function() {
			var index = list.indexOf(this);
			if (index !== -1) {
				// remove image from the array once it's loaded
				// for memory consumption reasons
				list.splice(index, 1);
			}
		}
		list.push(img);
		img.src = array[i];
	}
}



function DataUpdate() {
	preloadImages(pictures);
	sleep(200).then(() => {DataUpdate();});
}

DataUpdate();


function slide(num) {
	const symbolsPic = document.getElementsByClassName("symbolPic");
	let ranNum=symTurn-1;
	if (ranNum==-1)
	{
		ranNum=8;
	}
	if (ranNum!=num)
	{
		for (let i = 0; i < Cells.length; i++) {
				const Cell = document.getElementsByClassName(Cells[i]);
				for (let j = 0; j<Cell.length; j++)
					{
						Cell[j].style.backgroundColor = "darkgray";
						if (i==num)
						{
							Cell[j].style.backgroundColor = "white";
						}
					}

		}
		preloadImages(pictures);
		

			for (let i = 0; i < symbolsPic.length; i++) {
				symbolsPic[i].style.width = "0px";

			}
			sleep(200).then(() => {
				for (let i = 0; i < symbolsPic.length; i++) {
					symbolsPic[i].src = pictures[num];

				}
				sleep(200).then(() => {});


				for (let i = 0; i < symbolsPic.length; i++) {
					symbolsPic[i].style.width = "300px";
				}

				const symbolsT = document.getElementsByClassName("textForSymbols, text");
				for (let i = 0; i < symbolsT.length; i++) {
						symbolsT[i].textContent = SymbolText[num];;
				}

				const symbolsTit = document.getElementsByClassName("TitleForSymbols");
				for (let i = 0; i < symbolsTit.length; i++) {
							symbolsTit[i].textContent = SymbolTitle[num];;
				}

				symTurn=num+1;
				if (symTurn > ((pictures.length)-1))
				{
					symTurn = 0;
				}
			});
	}
	
}

function His(num) {
	const Text = document.getElementsByClassName("HisTit");
	for (let i = 0; i < Text.length; i++) {
		Text[i].textContent = HisTit[num];;
	}

	const Text1 = document.getElementsByClassName("HisText");
	for (let i = 0; i < Text1.length; i++) {
		Text1[i].textContent = HisText[num];;
	}
}