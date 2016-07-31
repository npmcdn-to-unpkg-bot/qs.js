var config = {"lib":{"description":"qs.js.org quickstart template for Riot.js","config":{"group":"Frameworks"},"author":"Roman Akhmadullin","data":{"js":"riot.mount('riot-component', {\n    username: 'World',\n    tasks: [\n        { title: 'clean cup', completed: false },\n        { title: 'go to sleep', completed: false },\n    ]\n});\n","html":"<!DOCTYPE html>\n<html>\n<head>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/riot/2.5.0/riot+compiler.min.js\"></script>\n    <meta charset=\"utf-8\">\n    <title>Riot.js started with qs.js.org</title>\n</head>\n<body>\n    <riot-component></riot-component>\n\n    <script type=\"riot/tag\">\n        <riot-component>\n            <h1>Hello, {username}!</h1>\n            <p>you tasks:</p>\n            <ul>\n                <li each=\"{ task in tasks }\">{task.title}</li>\n            </ul>\n\n            var tag = this\n\n            tag.username = opts.username\n            tag.tasks = opts.tasks\n        </riot-component>\n    </script>\n</body>\n</html>\n","css":""},"key":"riot"},"playground":{"key":"jsfiddle","label":"JsFiddle"}};