var config = {"lib":{"description":"qs.js.org quickstart template for Firebase","config":{"group":"Data"},"author":"Kirill Cherkashin","data":{"js":"var container = document.getElementById('container');\nvar ref = new Firebase('https://j0nromqawyq.firebaseio-demo.com/');\n\nref.on('value', function(snapshot){\n  container.innerHTML = snapshot.val().test;\n});\n","html":"<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\">\n    <title>Firebase started with qs.js.org</title>\n    <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>\n</head>\n<body>\n<div id=\"container\"></div>\n</body>\n</html>\n","css":""},"key":"firebase"},"playground":{"key":"jsfiddle","label":"JsFiddle"}};