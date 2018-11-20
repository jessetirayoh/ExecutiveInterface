/* ----------------------------------------- */
/* Set the active button on the icon bar and opens the tab content accordingly */
// document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
	var i, tabContent, tabLinks, openFolder;
	tabContent = document.getElementsByClassName("tabContent");
	openFolder = document.getElementById("defaultOpen");
	openSettings = document.getElementById("defaultSettings");
	openWallSettings = document.getElementById("defaultWallSettings");

	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
	tabLinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

	if (openFolder.classList.contains("active") == true) {
		openFolder.getElementsByTagName("i")[0].attributes[0].nodeValue = "fa fa-folder-open-o";
	} else if (openFolder.classList.contains("active") == false) {
		openFolder.getElementsByTagName("i")[0].attributes[0].nodeValue = "fa fa-folder-o";
	}

	if (openSettings.classList.contains("active") == true) {
		openSettings.getElementsByTagName("i")[0].attributes[0].nodeValue = "fa fa-cogs";
	} else if (openSettings.classList.contains("active") == false) {
		openSettings.getElementsByTagName("i")[0].attributes[0].nodeValue = "fa fa-cog";
	}

	if (openWallSettings.classList.contains("active") == true) {
		openWallSettings.getElementsByTagName("i")[0].attributes[0].nodeValue = "fa fa-th";
	} else if (openWallSettings.classList.contains("active") == false) {
		openWallSettings.getElementsByTagName("i")[0].attributes[0].nodeValue = "fa fa-th-large";
	}
}
/* ----------------------------------------- */
/* Prints out XML in the console by calling the xmllist command from HiperService */
function printList() {
	var data =
		'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<Commands>\n\t<action type="list">\n\t\n\t</action>\n</Commands>';

	var xhr = new XMLHttpRequest();

	// var nameXML = document.getElementById("name").value;

	xhr.addEventListener("readystatechange", function() {
		if (this.readyState === 4 && this.status === 200) {
			// console.log(this.response);
			// Prints the name element tag from the XML
			getNameXML(this);
			// previewImage(this);

			// Prints the formatted XML
			// xml_raw = this.response;
			// xml_formatted = formatXml(xml_raw);
			// xml_escaped = xml_formatted
			// 	.replace(/&/g, "&amp;")
			// 	.replace(/</g, "&lt;")
			// 	.replace(/>/g, "&gt;")
			// 	.replace(/ /g, "&nbsp;")
			// 	.replace(/\n/g, "<br />");
			// var mydiv = document.createElement("div");
			// mydiv.setAttribute("id", "xmlDiv");
			// mydiv.innerHTML = xml_escaped;
			// document.body.appendChild(mydiv);
		}
	});

	xhr.open("POST", "http://10.1.4.3:8000/xmlcommand");
	xhr.overrideMimeType("text/xml");
	xhr.send(data);
}
/* ----------------------------------------- */
/* Prints filename and previewImage */
function getNameXML(xml) {
	var xmlDoc = xml.responseXML;
	var name = "";
	var x = xmlDoc.getElementsByTagName("Object");
	var i;
	var j;
	var allName = [];
	var count = 0;

	var fileList = document.getElementById("fileList");

	var browsers = document.getElementById("browsers");
	var environ = document.getElementById("environments");
	var ipstreams = document.getElementById("ipstreams");
	var senders = document.getElementById("senders");
	var slides = document.getElementById("slides");
	var vstreams = document.getElementById("vstreams");

	for (i = 0; i < x.length; i++) {
		var nameXML = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
		var nameX = { nameXML };

		// Prints list on the sidebar
		// name += "<li>" + nameXML + "</li>" + "<br>";
		// name += nameXML + "<br>";

		// Gets the preview images from the content listing
		var data =
			'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<Commands>\n\t<command type="preview"> \n\t\t<name>' +
			nameXML +
			"</name> \n\t</command> \n</Commands>";

		allName.push(nameX);
		console.log(allName);

		var xhr = new XMLHttpRequest();
		xhr.responseType = "blob";

		xhr.open("POST", "http://10.1.4.3:8000/xmlcommand");
		xhr.send(data);

		xhr.onload = function() {
			var createList = document.createElement("li");
			var createText = document.createTextNode(allName[count].nameXML);

			// Creates file into a blob
			var blob = new Blob([this.response], { type: "image/png" });
			var url = URL.createObjectURL(blob);
			var myimg = new Image();
			myimg.src = url;

			if (allName[count].nameXML.includes("Browsers") == true) {
				checkFolder(browsers);
			} else if (allName[count].nameXML.includes("environments") == true) {
				checkFolder(environ);
			} else if (allName[count].nameXML.includes("IP") == true) {
				checkFolder(ipstreams);
			} else if (allName[count].nameXML.includes("senders") == true) {
				checkFolder(senders);
			} else if (allName[count].nameXML.includes("slideshows") == true) {
				checkFolder(slides);
			} else if (allName[count].nameXML.includes("video_streams") == true) {
				checkFolder(vstreams);
			} else {
				checkFolder(fileList);
			}

			/* Checks pre-set Hiperwall folders */
			function checkFolder(arg) {
				createList.appendChild(myimg);
				createList.appendChild(createText);
				arg.appendChild(createList);
				myimg.setAttribute("id", allName[count].nameXML);
				myimg.setAttribute("ondragstart", "drag(event)");
				count++;
			}

			/* Basic Working version */
			// document.getElementById("fileList").appendChild(myimg);
			// console.log(myimg);
			// document.getElementById("fileList").appendChild(document.createElement("br"));
			// console.log("Picture Uploaded");
			// myimg.setAttribute("id", allName[count].nameXML);
			// myimg.setAttribute("ondragstart", "drag(event)");
			// count++;
		};
	}
}
